class ProjectController {
    async getAllProjects(req, res) {
        try {
            const projects = await Project.find();
            res.status(200).json(projects);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving projects', error });
        }
    }
}

export default new ProjectController();