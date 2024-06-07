import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RepoData, UserData } from '../../../app/types/types';
import { getRepositories, getUser } from '../../../app/api/api';
import axios from 'axios';

export type ErrorsType = {
  reposEmpty?: boolean;
  userNotFound?: boolean;
};

type InitialStateType = {
  userData?: UserData;
  repos?: RepoData[];
  errors: ErrorsType;
};

const initialState: InitialStateType = {
  userData: undefined,
  repos: undefined,
  errors: {},
};

export const fetchUsers = createAsyncThunk<UserData, string>(
  'user/fetch',
  async (username, { rejectWithValue }) => {
    try {
      const response = await getUser(username);
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue('An unknown error occurred');
    }
  },
);

export const fetchUserRepos = createAsyncThunk<RepoData[], string>(
  'repos/fetch',
  async (username, { rejectWithValue }) => {
    try {
      const response = await getRepositories(username);
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        return rejectWithValue(err.response.data);
      }
      return rejectWithValue('An unknown error occurred');
    }
  },
);

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setErrors(state) {
      state.errors.userNotFound = false;
      state.errors.reposEmpty = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state: InitialStateType, action) => {
      state.userData = action.payload;
      state.errors.userNotFound = false;
    });
    builder.addCase(fetchUsers.rejected, (state: InitialStateType) => {
      state.errors.userNotFound = true;
    });
    builder.addCase(
      fetchUserRepos.fulfilled,
      (state: InitialStateType, action) => {
        state.repos = action.payload;
        state.errors.reposEmpty = false;
      },
    );
    builder.addCase(fetchUserRepos.rejected, (state: InitialStateType) => {
      state.errors.reposEmpty = true;
    });
  },
});

export const userReducer = slice.reducer;
