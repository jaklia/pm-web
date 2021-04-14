import { Project } from "../../models/project";
import { network } from "../network";

let projectUrl = '/api/projects';
export class ProjectsApi {

  static getAllProjects() {
    return network.get(projectUrl);
  }

  static createProject(project: Project) {
    return network.post(projectUrl, project);
  }

  static updateProject(project: Project) {
    return network.put(projectUrl, project);
  }
}