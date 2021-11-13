import { React,useState } from "react";
import {Button} from "@material-ui/core";
import './index.css';

const SignUp = () =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSignUp = async(Event) =>{
        Event.preventDefault();
        //check if email already registered
        return false;
    }

    return(
        <section className='login'>
            <form className='formContainer' onSubmit={e => handleSignUp(e)}>
                <h1>Sign In</h1>
                <label>Email</label>
                <input
                    type='email'
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type='password'
                    autoFocus
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='btnContainer'>
                    <Button type='submit' variant='contained' color="primary">Sign Up</Button>
                </div>
            </form>
        </section>
    )
}