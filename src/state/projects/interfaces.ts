import { Project } from "../../models/project";
import { IProjectsStore } from "./store";

/*    using the hooks stuff, so this is no needed
*/

export interface IProjectsMappedProps {
    projectsStore: IProjectsStore
}

export interface IProjectsDispatchedProps {
    getProjects: () => void
    createProject: (project: Project) => void
    updateProject: (project: Project) => void
}

export type IProjectsProps = IProjectsMappedProps & IProjectsDispatchedProps;

export interface IProjectsState { }