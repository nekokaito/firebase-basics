import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import User from "./User";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState([]);

   const loginFromGoogle = () => {
          signInWithPopup(auth, provider)
          .then(result => {
            const userData = result.user;
            console.log(userData);
            setUser(userData);
            
          })
          .catch(console.log('error'))
   } 
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <button onClick={loginFromGoogle} className="btn">Google Login</button>  
          <div className="flex p-10 flex-col justify-center items-center my-10">
               <User user={user}></User>
          </div>
        </div>
    );
};

export default Login;