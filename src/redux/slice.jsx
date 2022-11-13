import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice",
  initialState: {
    isLogged: false,
    userId: 2,
    email: "",
    password: "",
    dark: true,
    currentScreen: [0, 0],
    servers: [],
    dms: []
  },
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
