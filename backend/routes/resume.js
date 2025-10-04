const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

// Get resume data (assuming only one resume document)
router.get('/', async (req, res) => {
  try {
    const resume = await Resume.findOne();
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create or update resume data
router.post('/', async (req, res) => {
  try {
    let resume = await Resume.findOne();
    if (resume) {
      // Update existing
      Object.assign(resume, req.body);
      await resume.save();
    } else {
      // Create new
      resume = new Resume(req.body);
      await resume.save();
    }
    res.json(resume);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
