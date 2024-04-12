import {createSlice} from '@reduxjs/toolkit';
import {MainModel} from './model/mainModel';

const initialState: MainModel = {
  loading: false,
  error: '',
};

export const mainReducer = createSlice({
  name: 'main',
  initialState,
  reducers: {},

  extraReducers: builder => {
    // builder
    //   .addCase(_, state => {
    //     state.loading = true;
    //     state.error = '';
    //   })
    //   .addCase(fetchGetOrderFlow.fulfilled, (state, action) => {})
    //   .addCase(fetchGetOrderFlow.rejected, (state, action) => {});
  },
});

export const {} = mainReducer.actions;
export default mainReducer.reducer;
