import { createSlice } from "@reduxjs/toolkit";


export interface sliceState {
  isLogged: boolean,
  userId: number,
  email: string,
  password: string,
  dark: boolean,
  currentScreen: Array<number>,
  servers: Array<any>,
  dms: Array<any>
}

const initialState: sliceState = {
  isLogged: false,
  userId: 2,
  email: "",
  password: "",
  dark: true,
  currentScreen: [0, 0],
  servers: [],
  dms: []
}

const slice = createSlice({
  name: "slice",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
      state.isLogged = true;
    },
    changeScreen: (state, action) => {
      state.currentScreen = [action.payload.server, action.payload.channel];
    },
    setServers: (state, action) =>{
      state.servers = action.payload?.servers
    },
    setDms: (state, action) =>{
      state.dms = action.payload?.dms
    }
  },
});
export const { login, changeScreen, setServers, setDms } = slice.actions;
export default slice.reducer;
