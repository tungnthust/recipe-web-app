import {React,useState,useEffect} from "react";
import Navbar1 from '../../Components/Navbar1';
import SlideShow from '../../Components/SlideShow';
import Navbar2 from '../../Components/Navbar2';
import QuickFilter from '../../Components/QuickFilter';
import RecipeItems from "../Recipe/recipeItems";
import Footer from "../../Components/Footer";
import axios from "axios";

const API = "http://localhost:4000";

const HomePage = () => {
  const [topRated, setTopRated] = useState([]);
  const [mostFavorite, setMostFavorite] = useState([]);
  const [latestRecipes, setLatestRecipes] = useState([]);
  const [topAuthors, setTopAuthors] = useState([]);

  // useEffect(()=>{
  //     const getData = async () =>{
  //         const res1 = await axios.get(API+'/top_rated');
  //         setTopRated(res1.data);
  //         const res2 = await axios.get(API+'/most_favorite');
  //         setMostFavorite(res2.data);
  //         const res3 = await axios.get(API+'/latest_recipes');
  //         setLatestRecipes(res3.data);
  //         const res4 = await axios.get(API+'/top_authors');
  //         setTopAuthors(res4.data);
  //     };
  //     getData();
  // }
  // ,[])
  const recipes = [
    {
      _id: "0",
      title: "pho",
      description: "test desciption",
      author: "author name",
      difficulty: "3",
      time: "30",
    },
    {
      _id: "0",
      title: "pho",
      description: "test desciption",
      author: "author name",
      difficulty: "3",
      time: "30",
    },
    {
      _id: "0",
      title: "pho",
      description: "test desciption",
      author: "author name",
      difficulty: "3",
      time: "30",
    },
    {
      _id: "0",
      title: "pho",
      description: "test desciption",
      author: "author name",
      difficulty: "3",
      time: "30",
    },
  ];
  return (
    <div>
      <Navbar1 />
      <SlideShow />
      <Navbar2 />
      <QuickFilter />
      <section id="recipeItems">
        <div class="container">
          <div class="title">
            <h1>Recipes </h1>
          </div>
          <div class="row">
            {recipes.map((item) => (
              <RecipeItems
                id={item._id}
                title={item.title}
                description={item.description}
                author={item.author.name}
                difficulty={item.difficulty}
                time={item.cookTime}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="recipeItems">
        <div class="container">
          <div class="title">
            <h1>Top Rated Recipes </h1>
          </div>
          <div class="row">
            {recipes.map((item) => (
              <RecipeItems
                id={item._id}
                title={item.title}
                description={item.description}
                author={item.author.name}
                difficulty={item.difficulty}
                time={item.cookTime}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="recipeItems">
        <div class="container">
          <div class="title">
            <h1>Latest Recipes </h1>
          </div>
          <div class="row">
            {recipes.map((item) => (
              <RecipeItems
                id={item._id}
                title={item.title}
                description={item.description}
                author={item.author.name}
                difficulty={item.difficulty}
                time={item.cookTime}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;