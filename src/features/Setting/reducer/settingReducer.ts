import {createSlice} from '@reduxjs/toolkit';
import {SettingModel} from './model/settingModel';

const initialState: SettingModel = {
  loading: false,
  error: '',
};

export const settingReducer = createSlice({
  name: 'setting',
  initialState,
  reducers: {},

  // extraReducers: builder => {},
});

export const {} = settingReducer.actions;
export default settingReducer.reducer;
