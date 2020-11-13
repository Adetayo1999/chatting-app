import React, { useState } from 'react'
import "./Login.css";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
function Login() {
    const [signIn , setSignIn] = useState(false);
    const [signUp , setSignUp] = useState(false);

    return (
        <div className ="login">
            <div className ="login-left">
           { !signIn ? <img src="/corona/svg-2.svg" alt="..."/>
           :  <img src="/corona/svg-4.svg" alt="..."/>
}
            </div>
            <div className ="login-right">
               {!signIn && <div className ="signing">
                <div className ="sign sign-in">
               <h2>Hello User , Stay updated to informations and latest gists sign in to continue</h2>
               <button onClick ={() => setSignIn(true)}>Sign In</button>
               </div>
               <div className ="sign sign-up">
               <h2>Hello Guest , Join now and you also can get the latest information and gists</h2>
               <button onClick ={() => {
                   setSignIn(true)
                   setSignUp(true)}
                   }>Sign Up</button>
               </div>
               </div>}
          
               {signIn &&
               <>
              {signUp ?
               <h1>SIGN UP</h1> :
                <h1>SIGN IN</h1>}
               
              <form>
            
              <div className ="form-group">
                      <AccountCircleIcon fontSize ="large" className ="email"/>
                   {signUp  ? <input type ="email" placeholder ="Enter A Unique Username"/> :
                    <input type ="email" placeholder ="Enter Your Username"/>}
                  </div>
               { signUp &&   <div className ="form-group">
                      <EmailIcon fontSize ="large" className ="email"/>
                  <input type ="email" placeholder ="Enter Your Email"/>
                  </div> }
                  <div className ="form-group">
                      <LockIcon fontSize ="large" className ="lock"/>
                  <input type ="password" placeholder ="Enter Your Password"/>
                  </div>

                 {signUp && <div className ="form-group">
                      <LockIcon fontSize ="large" className ="lock"/>
                  <input type ="password" placeholder ="Re-enter Password"/>
                  </div>}
                  <div className ="form-grou">
                  {signUp ?    <input type ="submit" value ="Sign Up"/> :    <input type ="submit" value ="Login"/>}
                  </div>
              </form>
               </>
               }
            </div>
        </div>
    )
}

export default Login

/*

 




*/