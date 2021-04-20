import { Project } from '../../models/project';
import { IStoreBase } from '../store';

export interface IProjectsStore extends IStoreBase {
  projects: Project[];
  editing: boolean;
}

export const initialProjectStore: IProjectsStore = {
  projects: [],
  editing: false,
  isLoaded: false,
  isRequesting: false,
  error: null,
};
