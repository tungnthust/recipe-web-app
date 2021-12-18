import React,{useState,useEffect} from "react";
import './index.css';
import Navbar1 from '../../Components/Navbar1';
import Navbar2 from '../../Components/Navbar2';
import Footer from "../../Components/Footer";
import Select from 'react-select';
import RecipeItems from "./recipeItems";
import Media from "react-media";

const category = [
    { label: 'Khai vị', value: 'kv' },
    { label: 'Món chính', value: 'mc' },
    { label: 'Tráng miệng', value: 'tm' },
]
const cuisine = [
  { value: 'vn', label: 'Vietnam' },
  { value: 'ind', label: 'India' },
  { value: 'mex', label: 'Mexico' },
  { value: 'ita', label: 'Italia' },
]

const sort = [
    { value: 'top', label: 'Top rated' },
    { value: 'latest', label: 'Latest' },
    { value: 'oldest', label: 'Oldest' },
]

const GeneralRecipes = () =>{
    const [currentCategory,setCurrentCategory] = useState();
    const [currentCuisine,setCurrentCuisine] = useState();
    const [currentSort,setCurrentSort] = useState();
    const [ingredient,setIngredient] = useState();
    const [keyword,setKeyword] = useState();

    const onChangeSelectedCategory = (cat) =>{
        setCurrentCategory(cat);
    }
    const onChangeSelectedCuisine = (cui) =>{
        setCurrentCuisine(cui);
    }
    const onChangeSelectedSort = (method) =>{
        setCurrentSort(method);
    }
    const onChangeIngredient = (text) =>{
        setIngredient(text);
    }
    const onChangeKeyword = (text) =>{
        setKeyword(text);
    }

    // useEffect(()=>{},[currentCategory]);
    // useEffect(()=>{},[currentCuisine]);
    // useEffect(()=>{},[currentSort]);
    // useEffect(()=>{},[ingredient]);
    // useEffect(()=>{},[keyword]);

    return(
        <div>
        <Navbar1/>
        <Navbar2/>
        <section className="recipe_section"> 
        <Media queries={{
                mobile:"(max-width:599px)"
            }}>
                {matches=>matches.mobile?
                <div className="container">
                    <div className="search">
                        <div className="search_content_mb">
                            <div className="select">
                                <p>Recipe Category</p>
                                <Select
                                value={currentCategory}
                                onChange={onChangeSelectedCategory}
                                options={category}
                                getOptionLabel={(option)=>option.label}
                                getOptionValue={(option)=>option.value}
                                />
                            </div>
                            <div className="select">
                                <p>Recipe Cuisine</p>
                                <Select
                                value={currentCuisine}
                                onChange={onChangeSelectedCuisine}
                                options={cuisine}
                                getOptionLabel={(option)=>option.label}
                                getOptionValue={(option)=>option.value}
                                />
                            </div>
                            <div className="select">
                                <p>Sort recipes</p>
                                <Select
                                value={currentSort}
                                onChange={onChangeSelectedSort}
                                options={sort}
                                getOptionLabel={(option)=>option.label}
                                getOptionValue={(option)=>option.value}
                                />
                            </div>
                            <div className="select">
                                <p>Ingredients</p>
                                <input type="text" onChange={onChangeIngredient}/>
                            </div>
                            <div className="select">
                                <p>Keyword</p>
                                <input type="text" onChange={onChangeKeyword}/>
                            </div>
                        </div>
                    </div>
                </div>:
                <div className="container">
                    <div className="search">
                        <div className="search_content">
                            <div className="select">
                                <p>Recipe Category</p>
                                <Select
                                value={currentCategory}
                                onChange={onChangeSelectedCategory}
                                options={category}
                                getOptionLabel={(option)=>option.label}
                                getOptionValue={(option)=>option.value}
                                />
                            </div>
                            <div className="select">
                                <p>Recipe Cuisine</p>
                                <Select
                                value={currentCuisine}
                                onChange={onChangeSelectedCuisine}
                                options={cuisine}
                                getOptionLabel={(option)=>option.label}
                                getOptionValue={(option)=>option.value}
                                />
                            </div>
                            <div className="select">
                                <p>Sort recipes</p>
                                <Select
                                value={currentSort}
                                onChange={onChangeSelectedSort}
                                options={sort}
                                getOptionLabel={(option)=>option.label}
                                getOptionValue={(option)=>option.value}
                                />
                            </div>
                            <div className="select">
                                <p>Ingredients</p>
                                <input type="text" onChange={onChangeIngredient}/>
                            </div>
                            <div className="select">
                                <p>Keyword</p>
                                <input type="text" onChange={onChangeKeyword}/>
                            </div>
                        </div>
                    </div>
                </div>
                }
        </Media>
            
            <RecipeItems /*list={[...list]}*//>
        </section>
        <Footer/>
        </div>
    )
}

export default GeneralRecipes;