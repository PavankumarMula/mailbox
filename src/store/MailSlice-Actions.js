// import { mailActions } from "./MailSlice";

// export const sendingEmailMessage = (mailData) => {
//   const sender = mailData.from.replace("@", "").replace(".", "");
//   const receiever = mailData.to.replace("@", "").replace(".", "");

//   return async (disptach) => {
//     try {
//       const sendEmail = await fetch(
//         `https://mail-box-dbc88-default-rtdb.firebaseio.com/${sender}.json`,
//         {
//           method: "POST",
//           body: JSON.stringify({ ...mailData, read: true }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       ); //fetch ends

//       await fetch(
//         `https://mail-box-dbc88-default-rtdb.firebaseio.com/${receiever}.json`,
//         {
//           method: "POST",
//           body: JSON.stringify({ ...mailData, read: false }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (sendEmail.ok) {
//         const response = await sendEmail.json();
//         disptach(
//           mailActions.addSentMails({
//             id: response.name,
//             ...mailData,
//             read: true,
//           })
//         );
//       } else {
//         const response = await sendEmail.json();
//         throw response.error;
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };
// };

// // fetching data on page load and on refresh in inbox
// export const fetchDataFromSender = () => {
  
//   const mymail = localStorage.getItem('email')
//     .replace("@", "")
//     .replace(".", "");
//   return async (disptach) => {
//     try {
//       const fetchData = await fetch(
//         `https://mail-box-dbc88-default-rtdb.firebaseio.com/${mymail}.json`
//       );
//       if (fetchData.ok) {
//         const response = await fetchData.json();
//         const objMails = Object.entries(response).map(
//           ([id, { from, message, to, read }]) => ({
//             id,
//             from,
//             message,
//             to,
//             read,
//           })
//         );
        
//         disptach(mailActions.onRefresh(objMails));
       
        
//       } else {
//         const response = await fetchData.json();
//         throw response.error;
//       }
//     } catch (error) {
//       alert(error.message);
//     }
//   };
// };
