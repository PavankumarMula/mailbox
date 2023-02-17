import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchmails } from "../store/MailSlice-Actions";
import './inbox.css'

const Inbox = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const receiveMailsData = useSelector((state) => state.mail.mailData);
  const toMail=useSelector((state)=>state.mail.to)

  useEffect(() => {
    dispatch(fetchmails(toMail));
  }, [dispatch,toMail]);

  const sentEmailsHandler = () => {
    // Handle sent emails
  };

  return (
    <div className="inbox-container">
      <div className="inbox-sidebar">
        <button className="inbox-button" onClick={() => history.replace("/home")}>
          Compose
        </button>
        <button className="inbox-button" onClick={sentEmailsHandler}>
          Sent
        </button>
      </div>
      <div className="inbox-list">
        {receiveMailsData.map((mail) => (
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
  );
};

export default Inbox;
