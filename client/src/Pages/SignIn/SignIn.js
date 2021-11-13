import { React,useState } from "react";
import {Button} from "@material-ui/core";
import './index.css';

const SignIn = () =>{
    const [email,setEmail] = useState('');
    const [showCheckEmailMessage, setShowCheckEmailMessage] = useState(false);
    const [password, setPassword] = useState('');
    const [showCheckPasswordMessage, setShowCheckPasswordMessage] = useState(false);
    
    const handleLogin = async(Event) =>{
        Event.preventDefault();
        if(email !== ''){
            //check if email existed
            //check if password existed
        }else{
            alert('Unknown Email');
        }
        return false;
    }
    return(
        <section className='login'>
            <form className='formContainer' onSubmit={e => handleLogin(e)}>
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
                <a href='/SignUp'>Don't have an account?</a>
                <a href='/Recover'>Forget your password?</a>
                <div className='btnContainer'>
                    <Button type='submit' variant='contained' color="primary">Sign In</Button>
                </div>
            </form>
        </section>        
    )
}
export default SignIn;