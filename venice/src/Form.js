import './App.css';
import { useState } from "react";

export default function Form(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleName = (e) =>{
        setName(e.target.value);
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (name === '' || email === '' || password === ''){
            alert("Please fill all the fields")
        }else{
            setSubmitted(true);
        }
    }

    const handleReset = () =>{
        setSubmitted(false);
    }

    const successMessage = () =>{

        if (submitted){ 
            return(

                    <h1>
                        User {name} Regestar Successful
                    </h1>
                
            );
            };
    }
    return(
    



        <div className="app">
            <h1>
                A simple form
            </h1>
            <div>
                {successMessage()}
            </div>
            <hr></hr>
            <form>
            <label htmlFor="name">Name: </label>
            <input id='name' onChange={handleName} type='text'></input><br />
            <label htmlFor="email">Email: </label>
            <input id='email'onChange={handleEmail} type='email'></input><br />
            <label htmlFor="pass">Password: </label>
            <input id='pass' onChange={handlePassword} type='password'></input><br />
            <button type='submit' onClick={handleSubmit}>Submit</button>
            <button type='reset' onClick={handleReset}>Reset</button>
            </form>
        </div>
    );
}