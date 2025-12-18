// src/components/courses/CourseFAQ.jsx

import React, { useState } from 'react';
import { getIcon } from './icons';

const CourseFAQ = ({ faqs }) => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 z-10" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-lime-400 text-sm font-semibold tracking-wider uppercase mb-4">
            ❓ Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-lime-400/30"
            >
              <button
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="text-base sm:text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400 transition-transform duration-300 ${
                    openFaq === faq.id ? 'rotate-180' : ''
                  }`}
                >
                  {getIcon('arrowDown', 'w-5 h-5')}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === faq.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-400 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Questions CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <button className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 text-lime-400 px-6 py-3 rounded-xl font-semibold hover:bg-lime-400/20 transition-all duration-300">
            Contact Our Team
            {getIcon('arrow', 'w-5 h-5')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseFAQ;