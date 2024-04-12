import {createSlice} from '@reduxjs/toolkit';
import {FilterModel} from './model/mainModel';

const initialState: FilterModel = {
  loading: false,
  error: '',
};

export const filterReducer = createSlice({
  name: 'filter',
  initialState,
  reducers: {},

  // extraReducers: builder => {},
});

export const {} = filterReducer.actions;
export default filterReducer.reducer;
