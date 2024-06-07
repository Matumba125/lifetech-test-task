import { AppStateType } from './store';
import { RepoData, UserData } from '../types/types';
import { ErrorsType } from '../../pages/userPage/model/userReducer';

export const getUserData = (store: AppStateType): UserData | undefined => {
  return store.user.userData;
};

export const getUserRepositories = (
  store: AppStateType,
): RepoData[] | undefined => {
  return store.user.repos;
};

export const getErrors = (store: AppStateType): ErrorsType => {
  return store.user.errors;
};
