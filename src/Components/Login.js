import { useRef } from "react";

const LogIn = () => {
  const email = useRef("");
  const password = useRef("");

  //login form Validation
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const sendLoginData = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAsYyotWR2zesaRukTm4MhJNB9k7RTFZdY`,
        {
          method: "POST",
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if(sendLoginData.ok){
        const response=await sendLoginData.json();
        localStorage.setItem('token',response.idToken);
        localStorage.setItem('email',response.email);
      }else{
        const response=await sendLoginData.json();
        throw response.error
      }
    } catch (error) {
        alert(error.message)
    }
  };
  return (
    <>
      <div className="card">
        <form className="form" onSubmit={loginHandler}>
          <label htmlFor="email">Email</label>
          <input type="email" ref={email} id="email" required></input>
          <label htmlFor="password">Password</label>
          <input type="password" ref={password} id="password" required></input>
          <button type="submit">LogIn</button>
        </form>
      </div>
    </>
  );
};
export default LogIn;
