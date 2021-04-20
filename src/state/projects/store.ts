import { Project } from '../../models/project';
import { IStoreBase } from '../store';

export interface IProjectsStore extends IStoreBase {
  projects: Project[];
}

export const initialProjectStore: IProjectsStore = {
  projects: [],
  isLoaded: false,
  isRequesting: false,
  error: null,
};
