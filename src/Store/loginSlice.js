import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//axios
import axios from 'axios';

// export const loginThunk = createAsyncThunk(
//   'login/loginSlice',
//   async (loginData, thunkAPI) => {
//     console.log(loginData)
//     const options = {
//       //add your Api's here 
//       baseURL: `https://backend.pomac.info/public/api/admin`,

//       url: `/login`,
//       method: "POST",
//       data: loginData,
//     };

//     return axios(options)
//       .then((response) => {
//         if (response.data.status) {
//           return response.data;
//         }
//       })
//       .catch((err) => { });

//   }
// )

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    AutObj: {},
    logedIn: false

  },

  reducers: {
    loginReducer: (state, action) => {
      alert('tmam')
      console.log(action.payload)
      localStorage.setItem("useAuth", JSON.stringify(action.payload))
      state.AutObj = JSON.stringify(action.payload)
      state.logedIn = true
    }
  },
  // extraReducers: {

  //   [loginThunk.pending]: (state, action) => {
  //     console.log(action)
  //   },
  //   [loginThunk.fulfilled]: (state, action) => {
  //     console.log(action)
  //     localStorage.setItem("useAuth", action.payload.data)

  //   },
  //   [loginThunk.rejected]: (state, action) => {
  //     console.log(action)
  //   }

  // }

})

export const { login, loginReducer } = loginSlice.actions
export default loginSlice.reducer;
