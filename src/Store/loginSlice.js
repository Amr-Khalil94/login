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
  reducers: {
    login: (state, action) => {
      console.log(action.payload)
      alert('disptached')
    }
  },
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

export const { login } = loginSlice.actions
export default loginSlice.reducer;
