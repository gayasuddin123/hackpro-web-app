import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

const Profile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    skillLevel: '',
    interestedIn: [],
    goal: '',
    collegeName: '',
  });

  const skillLevels = ['Beginner', 'Intermediate', 'Advanced'];
  const interests = ['Cybersecurity', 'AI', 'Python', 'Web Development', 'Cloud', 'DevOps'];
  const goals = ['Job', 'Skill Upgrade', 'College', 'Career Change', 'Freelancing'];

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (response.data.success) {
        const userData = response.data.data;
        setUser(userData);
        setFormData({
          name: userData.name || '',
          email: userData.email || '',
          phone: userData.phone?.number || '',
          bio: userData.bio || '',
          skillLevel: userData.skillLevel || '',
          interestedIn: userData.interestedIn || [],
          goal: userData.goal || '',
          collegeName: userData.collegeName || '',
        });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
    setSuccess('');
  };

  const handleInterestChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interestedIn: prev.interestedIn.includes(interest)
        ? prev.interestedIn.filter((i) => i !== interest)
        : [...prev.interestedIn, interest],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess('');

    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `${API_URL}/users/profile`,
        {
          name: formData.name,
          phone: formData.phone,
          bio: formData.bio,
          skillLevel: formData.skillLevel,
          interestedIn: formData.interestedIn,
          goal: formData.goal,
          collegeName: formData.collegeName,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        setSuccess('Profile updated successfully!');
        setUser(response.data.data);
        
        // Update localStorage
        const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
        localStorage.setItem('user', JSON.stringify({
          ...storedUser,
          name: response.data.data.name,
          avatar: response.data.data.avatar,
        }));
        
        // Notify navbar
        window.dispatchEvent(new Event('authChange'));
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleAvatarChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      return;
    }

    setUploadingAvatar(true);
    setError('');

    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('avatar', file);

      const response = await axios.put(`${API_URL}/users/avatar`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        setUser((prev) => ({ ...prev, avatar: response.data.data.avatar }));
        setSuccess('Avatar updated successfully!');
        
        // Update localStorage
        const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
        localStorage.setItem('user', JSON.stringify({
          ...storedUser,
          avatar: response.data.data.avatar,
        }));
        
        // Notify navbar
        window.dispatchEvent(new Event('authChange'));
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to upload avatar');
    } finally {
      setUploadingAvatar(false);
    }
  };

  const handleRemoveAvatar = async () => {
    if (!user?.avatar?.url) return;

    setUploadingAvatar(true);
    setError('');

    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`${API_URL}/users/avatar`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setUser((prev) => ({ ...prev, avatar: { public_id: null, url: null } }));
        setSuccess('Avatar removed successfully!');
        
        // Update localStorage
        const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
        localStorage.setItem('user', JSON.stringify({
          ...storedUser,
          avatar: { public_id: null, url: null },
        }));
        
        // Notify navbar
        window.dispatchEvent(new Event('authChange'));
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to remove avatar');
    } finally {
      setUploadingAvatar(false);
    }
  };

  const getUserInitials = () => {
    if (!user?.name) return 'U';
    const names = user.name.split(' ');
    return names.length >= 2
      ? `${names[0][0]}${names[1][0]}`.toUpperCase()
      : names[0][0].toUpperCase();
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-950 flex items-center justify-center pt-20">
          <div className="w-16 h-16 border-4 border-lime-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-950 pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Profile Settings</h1>
            <p className="text-gray-400">Manage your account settings and preferences</p>
          </div>

          {/* Messages */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 flex items-center gap-2">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 flex items-center gap-2">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {success}
            </div>
          )}

          {/* Avatar Section */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 mb-6">
            <h2 className="text-lg font-semibold text-white mb-4">Profile Photo</h2>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Avatar */}
              <div className="relative group">
                <div
                  onClick={handleAvatarClick}
                  className="relative w-28 h-28 rounded-full cursor-pointer overflow-hidden border-4 border-lime-400/50 hover:border-lime-400 transition-all"
                >
                  {user?.avatar?.url ? (
                    <img
                      src={user.avatar.url}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center text-black font-bold text-3xl">
                      {getUserInitials()}
                    </div>
                  )}
                  
                  {/* Upload Overlay */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {uploadingAvatar ? (
                      <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </div>
                </div>
                
                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </div>

              {/* Avatar Actions */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleAvatarClick}
                  disabled={uploadingAvatar}
                  className="px-4 py-2 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-all disabled:opacity-50"
                >
                  {uploadingAvatar ? 'Uploading...' : 'Upload New Photo'}
                </button>
                {user?.avatar?.url && (
                  <button
                    onClick={handleRemoveAvatar}
                    disabled={uploadingAvatar}
                    className="px-4 py-2 text-red-400 border border-red-400/50 rounded-lg hover:bg-red-400/10 transition-all disabled:opacity-50"
                  >
                    Remove Photo
                  </button>
                )}
                <p className="text-gray-500 text-sm mt-1">JPG, PNG or GIF. Max 5MB.</p>
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Basic Info */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Basic Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-lime-400 transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email (Read-only) */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    disabled
                    className="w-full px-4 py-3 bg-gray-950/50 border border-gray-700 rounded-xl text-gray-500 cursor-not-allowed"
                  />
                  <p className="text-gray-500 text-xs mt-1">Email cannot be changed</p>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    maxLength={10}
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-lime-400 transition-all"
                    placeholder="10-digit phone number"
                  />
                </div>

                {/* Skill Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Skill Level</label>
                  <select
                    name="skillLevel"
                    value={formData.skillLevel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-lime-400 transition-all"
                  >
                    <option value="">Select skill level</option>
                    {skillLevels.map((level) => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Bio */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-lime-400 transition-all resize-none"
                  placeholder="Tell us about yourself..."
                />
                <p className="text-gray-500 text-xs mt-1">{formData.bio.length}/500 characters</p>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Interests</h2>
              
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <label
                    key={interest}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border cursor-pointer transition-all ${
                      formData.interestedIn.includes(interest)
                        ? 'bg-lime-400/20 border-lime-400 text-lime-400'
                        : 'bg-gray-950 border-gray-700 text-gray-400 hover:border-gray-600'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.interestedIn.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                      className="sr-only"
                    />
                    <span className="text-sm font-medium">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Goals */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Learning Goal</h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {goals.map((goal) => (
                  <label
                    key={goal}
                    className={`flex items-center justify-center px-4 py-3 rounded-xl border cursor-pointer transition-all text-center ${
                      formData.goal === goal
                        ? 'bg-lime-400/20 border-lime-400 text-lime-400'
                        : 'bg-gray-950 border-gray-700 text-gray-400 hover:border-gray-600'
                    }`}
                  >
                    <input
                      type="radio"
                      name="goal"
                      value={goal}
                      checked={formData.goal === goal}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <span className="text-sm font-medium">{goal}</span>
                  </label>
                ))}
              </div>

              {/* College Name (if goal is College) */}
              {formData.goal === 'College' && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-300 mb-2">College Name</label>
                  <input
                    type="text"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-lime-400 transition-all"
                    placeholder="Enter your college name"
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="px-6 py-3 text-gray-400 hover:text-white transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-8 py-3 bg-lime-400 text-black font-semibold rounded-xl hover:bg-lime-300 transition-all disabled:opacity-50 flex items-center gap-2"
              >
                {saving ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Saving...
                  </>
                ) : (
                  'Save Changes'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;