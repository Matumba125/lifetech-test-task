import axios from 'axios';
import { RepoData, UserData } from '../types/types';

const axiosLiveInstance = axios.create({
  baseURL: 'https://api.github.com',
});

export const getUser = (userName: string) => {
  return axiosLiveInstance.get<UserData>(`users/${userName}`);
};

export const getRepositories = (userName: string) => {
  return axiosLiveInstance.get<RepoData[]>(`/users/${userName}/repos`);
};
