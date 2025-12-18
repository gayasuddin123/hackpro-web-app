const mongoose = require("mongoose");
const slugify = require("slugify");

const lectureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  videoUrl: {
    type: String,
    required: true,
  },
  duration: Number, // in minutes
  isPreview: {
    type: Boolean,
    default: false,
  },
  resources: [
    {
      title: String,
      fileUrl: String,
    },
  ],
  order: Number,
});

const sectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  lectures: [lectureSchema],
  order: Number,
});

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide course title"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    slug: String,
    description: {
      type: String,
      required: [true, "Please provide course description"],
    },
    shortDescription: {
      type: String,
      maxlength: [200, "Short description cannot exceed 200 characters"],
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    price: {
      type: Number,
      required: [true, "Please provide course price"],
      min: [0, "Price cannot be negative"],
    },
    discountPrice: {
      type: Number,
      min: [0, "Discount price cannot be negative"],
    },
    thumbnail: {
      public_id: String,
      url: {
        type: String,
        required: [true, "Please provide course thumbnail"],
      },
    },
    previewVideo: String,
    category: {
      type: String,
      required: [true, "Please provide course category"],
      enum: [
        "Web Development",
        "Mobile Development",
        "Data Science",
        "Machine Learning",
        "DevOps",
        "Cyber Security",
        "Cloud Computing",
        "UI/UX Design",
        "Digital Marketing",
        "Other",
      ],
    },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced", "All Levels"],
      default: "All Levels",
    },
    language: {
      type: String,
      default: "English",
    },
    sections: [sectionSchema],
    requirements: [String],
    whatYouWillLearn: [String],
    tags: [String],
    totalDuration: {
      type: Number,
      default: 0, // in minutes
    },
    totalLectures: {
      type: Number,
      default: 0,
    },
    enrolledStudents: {
      type: Number,
      default: 0,
    },
    ratings: {
      average: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        rating: {
          type: Number,
          required: true,
          min: 1,
          max: 5,
        },
        comment: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    isPublished: {
      type: Boolean,
      default: false,
    },
    isFree: {
      type: Boolean,
      default: false,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    certificateTemplate: String,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Create slug before saving
courseSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

// Calculate total duration and lectures
courseSchema.pre("save", function (next) {
  let totalDuration = 0;
  let totalLectures = 0;

  this.sections.forEach((section) => {
    totalLectures += section.lectures.length;
    section.lectures.forEach((lecture) => {
      totalDuration += lecture.duration || 0;
    });
  });

  this.totalDuration = totalDuration;
  this.totalLectures = totalLectures;
  next();
});

// Index for search
courseSchema.index({ title: "text", description: "text", tags: "text" });

module.exports = mongoose.model("Course", courseSchema);