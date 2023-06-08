import { Link, useNavigate } from "react-router-dom";
import ".//Login.css";
import React, { useState } from "react";
import {auth} from "./firebase";
import {Helmet} from "react-helmet";

function Login(){

    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault(); // this stops refresh
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {

            navigate("/");
        })
        .catch((e) => alert(e.message));
    };

    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            navigate("/");
        })
        .catch ((e) => alert(e.message));
    };
    return(<>
    <Helmet>
    <title>User Login</title>
    </Helmet>
     <div className="login">
        <Link to="/">
            <img className="login_logo" src={require(".//imgs/amazonlogoWhite.png")} alt="Login Logo" />
        </Link>

        <div className="login_container">
            <h1>Sign In</h1>
            
            <form>
                <h4>Email</h4>
                <input value={email} onChange={event => setEmail(event.target.value)} type="email" />

                <h4>Password</h4>
                <input onChange={event => setPassword(event.target.value)} value={password} type="password" />

                <button onClick={login} type="submit" className="login_signInBtn">Sign in</button>
            </form>
            <p>By signing-in you agree to Amazon's Condition. Please refer our Privacy Policy</p>
        <button onClick={register} className="login_registerBtn">Create your Amazon account</button>
        </div>
     
    </div>
    </>);
  }

  export default Login;