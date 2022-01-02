import { React,useState } from "react";
import {Button} from "@material-ui/core";
import './index.css';
import axios from "axios";
const Recover = () =>{
    const [email,setEmail] = useState('');
    
    const handleRecover = async(Event) =>{
        Event.preventDefault();
        try{
            const res = await axios.post('http://localhost:4000/users/resetpass',{
                email:email
            });
            let resData = res.data;
            if(resData!==null){
                window.alert('Check new password in your email!')
            }
        }catch{
            window.alert("Email not found!");
        }

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
                <div className='btnContainer'>
                    <Button type='submit' variant='contained' color="primary">Submit</Button>
                </div>
            </form>
        </section>        
    )
}
export default Recover;