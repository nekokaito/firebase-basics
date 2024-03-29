import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

   const loginFromGoogle = () => {
          signInWithPopup(auth, provider)
          .then(result => {
            const user = result.user;
            console.log(user);
          })
          .catch(console.log('error'))
   } 
    return (
        <div>
          <button onClick={loginFromGoogle} className="btn">Google Login</button>  
        </div>
    );
};

export default Login;