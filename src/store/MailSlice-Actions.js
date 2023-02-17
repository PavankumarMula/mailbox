import mailSlice, { mailActions } from "./MailSlice";
export const sendingEmailMessage=(mailData)=>{
    const sender=mailData.from.replace('@','').replace('.','');
    const receiever=mailData.to.replace('@','').replace('.','');
    
   return async(disptach)=>{
    try {
        const sendEmail=await fetch(`https://mail-box-dbc88-default-rtdb.firebaseio.com/${sender}.json`,
        {
            method:'POST',
            body:JSON.stringify({...mailData}),
            headers:{
                'Content-Type': 'application/json',
            }
        })//fetch ends

        if(sendEmail.ok){
            const response=await sendEmail.json();
            disptach(mailActions.send({
                id:response.name,
                ...mailData
            }))
        }else{
            const response=await sendEmail.json()
            throw response.error
        }

    } catch (error) {
        alert(error.message)
    }
   }
}

//fetching mails from firebase from sender
export const fetchmails=(toMail)=>{
    const receiever=toMail.replace('@','').replace('.','');
    return async(disptach)=>{
    try {
        const receivedData=await fetch(`https://mail-box-dbc88-default-rtdb.firebaseio.com/${receiever}.json`)
        if(receivedData.ok){
            const response=await receivedData.json()
            const mailInfo=Object.values(response);
            const mails= mailInfo.map(item=>(Object.entries(item)));
            const emails = mails[0].map(([id, { from, message, to }]) => ({ id, from, message, to }));
            disptach(mailActions.receieve(emails))
            
          

        } else{
            const response=await receivedData.json()
            throw response.error
        }
    } catch (error) {
        alert(error.message)
    }

    }
}

