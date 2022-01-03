import { React, useState, useEffect } from "react";
import Navbar1 from "../../Components/Navbar1";
import Navbar2 from "../../Components/Navbar2";
import { Button } from "@material-ui/core";
import "./index.css";
import axios from "axios";
import Select from "react-select";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
const category = [
  { label: "Appetizer", value: "Appetizer" },
  { label: "Main Course", value: "Main Course" },
  { label: "Dessert", value: "Dessert" },
];
const cuisine = [
  { value: "Vietnam", label: "Vietnam" },
  { value: "India", label: "India" },
  { value: "Mexico", label: "Mexico" },
  { value: "Italia", label: "Italia" },
];

const SubmitPage = () => {
  // const [id, setID] = useState("");
  const [checkSubmit, setCheckSubmit] = useState(false);
  const [title, setTitle] = useState("");
  const [currentCategory, setCurrentCategory] = useState();
  const [currentCuisine, setCurrentCuisine] = useState();
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([
    {
      ingredient: "",
      quantity: "",
      quantityType: "",
    },
  ]);
  const [steps, setSteps] = useState([{ Step: "" }]);
  const [difficulty, setDiff] = useState("");
  const [time, setTime] = useState("");

  const onChangeSelectedCategory = (cat) => {
    setCurrentCategory(cat);
  };
  const onChangeSelectedCuisine = (cui) => {
    setCurrentCuisine(cui);
  };

  const handleIngredientInputChange = (e, data, index) => {
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

  const handleStepInputChange = (e, index) => {
    const list = [...steps];
    list[index] = e.target.value;
    setSteps(list);
  };
  const handleRemoveClickStep = (index) => {
    const list = [...steps];
    list.splice(index, 1);
    setSteps(list);
  };

  const handleAddClickStep = () => {
    setSteps([...steps, { Step: "" }]);
  };

  const [id, setId] = useState('')

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
    const API = "http://localhost:4000/api";
    const token = localStorage.getItem("token");

    const axiosInstance = axios.create({
      baseURL: API,
      timeout: 3000,
      headers: { Authorization: "Bearer " + token },
    });
    const isLoggedIn =
      localStorage.getItem("token") != null ? localStorage.getItem("id") : null;
    if (isLoggedIn === null) {
      alert("You must log in to add this recipe to favoured list");
      window.location = "/signUp";
    } else {
      try {
        const res = await axiosInstance.post("http://localhost:4000/api/recipes", {
          title: title,
          description: description,
          ingredients: ingredients,
          category: currentCategory.value,
          cuisine: currentCuisine.value,
          steps: steps,
          difficulty: difficulty,
          image: base64,
          cookTime: time,
        });
        if (res.data !== null) {
          setId(res.data._id);
          if (res.status === 201) {
            window.alert("Submit new recipe successfully\nClick the Go to Your Recipe button to review your new recipe.");
          }
        }
      } catch (e) {
        window.alert(e);
      }
    }
  };
  useEffect(() => {
    setCheckSubmit(true);
  }, [id]);

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
              <div className="input-group mb-3">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Title"
                  aria-label="Title"
                  aria-describedby="basic-addon1"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="group">
              <label for="category">Category</label>
              <Select
                value={currentCategory}
                onChange={onChangeSelectedCategory}
                options={category}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
              />
            </div>
            <div className="group">
              <label for="cuisine">Cuisine</label>
              <Select
                value={currentCuisine}
                onChange={onChangeSelectedCuisine}
                options={cuisine}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
              />
            </div>
            <div className="=group">
              <label for="image">Image:</label>
              <div className="input-group mb-3">
                <label className="input-group-text" for="inputGroupFile01">
                  Upload
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>
            <div className="group">
              <label for="description">Description</label>
              <div className="input-group">
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="group">
              <label>Ingredient(s)</label>
              {ingredients.map((x, i) => {
                return (
                  <div className="input-group">
                    <span className="input-group-text">
                      Name, quantity and quantity type
                    </span>
                    <input
                      type="text"
                      aria-label="Ingredient name"
                      className="form-control"
                      onChange={(e) =>
                        handleIngredientInputChange(e, "ingredient", i)
                      }
                    />
                    <input
                      type="text"
                      aria-label="Quantity"
                      className="form-control"
                      onChange={(e) =>
                        handleIngredientInputChange(e, "quantity", i)
                      }
                    />
                    <input
                      type="text"
                      aria-label="Quantity type"
                      className="form-control"
                      onChange={(e) =>
                        handleIngredientInputChange(e, "quantityType", i)
                      }
                    />
                    <div className="btnBox">
                      {ingredients.length !== 1 &&
                        ingredients.length - 1 !== i && (
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => handleRemoveClick(i)}
                          >
                            <i className="bi bi-x-circle"></i>
                          </button>
                        )}
                      {ingredients.length - 1 === i && (
                        <button
                          type="button"
                          className="btn btn-outline-info"
                          onClick={handleAddClick}
                        >
                          <i className="bi bi-plus-circle"></i>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="group">
              <label for="step">Steps</label>
              {steps.map((x, i) => {
                return (
                  <div class="input-group">
                    <span class="input-group-text">Step {i + 1}</span>
                    <input
                      type="text"
                      aria-label="Step"
                      class="form-control"
                      onChange={(e) => handleStepInputChange(e, i)}
                    />
                    <div className="btnBox">
                      {steps.length !== 1 && steps.length - 1 !== i && (
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => handleRemoveClickStep(i)}
                        >
                          <i class="bi bi-x-circle"></i>
                        </button>
                      )}
                      {steps.length - 1 === i && (
                        <button
                          type="button"
                          className="btn btn-outline-info"
                          onClick={handleAddClickStep}
                        >
                          <i className="bi bi-plus-circle"></i>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="group">
              <label for="difficulty">Difficulty and Cook Time</label>
              <div className="input-group mb-3">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Difficulty"
                  aria-label="Difficulty"
                  aria-describedby="basic-addon1"
                  value={difficulty}
                  onChange={(e) => setDiff(e.target.value)}
                ></input>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Cook Time"
                  aria-label="Cook Time"
                  aria-describedby="basic-addon1"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                ></input>
              </div>
            </div>
            <div>
              {checkSubmit && id!=='' ? (
                <Link to={"/recipes/" + id}>
                  <div className="btnContainer">
                    <Button type="submit" variant="contained" color="primary">
                      Go to Your Recipe
                    </Button>
                  </div>
                </Link>
              ) : (
                <div className="btnContainer">
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubmitPage;
