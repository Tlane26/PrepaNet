// Login

import React from "react";
import PrepanetLogo from './assets/prepanet_azul.png';
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';

import "./Login.css";

export var email = "";

function Login() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    useEffect(() => {
      
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
          
    }, [])


    //const [user, setUser] = useState({});

    /*
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    */

    const navigate = useNavigate()

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            // console.log("login exitoso")
            // console.log(user);
            // email = loginEmail;
            navigate("/redirect")
        } catch (error) {
            console.log(error.message);
        }
    };

    

    return(
        <div className="container mt-5 py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-2-strong">
                        <div className="card-body p-5 text-center">
                            <img src={PrepanetLogo} alt="prepanet logo" width="200" height="50"/>
                            <h2 className="mb-3">Sign in</h2>

                            {/* {error && <Alert variant="danger" className="fw-bold text-danger">{error}</Alert>} */}
                            <div className="row">
                                <div className="col-3">
                            <div className="form-outline d-flex justify-content-start mb-4">
                                <label className="form-label mx-3" for="typeEmailX-2">Email</label>
                            </div>
                            </div>
                            <div className="col-9">
                                {/* <input type="email" id="typeEmailX-2" className="form-control form-control-lg" /> */}
                                <input className="form-control" placeholder='Email...' onChange={(event) => {
                                    setLoginEmail(event.target.value);
                                    email = event.target.value;
                                }}
                                />
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                            <div className="form-outline d-flex justify-content-start mb-4">
                                <label className="form-label mx-3" for="typePasswordX-2">Password</label>
                                </div>
                                </div>
                                <div className="col-9">
                                {/* <input type="password" id="typePasswordX-2" className="form-control form-control-lg" /> */}
                                <input className="form-control" type="password" placeholder='Password...' onChange={(event) => {
                                    setLoginPassword(event.target.value);
                                }}
                                />
                            </div>
                            </div>
                        
                            <div className="form-check d-flex justify-content-start mb-4">
                                <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                <label className="form-check-label mx-2" for="form1Example3"> Remember password </label>
                            </div>

                            {/* <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button> */}
                            <button className="btn btn-primary btn-lg btn-block" onClick={login}>Login</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login