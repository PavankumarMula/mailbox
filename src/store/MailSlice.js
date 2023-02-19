import { createSlice } from "@reduxjs/toolkit";
const loggedInUserEmail = localStorage.getItem('email')
const intialstate = { mailData:[], email: loggedInUserEmail,toEmail:null };
const mailSlice = createSlice({
  name: "mail",
  initialState: intialstate,
  reducers: {
    send(state, action) {
      state.mailData = [action.payload, ...state.mailData];
    },
    receieve(state, action) {
      const emails = action.payload;
      const receievedInbox=emails.filter(item=>item.to===state.email);
      state.mailData=state.mailData.concat(receievedInbox);
    },
    setToEmail(state,action){
      state.toEmail=action.payload
    },
    onLogOut(state,action){
      state.toEmail=null;
      state.mailData=[]
    }
  },
});

export default mailSlice;
export const mailActions = mailSlice.actions;
