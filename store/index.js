// import { createSlice } from '@reduxjs/toolkit'
// import { configureStore } from '@reduxjs/toolkit';
// const loginSlice = createSlice({
//     name: 'login',

// });

import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
const loginSlice = createSlice({
    name: 'login',
    initialState: { isLogedIn: false, profilePic: null },
    reducers: {
        Login(state, action) {
            state.isLogedIn = true;
            state.profilePic = `${action.payload}`
        }
    }
})
const store = configureStore({ reducer: { login: loginSlice.reducer } });
export const loginActions = loginSlice.actions;
export default store;


