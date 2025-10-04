const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/resumeDB'; // Change if needed
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

const resumeRoutes = require('./routes/resume');
const adminRoutes = require('./routes/admin');

// Basic route
app.get('/', (req, res) => {
  res.send('Resume backend API is running');
});

// Use routes
app.use('/api/resume', resumeRoutes);
app.use('/api/admin/resume', adminRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
