import { createSlice } from "@reduxjs/toolkit";
const intialstate={mailData:[]}
const mailSlice=createSlice({
    name:"mail",
    initialState:intialstate,
    reducers:{
        send(state,action){
           state.mailData= [action.payload,...state.mailData]
        },
        receieve(state,action){

        }
    }

})
export default mailSlice;
export const mailActions=mailSlice.actions