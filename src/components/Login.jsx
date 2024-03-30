import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

import { useState } from "react";
import User from "./User";

const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState(null);

   const loginFromGoogle = () => {
          signInWithPopup(auth, googleProvider)
          .then(result => {
            const userData = result.user;
            console.log(userData);
            setUser(userData);
            
          })
          .catch(error => {
            console.log(error)
          }) 
   } 

   const loginFromGithub = () => {
      signInWithPopup(auth, githubProvider)
      .then(result => {
        const userData = result.user;
            console.log(userData);
            setUser(userData);
      })
      .catch(error => {
        console.log(error)
      }) 
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
                user? <button onClick={singOutFromGoogle} className="btn">Sign Out</button> :
                <div className="flex gap-5"> 
                <button onClick={loginFromGoogle} className="btn"> <FcGoogle /> Google Login</button>
                <button onClick={loginFromGithub} className="btn"><IoLogoGithub /> Github Login</button>

                </div>
            }
              
            
            
            
            {user && <div className="flex p-10 flex-col justify-center items-center my-10">
             <User user={user}></User>
       </div>}
         
        </div>
    );
};

export default Login;