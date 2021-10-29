export default class ProjectsList {
  constructor() {
    this.projects = [];
  }

  getProjects() {
    return this.projects;
  }

  setProjects(projects) {
    this.projects = projects;
  }

  addProject(newProject) {
    this.projects.push(newProject);
  }

  getProject(id) {
    return this.projects.filter((project) => project.getId() === id);
  }

  deleteProject(id) {
    this.projects = this.projects.filter((project) => project.getId() !== id);
  }
}
