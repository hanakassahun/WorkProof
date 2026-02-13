const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./config/db');
const projectRoutes = require('./routes/projects');
const userRoutes = require('./routes/users');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
dbConfig();

// Routes
app.use('/projects', projectRoutes);
app.use('/users', userRoutes);

module.exports = app;