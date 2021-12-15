import {React,useState} from "react";
import Navbar1 from '../../Components/Navbar1';
import Navbar2 from '../../Components/Navbar2';
import { Button } from "@material-ui/core";
import './index.css';

const SubmitPage = () =>{
    const [title,setTitle] = useState('');
    const [category,setCategory] = useState('');
    const [cuisine,setCuisine] = useState('');
    const [image,setImage] = useState(null);
    const [description,setDescription] = useState('');
    const [ingredient,setIngredient] = useState('');
    const [step,setStep] = useState('');
    const [difficulty,setDiff] = useState('');
    const [time,setTime] = useState('');

    const handleSubmit = async(Event) =>{
        Event.preventDefault();
        //do something
        console.log(title);
        console.log(category);
        console.log(image);
        return false;
    }
    return(
        <section className="submit">
            <Navbar1/>
            <Navbar2/>
            <div className="form-container">
                <div className="form-outer">
                    <form className="form" onSubmit={(e)=>handleSubmit(e)}>
                        <h1 className="title">Submit Recipe</h1>
                        <div className="group">
                            <label for="title">Title</label>
                            <input 
                            type='text' 
                            required 
                            value={title}
                            onChange={(e)=> setTitle(e.target.value)}
                            />
                        </div>
                        <div className="group">
                            <label for="category">Category</label>
                            <input 
                            type='text' 
                            required 
                            value={category}
                            onChange={(e)=> setCategory(e.target.value)}
                            />
                        </div>
                        <div className="group">
                            <label for="cuisine">Cuisine</label>
                            <input 
                            type='text' 
                            required 
                            value={cuisine}
                            onChange={(e)=> setCuisine(e.target.value)}
                            />
                        </div>
                        <div className="=group">
                            <label for="image">Image:</label>
                            <input
                            type='file'
                            name='image'
                            onChange={(e)=> setImage(e.target.files[0])}
                            />
                        </div>
                        <div className="group">
                            <label for="description">Description</label>
                            <textarea 
                            class="textarea"
                            required 
                            value={description}
                            onChange={(e)=> setDescription(e.target.value)}
                            />
                        </div>
                        <div className="group">
                            <label for="ingredient">Ingredient(s)</label>
                            <textarea 
                            class="textarea"
                            required 
                            value={ingredient}
                            onChange={(e)=> setIngredient(e.target.value)}
                            />
                        </div>
                        <div className="group">
                            <label for="step">Steps</label>
                            <textarea 
                            class="textarea"
                            required 
                            value={step}
                            onChange={(e)=> setStep(e.target.value)}
                            />
                        </div>
                        <div className="group">
                            <label for="difficulty">Difficulty</label>
                            <input 
                            type='text' 
                            required 
                            value={difficulty}
                            onChange={(e)=> setDiff(e.target.value)}
                            />
                        </div>
                        <div className="group">
                            <label for="time">Time</label>
                            <input 
                            type='text' 
                            required 
                            value={time}
                            onChange={(e)=> setTime(e.target.value)}
                            />
                        </div>
                        <div className="btnContainer">
                            <Button type="submit" variant="contained" color="primary">Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SubmitPage;