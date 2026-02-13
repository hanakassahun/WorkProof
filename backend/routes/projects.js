const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/projectController');

const projectController = new ProjectController();

// GET /projects
router.get('/', projectController.getAllProjects);

module.exports = router;