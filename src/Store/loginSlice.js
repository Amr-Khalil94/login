import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk(
  'loginThunk/login',
  async (loginData, thunkAPI) => {
    const { dispatch, useState } = thunkAPI

    console.log(loginData)
  }
)

const loginSlice = createSlice({
  name: 'login',
  initialState: '',
  reducers: {},
  extraReducers: {
    [loginThunk.pending]: (state, action) => {
      console.log(action)
    },
    [loginThunk.fulfilled]: (state, action) => {
      console.log(action)
    },
    [loginThunk.rejected]: (state, action) => {
      console.log(action)
    }

  }

})

export default loginSlice.reducer;
