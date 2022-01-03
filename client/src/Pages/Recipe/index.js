import React,{useState,useEffect} from "react";
import './index.css';
import Navbar1 from '../../Components/Navbar1';
import Navbar2 from '../../Components/Navbar2';
import Footer from "../../Components/Footer";
import Select from 'react-select';
import RecipeItems from "./recipeItems";
import Media from "react-media";
import axios from "axios";

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

const sort = [
  { value: "numOfFavourite:desc", label: "Top rated" },
  { value: "createdAt:desc", label: "Latest" },
  { value: "createdAt:asc", label: "Oldest" },
];


const Recipe = (props) => {
  const {filter} = props;
  const [currentCategory, setCurrentCategory] = useState();
  const [currentCuisine, setCurrentCuisine] = useState();
  const [currentSort, setCurrentSort] = useState();
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [api,setAPI] = useState("http://localhost:4000/api/recipes?");
  const [apiCat,setApiCat] = useState('');
  const [apiCui,setApiCui] = useState('');
  const [apiSort,setApiSort] = useState('');
  const [apiIng,setApiIng] = useState('');

  const onChangeSelectedCategory = (cat) => {
    setCurrentCategory(cat);
  };
  const onChangeSelectedCuisine = (cui) => {
    setCurrentCuisine(cui);
  };
  const onChangeSelectedSort = (method) => {
    setCurrentSort(method);
  };
  const onChangeIngredient = (e) => {
    setIngredient(e.target.value);
  };

  useEffect(() => {
    const getData = async (Api) => {
      const res = await axios.get(Api);
      setRecipes(res.data);
    };
    if(api!=="http://localhost:4000/api/recipes?") getData(api);
  }, [api]);
  useEffect(() => {
    const getAllRecipes = async () => {
      if (filter === undefined) {
        const res = await axios.get(api);
        setRecipes(res.data);
      } else {
        setApiCat(filter);
      }
    };
    getAllRecipes();
  }, []);
  useEffect(() => {
    var tempAPI = "http://localhost:4000/api/recipes?";
    if (apiCat !== "") tempAPI = tempAPI + "category=" + apiCat + "&";
    if (apiCui !== "") tempAPI = tempAPI + "cuisine=" + apiCui + "&";
    if (apiSort !== "") tempAPI = tempAPI + "sortBy=" + apiSort + "&";
    if (apiIng !== "") tempAPI = tempAPI + "ingredient=" + apiIng + "&";
    setAPI(tempAPI);
  }, [apiCat, apiCui, apiSort, apiIng]);
  useEffect(() => {
    const getByCategory = async (cat) => {
      setApiCat(cat);
    };
    if (currentCategory !== undefined) {
      getByCategory(currentCategory.value);
    }
  }, [currentCategory]);
  useEffect(() => {
    const getByCuisine = async (cui) => {
      setApiCui(cui);
    };
    if (currentCuisine !== undefined) {
      getByCuisine(currentCuisine.value);
    }
  }, [currentCuisine]);
  useEffect(() => {
    const getBySort = async (method) => {
      setApiSort(method);
    };
    if (currentSort !== undefined) {
      getBySort(currentSort.value);
    }
  }, [currentSort]);
  useEffect(() => {
    const getByIngredient = async (data) => {
      setApiIng(data);
    };
    getByIngredient(ingredient);
  }, [ingredient]);

  return (
    <div>
      {console.log(recipes)}
      <Navbar1 />
      <Navbar2 />
      <section className="recipe_section">
        <Media
          queries={{
            mobile: "(max-width:599px)",
          }}
        >
          {(matches) =>
            matches.mobile ? (
              <div className="container">
                <div className="search">
                  <div className="search_content_mb">
                    <div className="select">
                      <p>Recipe Category</p>
                      <Select
                        value={currentCategory}
                        onChange={onChangeSelectedCategory}
                        options={category}
                        getOptionLabel={(option) => option.label}
                        getOptionValue={(option) => option.value}
                      />
                    </div>
                    <div className="select">
                      <p>Recipe Cuisine</p>
                      <Select
                        value={currentCuisine}
                        onChange={onChangeSelectedCuisine}
                        options={cuisine}
                        getOptionLabel={(option) => option.label}
                        getOptionValue={(option) => option.value}
                      />
                    </div>
                    <div className="select">
                      <p>Sort recipes</p>
                      <Select
                        value={currentSort}
                        onChange={onChangeSelectedSort}
                        options={sort}
                        getOptionLabel={(option) => option.label}
                        getOptionValue={(option) => option.value}
                      />
                    </div>
                    <div className="select">
                      <p>Ingredients</p>
                      <input
                        type="text"
                        onChange={onChangeIngredient}
                        value={ingredient}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="container">
                <div className="search">
                  <div className="search_content">
                    <div className="select">
                      <p>Recipe Category</p>
                      <Select
                        value={currentCategory}
                        onChange={onChangeSelectedCategory}
                        options={category}
                        getOptionLabel={(option) => option.label}
                        getOptionValue={(option) => option.value}
                      />
                    </div>
                    <div className="select">
                      <p>Recipe Cuisine</p>
                      <Select
                        value={currentCuisine}
                        onChange={onChangeSelectedCuisine}
                        options={cuisine}
                        getOptionLabel={(option) => option.label}
                        getOptionValue={(option) => option.value}
                      />
                    </div>
                    <div className="select">
                      <p>Sort recipes</p>
                      <Select
                        value={currentSort}
                        onChange={onChangeSelectedSort}
                        options={sort}
                        getOptionLabel={(option) => option.label}
                        getOptionValue={(option) => option.value}
                      />
                    </div>
                    <div className="select">
                      <p>Ingredients</p>
                      <input
                        type="text"
                        onChange={onChangeIngredient}
                        value={ingredient}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </Media>

        <section id="recipeItems">
          <div className="container">
            <div className="title">
              <h1>Recipes </h1>
            </div>
            <div className="row">
              {recipes.map((item) => (
                <RecipeItems
                  key={item._id}
                  id={item._id}
                  title={item.title}
                  description={item.description}
                  author={item.author.name}
                  difficulty={item.difficulty}
                  time={item.cookTime}
                  avatar={item.author.avatar}
                  image={item.image}
                  authorid={item.author.id}
                />
              ))}
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}


export default Recipe;