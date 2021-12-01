import { React,useState } from "react";
import {Button} from "@material-ui/core";
import './index.css';

const SignUp = () =>{
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [image,setImage] = useState(null);

    const handleSignUp = async(Event) =>{
        Event.preventDefault();
        //check if email already registered
        return false;
    }

    return(
        <section className='login'>
            <form className='formContainer' onSubmit={e => handleSignUp(e)}>
                <h1>Sign Up</h1>
                <label>Email</label>
                <input
                    type='email'
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Username</label>
                <input
                    type='username'
                    autoFocus
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password</label>
                <input
                    type='password'
                    autoFocus
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Avatar</label>
                <input
                    type="file"
                    name="myImage"
                    onChange={(event)=>{
                        console.log(event.target.files[0]);
                        setImage(event.target.files[0]);
                    }}
                />
                <div className='btnContainer'>
                    <Button type='submit' variant='contained' color="primary">Sign Up</Button>
                </div>
            </form>
        </section>
    )
}

export default SignUp;