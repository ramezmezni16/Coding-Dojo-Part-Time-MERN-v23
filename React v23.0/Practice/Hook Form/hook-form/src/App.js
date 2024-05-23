import React, { useState } from 'react';

const UserForm = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");
    
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
                    <input type="text" value={name} onChange={ (e) => setName(e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastname} onChange={ (e) => setLastname(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
                <div>
                    <input type="submit" value="Create User" />
                </div>
            </form>
            <div>
                <h3>Entered Information:</h3>
                <p>First Name: {name}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    );
};

export default UserForm;

