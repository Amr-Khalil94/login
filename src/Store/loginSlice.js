import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//axios
import axios from 'axios';

export const loginThunk = createAsyncThunk(
  'login/loginSlice',
  async (loginData, thunkAPI) => {
    console.log(loginData)
    const options = {
      //add your Api's here 
      baseURL: `https://backend.pomac.info/public/api/admin`,

      url: `/login`,
      method: "POST",
      data: loginData,
    };

    return axios(options)
      .then((response) => {
        if (response.data.status) {
          return response.data;
        }
      })
      .catch((err) => { });

  }
)

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    AutObj: {},
    logedIn: false
  },

  extraReducers: {

    [loginThunk.pending]: (state, action) => {
      console.log(action)
    },
    [loginThunk.fulfilled]: (state, action) => {
      console.log(action)
      localStorage.setItem("useAuth", action.payload.data)

    },
    [loginThunk.rejected]: (state, action) => {
      console.log(action)
    }

  }

})

export const { login } = loginSlice.actions
export default loginSlice.reducer;
