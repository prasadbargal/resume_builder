const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
  startDate: String,
  endDate: String,
  title: String,
  company: String,
  description: String,
});

const EducationSchema = new Schema({
  startYear: String,
  endYear: String,
  degree: String,
  institution: String,
  percentage: String,
});

const ResumeSchema = new Schema({
  personalDetails: {
    name: String,
    title: String,
    email: String,
    phone: String,
    location: String,
  },
  skills: [String],
  summary: String,
  experience: [ExperienceSchema],
  education: [EducationSchema],
  achievements: [String],
  hobbies: [String],
  socialLinks: [{
    platform: String,
    url: String,
  }],
});

module.exports = mongoose.model('Resume', ResumeSchema);
