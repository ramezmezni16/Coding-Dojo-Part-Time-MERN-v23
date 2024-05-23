import React, { useState } from 'react';

const UserForm = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
<<<<<<< HEAD
    const [password, setPassword] = useState("");
=======
    const [password, setPassword] = useState("");  
>>>>>>> 794ebed9135eb4a2ac9e9cbdd24de8c85504da7b
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
<<<<<<< HEAD
        const newUser = { name, email, password };
=======
        const newUser = { name, lastname, email, password };
>>>>>>> 794ebed9135eb4a2ac9e9cbdd24de8c85504da7b
        console.log("Welcome", newUser);
        setName("");
        setLastname("");
<<<<<<< HEAD
    	setEmail("");
    	setPassword("");
        setConfirmPassword("");
    };
    
    return(
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
            <input type="submit" value="Create User" />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setConfirmPassword(e.target.value) } />
            <input type="submit" value="Create User" />
            </div>
            <div>
               <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                    <input type="submit" value="Create User" />
                </div>
        </form>
=======
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    
    return (
>>>>>>> 794ebed9135eb4a2ac9e9cbdd24de8c85504da7b
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
<<<<<<< HEAD
      </div> 
=======
        </div>
    );
};

export default UserForm;
>>>>>>> 794ebed9135eb4a2ac9e9cbdd24de8c85504da7b

