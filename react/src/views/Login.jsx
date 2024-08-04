import React from "react";
import { Link } from "react-router-dom";

const onSubmit = (ev) => {
    ev.preventDefault();
};

export default function Login() {
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit} action="">
                    <h1 className="title">Login into your account</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not Registered?
                        <Link to="/signup">Create an Account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
