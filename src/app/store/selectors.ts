import { AppStateType } from './store';
import { RepoData, UserData } from '../types/types';

export const getUserData = (store: AppStateType): UserData | undefined => {
  return store.user.userData;
};

export const getUserRepositories = (
  store: AppStateType,
): RepoData[] | undefined => {
  return store.user.repos;
};
