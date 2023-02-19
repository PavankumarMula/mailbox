import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./inbox.css";
import { fetchDataFromSender } from "../store/MailSlice-Actions";
let firstTime=true
const Inbox = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const mailData = useSelector((state) => state.mail.mailData);
  const sender = localStorage.getItem("email");
  const senderurl=sender.replace('@','').replace('.','')
  console.log(senderurl)

  //fetching inbox info
  useEffect(()=>{
    if(firstTime===true){
      dispatch(fetchDataFromSender())
      firstTime=false
    }
  },[dispatch])
  

  const sentEmailsHandler = () => {
    // Handle sent emails
  };

  return (
    <>
      <center style={{ color: "red" }}>
        <h4>{`this is ${sender} inbox`}</h4>
      </center>
      <div className="inbox-container">
        <div className="inbox-sidebar">
          <button
            className="inbox-button"
            onClick={() => history.replace("/home")}
          >
            Compose
          </button>
          <button className="inbox-button" onClick={sentEmailsHandler}>
            Sent
          </button>
        </div>
        <div className="inbox-list">
          {mailData.map((mail) => (
            <div className="inbox-item" key={mail.id}>
              <input type="checkbox" />
              <div className="inbox-item-header">
                <div className="inbox-item-header-from">From</div>

                <div className="inbox-item-header-message">Message</div>
              </div>
              <div className="inbox-item-content">
                <div className="inbox-item-from">{mail.from}</div>

                <div className="inbox-item-message">{mail.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Inbox;
