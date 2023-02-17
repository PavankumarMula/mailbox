import { createSlice } from "@reduxjs/toolkit";
const loggedInUserEmail = localStorage.getItem('email')
const intialstate = { mailData: [], email: loggedInUserEmail,to:null };
const mailSlice = createSlice({
  name: "mail",
  initialState: intialstate,
  reducers: {
    send(state, action) {
      state.mailData = [action.payload, ...state.mailData];
      console.log(state.mailData);
    },
    receieve(state, action) {
      const emails = action.payload;
      const receievedInbox=emails.filter(item=>item.to===state.email);
      state.mailData=receievedInbox;
    },
    gettingReceiverEmail(state,action){
        state.to=action.payload
    }
  },
});

export default mailSlice;
export const mailActions = mailSlice.actions;
