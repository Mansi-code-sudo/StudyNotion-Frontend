import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")): null,
}

const profileSlice= createSlice({
    name:"auth",
    initialState:initialState,
    reducers: {
        setToken(state,value){
            state.token=state.payload;
        },
    },
});

export const {setToken}=profileSlice.actions;
export default profileSlice.reducer;