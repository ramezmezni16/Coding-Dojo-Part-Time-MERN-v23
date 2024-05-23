import React, { useState } from 'react';

const UserForm = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const [nameError, setNameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
    const validateName = (value) => {
        setName(value);
        if (value.length < 2) {
            setNameError("First Name must be at least 2 characters.");
        } else {
            setNameError("");
        }
    };

    const validateLastname = (value) => {
        setLastname(value);
        if (value.length < 2) {
            setLastnameError("Last Name must be at least 2 characters.");
        } else {
            setLastnameError("");
        }
    };

    const validateEmail = (value) => {
        setEmail(value);
        if (value.length < 5) {
            setEmailError("Email must be at least 5 characters.");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = (value) => {
        setPassword(value);
        if (value.length < 8) {
            setPasswordError("Password must be at least 8 characters.");
        } else {
            setPasswordError("");
        }
    };

    const validateConfirmPassword = (value) => {
        setConfirmPassword(value);
        if (value !== password) {
            setConfirmPasswordError("Passwords must match.");
        } else {
            setConfirmPasswordError("");
        }
    };

    const createUser = (e) => {
        e.preventDefault();
        
        const newUser = { name, lastname, email, password };
        console.log("Welcome", newUser);
        
        setName("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    
    return (
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" value={name} onChange={ (e) => validateName(e.target.value) } />
                    <p>{nameError}</p>
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastname} onChange={ (e) => validateLastname(e.target.value) } />
                    <p>{lastnameError}</p>
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ (e) => validateEmail(e.target.value) } />
                    <p>{emailError}</p>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => validatePassword(e.target.value) } />
                    <p>{passwordError}</p>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={ (e) => validateConfirmPassword(e.target.value) } />
                    <p>{confirmPasswordError}</p>
                </div>
                <div>
                    <input type="submit" value="Create User" />
                </div>
            </form>
        </div>
    );
};

export default UserForm;