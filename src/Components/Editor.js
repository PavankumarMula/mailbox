import "./Editor.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { mailActions } from "../store/MailSlice";


const EditorPanel = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [recipientEmail, setRecipientEmail] = useState("");
  const disptach=useDispatch();


  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleRecipientEmailChange = (event) => {
    setRecipientEmail(event.target.value);
  };

  const handleSendClick = () => {
    // TODO: Use an email client or service to send the email with the content of the editor
    const messageBody = editorState.getCurrentContent().getPlainText();
    const recieverMail=recipientEmail.replace('@', '').replace('.', '');
    const senderMail=localStorage.getItem('email').replace('@', '').replace('.', '');
    if(senderMail&&recieverMail){
      console.log("hi")
      disptach(mailActions.send({
        from:senderMail,
        to:recieverMail,
        message:messageBody
      }))
    }
  };

  return (
    <div>
      <input
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          padding: "10px",
          width: "18rem",
        }}
        type="email"
        placeholder="Recipient email"
        value={recipientEmail}
        onChange={handleRecipientEmailChange}
      />
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        toolbarClassName="toolbarClassName"
      />
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
};

export default EditorPanel;
