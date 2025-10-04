const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');
const auth = require('../middleware/auth');

// Admin route to update resume data
router.post('/', auth, async (req, res) => {
  try {
    const updatedData = req.body;
    let resume = await Resume.findOne();
    if (!resume) {
      resume = new Resume(updatedData);
    } else {
      Object.assign(resume, updatedData);
    }
    await resume.save();
    res.json(resume);
  } catch (err) {
    console.error('Error updating resume:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
