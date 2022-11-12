import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice",
  initialState: {
    isLogged: false,
    username: "",
    password: "",
    dark: true
  },
  reducers: {
    login: (state, action) =>{
      const {email, password} = action.payload
      state.email = email
      state.password = password
      state.isLogged = true
    }
  }
})
export const {login} = slice.actions
export default slice.reducer
