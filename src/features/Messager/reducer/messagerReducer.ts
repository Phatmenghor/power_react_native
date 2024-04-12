import {createSlice} from '@reduxjs/toolkit';
import {MessagerModel} from './model/maessagerModel';

const initialState: MessagerModel = {
  loading: false,
  error: '',
};

export const messagerReducer = createSlice({
  name: 'main',
  initialState,
  reducers: {},

  // extraReducers: builder => {},
});

export const {} = messagerReducer.actions;
export default messagerReducer.reducer;
