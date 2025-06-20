const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// Specific API Routes (must come before generic handler)
app.post('/api/submit-lore', (req, res) => {
  try {
    const { name, email, title, body } = req.body;
    
    // Basic validation
    if (!name || !email || !title || !body) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Title length validation
    if (title.length > 80) {
      return res.status(400).json({
        success: false,
        message: 'Title must be under 80 characters'
      });
    }

    // Body length validation
    if (body.length < 50 || body.length > 1000) {
      return res.status(400).json({
        success: false,
        message: 'Body must be between 50 and 1000 characters'
      });
    }

    // Simulate successful submission
    console.log('Story submitted:', { name, email, title, body });
    
    res.status(200).json({
      success: true,
      message: 'Story submitted successfully'
    });
  } catch (error) {
    console.error('Error submitting story:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Additional API endpoints for demonstration
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is healthy and running',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/stories', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Stories endpoint reached',
    data: []
  });
});

// Generic API endpoint handler for any /api/* route (must come after specific routes)
app.all('/api/*', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API endpoint reached successfully',
    method: req.method,
    path: req.path
  });
});

// Handle all other routes by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 