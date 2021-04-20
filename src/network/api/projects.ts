import { Urls } from '../../constants/urls';
import { Project } from '../../models/project';
import { network } from '../network';

export class ProjectsApi {
  static getAllProjects() {
    return network.get(Urls.projects);
  }

  static createProject(project: Project) {
    return network.post(Urls.projects, project);
  }

  static updateProject(id: number, project: Project) {
    return network.put(Urls.projectId(id), project);
  }

  static deleteProject(id: number) {
    return network.delete(Urls.projectId(id));
  }
}
