import { AppStateType } from './store';
import { UserData } from '../types/types';

export const getUserData = (store: AppStateType): UserData | undefined => {
  return store.user.userData;
};
