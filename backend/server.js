const express = require('express');
const mongoose = require('mongoose');
const app = require('./app');
const dbConfig = require('./config/db');

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
dbConfig();

// Middleware to parse JSON
app.use(express.json());

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});