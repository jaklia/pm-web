export interface IEditProjectActionTypes {
  EDIT: 'EDIT_PROJECT';
}

export const editProjectActionTypes: IEditProjectActionTypes = {
  EDIT: 'EDIT_PROJECT',
};

export interface IEditProjectRequestAction {
  type: IEditProjectActionTypes['EDIT'];
}

export type IEditProjectActions = IEditProjectRequestAction;

const editProjectRequestActionCreator = (): IEditProjectRequestAction => ({
  type: editProjectActionTypes.EDIT,
});
export const editProjectRequest = editProjectRequestActionCreator;
