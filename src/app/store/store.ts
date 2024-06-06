import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { userReducer } from '../../pages/userPage/model/userReducer';
import { useDispatch } from 'react-redux';

export const rootReducer = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
