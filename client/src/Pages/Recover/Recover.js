import { React,useState } from "react";
import {Button} from "@material-ui/core";
import './index.css';

const Recover = () =>{
    const [email,setEmail] = useState('');
    const [userName, setUserName] = useState('');
    
    const handleRecover = async(Event) =>{
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
            <form className='formContainer' onSubmit={e => handleRecover(e)}>
                <h1>Recover</h1>
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
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <div className='btnContainer'>
                    <Button type='submit' variant='contained' color="primary">Submit</Button>
                </div>
            </form>
        </section>        
    )
}
export default Recover;