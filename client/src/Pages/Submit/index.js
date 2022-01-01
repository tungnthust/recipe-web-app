import {React,useState} from "react";
import Navbar1 from '../../Components/Navbar1';
import Navbar2 from '../../Components/Navbar2';
import { Button } from "@material-ui/core";
import './index.css';
import axios from "axios";

const SubmitPage = () =>{
    const [title,setTitle] = useState('');
    const [category,setCategory] = useState('');
    const [cuisine,setCuisine] = useState('');
    const [image,setImage] = useState(null);
    const [description,setDescription] = useState('');
    const [ingredients, setIngredients] = useState([
      {
        ingredient: "",
        quantity: "",
        quantityType: "",
      },
    ]);
    const [step, setStep] = useState("");
    const [difficulty, setDiff] = useState("");
    const [time, setTime] = useState("");

    const handleIngredientInputChange = (e,data, index) => {
    //   const { data, value } = e.target;
      const list = [...ingredients];
      list[index][data] = e.target.value;
      setIngredients(list);
    };
    const handleRemoveClick = (index) => {
      const list = [...ingredients];
      list.splice(index, 1);
      setIngredients(list);
    };

    const handleAddClick = () => {
      setIngredients([
        ...ingredients,
        {
          ingredient: "",
          quantity: "",
          quantityType: "",
        },
      ]);
    };

    const handleSubmit = async (Event) => {
      Event.preventDefault();
      const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };
      const base64 = await convertBase64(image);
      const API = "http://localhost:4000";
      const token = localStorage.getItem("token");

      const axiosInstance = axios.create({
        baseURL: API,
        timeout: 3000,
        headers: { Authorization: "Bearer " + token },
      });
      const isLoggedIn =
        localStorage.getItem("token") != null
          ? localStorage.getItem("id")
          : null;
      if (isLoggedIn === null) {
        alert("You must log in to add this recipe to favoured list");
        window.location = "/signUp";
      } else {
        await axiosInstance.post('http://localhost:4000/recipes',{
            title: title,
            description: description,
            ingredients: ingredients,
            category: category,
            steps: step,
            difficulty: difficulty,
            image: base64
        })
        alert("SUbmit new recipe successfully");
      }
    };

    return (
      <section className="submit">
        <Navbar1 />
        <Navbar2 />
        <div className="form-container">
          <div className="form-outer">
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
              <h1 className="title">Submit Recipe</h1>
              <div className="group">
                <label for="title">Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="group">
                <label for="category">Category</label>
                <input
                  type="text"
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="group">
                <label for="cuisine">Cuisine</label>
                <input
                  type="text"
                  required
                  value={cuisine}
                  onChange={(e) => setCuisine(e.target.value)}
                />
              </div>
              <div className="=group">
                <label for="image">Image:</label>
                <input
                  type="file"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div className="group">
                <label for="description">Description</label>
                <textarea
                  class="textarea"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="group">
                <label>Ingredient(s)</label>
                {ingredients.map((x, i) => {
                  return (
                    <div class="input-group">
                      <span class="input-group-text">
                        Name, quantity and quantity type
                      </span>
                      <input
                        type="text"
                        aria-label="Ingredient name"
                        class="form-control"
                        onChange={(e) => handleIngredientInputChange(e,'ingredient',i)}
                      />
                      <input
                        type="text"
                        aria-label="Quantity"
                        class="form-control"
                        onChange={(e) => handleIngredientInputChange(e,'quantity', i)}
                      />
                      <input
                        type="text"
                        aria-label="Quantity type"
                        class="form-control"
                        onChange={(e) => handleIngredientInputChange(e,'quantityType', i)}
                      />
                      <div className="btn-box">
                        {ingredients.length !== 1 && (
                          <button
                            className="mr10"
                            onClick={() => handleRemoveClick(i)}
                          >
                            X
                          </button>
                        )}
                        {ingredients.length - 1 === i && (
                          <button onClick={handleAddClick}>+</button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="group">
                <label for="step">Steps</label>
                <textarea
                  class="textarea"
                  required
                  value={step}
                  onChange={(e) => setStep(e.target.value)}
                />
              </div>
              <div className="group">
                <label for="difficulty">Difficulty</label>
                <input
                  type="text"
                  required
                  value={difficulty}
                  onChange={(e) => setDiff(e.target.value)}
                />
              </div>
              <div className="group">
                <label for="time">Time</label>
                <input
                  type="text"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div className="btnContainer">
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
}

export default SubmitPage;