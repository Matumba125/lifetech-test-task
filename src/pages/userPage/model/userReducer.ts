import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RepoData, UserData } from '../../../app/types/types';
import { getRepositories, getUser } from '../../../app/api/api';
import axios from 'axios';

type InitialStateType = {
  userData?: UserData;
  repos?: RepoData[];
};

const initialState: InitialStateType = {
  userData: undefined,
  repos: undefined,
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
    setUserData(state, action: PayloadAction<{ userData: UserData }>) {
      state.userData = action.payload.userData;
    },
    setRepos(state, action: PayloadAction<{ repos: RepoData[] }>) {
      state.repos = action.payload.repos;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
    builder.addCase(fetchUserRepos.fulfilled, (state, action) => {
      state.repos = action.payload;
    });
  },
});

export const userReducer = slice.reducer;
