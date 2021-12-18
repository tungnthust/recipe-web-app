import React,{useState,useEffect} from "react";
import './index.css';
import Navbar1 from '../../Components/Navbar1';
import Navbar2 from '../../Components/Navbar2';
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

const API = "http://localhost:4000";

const GeneralRecipes = () => {
  const [currentCategory, setCurrentCategory] = useState();
  const [currentCuisine, setCurrentCuisine] = useState();
  const [currentSort, setCurrentSort] = useState();
  const [ingredient, setIngredient] = useState("");
  const [keyword, setKeyword] = useState("");
  const [recipes, setRecipes] = useState([]);

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
  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

//   useEffect(()=>{
//       const getByCategory = async (cat) =>{
//           const res = await axios.get(API+'/get_by_category/'+cat);
//           setRecipes(res.data);
//       };
//       if(currentCategory!=undefined){
//           setCurrentCuisine();
//           setCurrentSort();
//           setIngredient('');
//           setKeyword('');
//           getByCategory(currentCategory.value);
//       }
//   },[currentCategory]);
//   useEffect(()=>{
//       const getByCuisine = async (cui) =>{
//           const res = await axios.get(API+'/get_by_cuisine/'+cui);
//           setRecipes(res.data);
//       }
//       if(currentCuisine!=undefined){
//           setCurrentCategory();
//           setCurrentSort();
//           setIngredient('');
//           setKeyword('');
//           getByCuisine(currentCuisine.value);
//       }
//   },[currentCuisine]);
//   useEffect(()=>{
//       const getBySort = async (method) =>{
//           const res = await axios.get(API+'/get_by_sort/'+method);
//           setRecipes(res.data);
//       };
//       if(currentSort!=undefined){
//           setCurrentCategory();
//           setCurrentCuisine();
//           setIngredient('');
//           setKeyword('');
//           getBySort(currentSort.value);
//       } 
//   },[currentSort]);
//   useEffect(()=>{
//       const getByIngredient = async (data) =>{
//           const res = await axios.get(API+'/get_by_ingredient/'+data);
//           setRecipes(res.data);
//       }
//       if(ingredient!=undefined){
//         setCurrentCategory();
//         setCurrentCuisine();
//         setCurrentSort();
//         setKeyword('');
//         getByIngredient(ingredient);
//       }
//   },[ingredient]);
//   useEffect(()=>{
//     const getByKeyword = async (data) =>{
//         const res = await axios.get(API+'/get_by_keyword/'+data);
//         setRecipes(res.data);
//     }
//     if(ingredient!=undefined){
//       setCurrentCategory();
//       setCurrentCuisine();
//       setCurrentSort();
//       setIngredient('');
//       getByKeyword(keyword);
//     }
//   },[keyword]);

//   useEffect(() => {
//     const getAllRecipes = async () => {
//       const res = await axios.get(API + "/get_all_recipes");
//       setRecipes(res.data);
//     };
//     getAllRecipes();
//   }, []);

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
                      <input type="text" onChange={onChangeIngredient} value={ingredient}/>
                    </div>
                    <div className="select">
                      <p>Keyword</p>
                      <input type="text" onChange={onChangeKeyword} value={keyword}/>
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
                      <input type="text" onChange={onChangeIngredient} value={ingredient}/>
                    </div>
                    <div className="select">
                      <p>Keyword</p>
                      <input type="text" onChange={onChangeKeyword} value={keyword}/>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </Media>
        <RecipeItems /*list={[...list]}*/ />
      </section>
    </div>
  );
};

export default GeneralRecipes;