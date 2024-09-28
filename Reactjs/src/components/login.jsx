import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, loginGoogle} from "../config/firebase";
function Login() {
  async function handleLogin() {
    await signInWithPopup(auth, loginGoogle);
  }
  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;
