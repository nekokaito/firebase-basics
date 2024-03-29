import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

import { useState } from "react";
import User from "./User";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);

   const loginFromGoogle = () => {
          signInWithPopup(auth, provider)
          .then(result => {
            const userData = result.user;
            console.log(userData);
            setUser(userData);
            
          })
          .catch(console.log('error'))
   } 

   const singOutFromGoogle = () => {
    const auth = getAuth();
    signOut(auth).then(result => {
        console.log(result)
        setUser(null);
      
    }).catch((error) => {
      console.log(error)
    });
   }
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            {
                user? <button onClick={singOutFromGoogle} className="btn">Sign Out</button> : <button onClick={loginFromGoogle} className="btn">Google Login</button>
            }
              
            
            
            
            {user && <div className="flex p-10 flex-col justify-center items-center my-10">
             <User user={user}></User>
       </div>}
         
        </div>
    );
};

export default Login;