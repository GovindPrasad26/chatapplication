import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({
        email: '',
        password: '',
    });
    const[Validation,setValidation]=useState({

    })
    function CheckCredentials(event) {

       
        event.preventDefault();
        axios.post('https://cha-rsyf.onrender.com/users/login', state)
        
            .then((res) => {
                if (res.data.ok) {
                    alert('User valid');
                    localStorage.setItem("token-key", res.data.result);
                    navigate('/home');
                } else {
                    alert("User invalid");
                }
            })
            .catch(() => {
                console.log('Error');
            });
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "linear-gradient(135deg, #e3f2fd, #90caf9)",
            fontFamily: "Segoe UI, sans-serif"
        }}>
            <div style={{
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                width: "100%",
                maxWidth: "400px",
                textAlign: "center"
            }}>
                <h2 style={{ color: "#1976d2", marginBottom: "20px" }}>Welcome Back</h2>
                <form onSubmit={CheckCredentials}>
                    <div style={{ marginBottom: "20px", textAlign: "left" }}>
                        <label htmlFor="email" style={{ fontWeight: "600", color: "#444", fontSize: "14px" }}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "6px",
                                border: "1px solid #ccc",
                                outline: "none",
                                fontSize: "14px"
                            }}
                            onChange={(e) => setState({ ...state, email: e.target.value })}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: "20px", textAlign: "left" }}>
                        <label htmlFor="password" style={{ fontWeight: "600", color: "#444", fontSize: "14px" }}>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginTop: "5px",
                                borderRadius: "6px",
                                border: "1px solid #ccc",
                                outline: "none",
                                fontSize: "14px"
                            }}
                            onChange={(e) => setState({ ...state, password: e.target.value })}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            backgroundColor: "#1976d2",
                            color: "#fff",
                            padding: "12px",
                            width: "100%",
                            border: "none",
                            borderRadius: "6px",
                            fontSize: "15px",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease"
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#1565c0"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#1976d2"}
                    >
                        Login
                    </button>
                </form>
                <div style={{ marginTop: "15px" }}>
                    <Link to="" style={{ fontSize: "13px", color: "#1976d2", textDecoration: "none" }}>
                        Forgot Password?
                    </Link>
                </div>
                <div style={{ marginTop: "10px" }}>
                    <span style={{ fontSize: "13px", color: "#555" }}>
                        Don't have an account?
                    </span>
                    <Link to="/signup" style={{ fontSize: "13px", color: "#1976d2", textDecoration: "none", marginLeft: "5px" }}>
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
