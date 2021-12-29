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
  { label: "Khai vị", value: "kv" },
  { label: "Món chính", value: "mc" },
  { label: "Tráng miệng", value: "tm" },
];
const cuisine = [
  { value: "vn", label: "Vietnam" },
  { value: "ind", label: "India" },
  { value: "mex", label: "Mexico" },
  { value: "ita", label: "Italia" },
];

const sort = [
  { value: "top", label: "Top rated" },
  { value: "latest", label: "Latest" },
  { value: "oldest", label: "Oldest" },
];

const API = "http://localhost:4000/recipes?";

const Recipe = (props) => {
  const {filter} = props;
  const [currentCategory, setCurrentCategory] = useState();
  const [currentCuisine, setCurrentCuisine] = useState();
  const [currentSort, setCurrentSort] = useState();
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [api,setAPI] = useState(API);
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

  useEffect(()=>{
    const getData = async(Api)=>{
      const res = await axios.get(Api);
      setRecipes(res.data);
    }
    getData(api);
  },[api])
  useEffect(()=>{
    var tempAPI = API;
    if(apiCat!=="") tempAPI = tempAPI+'category='+apiCat+'&';
    if(apiCui!=="") tempAPI = tempAPI+'cuisine='+apiCui+'&';
    if(apiSort!=="") tempAPI = tempAPI+'sort='+apiSort+'&';
    if(apiIng!=="") tempAPI = tempAPI+'ingredient='+apiIng+'&';
    setAPI(tempAPI);
  },[apiCat,apiCui,apiSort,apiIng])
  useEffect(()=>{
      const getByCategory = async (cat) =>{
        setApiCat(cat);
      };
      if(currentCategory!==undefined){
          getByCategory(currentCategory.value);
      }
  },[currentCategory]);
  useEffect(()=>{
      const getByCuisine = async (cui) =>{
        setApiCui(cui);
      }
      if(currentCuisine!==undefined){
          getByCuisine(currentCuisine.value);
      }
  },[currentCuisine]);
  useEffect(()=>{
      const getBySort = async (method) =>{
        setApiSort(method);
      };
      if(currentSort!==undefined){
          getBySort(currentSort.value);
      } 
  },[currentSort]);
  useEffect(()=>{
      const getByIngredient = async (data) =>{
        setApiIng(data);
      }
      getByIngredient(ingredient);
  },[ingredient]);

  useEffect(() => {
    const getAllRecipes = async () => {
      if(filter === undefined){
        const res = await axios.get(API);
        setRecipes(res.data);
      }else{
        setApiCat(filter);
      }
      
    };
    getAllRecipes();
  }, []);

  return (
    <div>
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
          <RecipeItems list_items={[
      {
        id: 0,
        name: 'burger',
        description:'sandwith that made with buns and ground beef in the middle',
        author:'Hoang Thu',
        difficulty: 'Medium',
        time: '30min',
        imglink:'https://caresspet.com/wp-content/uploads/2018/10/s15-1024x640.jpg'
      },
      {
        id: 1,
        name: 'bread',
        description:'sandwith that made with buns and ground beef in the middle',
        author:'Hoang Thu',
        difficulty: 'Medium',
        time: '30min',
        imglink: 'https://www.thespruceeats.com/thmb/ZJyWw36nZ1lLNi5FHOKRy9daQqs=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/loaf-of-bread-182835505-58a7008c5f9b58a3c91c9a14.jpg'
      },
      {
        id: 2,
        name: 'bread',
        description:'sandwith that made with buns and ground beef in the middle',
        author:'Hoang Thu',
        difficulty: 'Medium',
        time: '30min',
        imglink: 'https://www.thespruceeats.com/thmb/ZJyWw36nZ1lLNi5FHOKRy9daQqs=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/loaf-of-bread-182835505-58a7008c5f9b58a3c91c9a14.jpg'
      },
      {
        id: 3,
        name: 'bread',
        description:'sandwith that made with buns and ground beef in the middle',
        author:'Hoang Thu',
        difficulty: 'Medium',
        time: '30min',
        imglink: 'https://www.thespruceeats.com/thmb/ZJyWw36nZ1lLNi5FHOKRy9daQqs=/940x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/loaf-of-bread-182835505-58a7008c5f9b58a3c91c9a14.jpg'
      }

    ]}/>
        </section>
        <Footer/>
        </div>
    )
}


export default Recipe;