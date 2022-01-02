import { React, useState, useEffect } from "react";
import Navbar1 from "../../Components/Navbar1";
import SlideShow from "../../Components/SlideShow";
import Navbar2 from "../../Components/Navbar2";
import QuickFilter from "../../Components/QuickFilter";
import RecipeItems from "../Recipe/recipeItems";
import Footer from "../../Components/Footer";
import MemberItem from "../MemberPage/MemberItem";
import axios from "axios";

const API = "http://localhost:4000/";

const HomePage = () => {
  const [mostFavorite, setMostFavorite] = useState([]);
  const [latestRecipes, setLatestRecipes] = useState([]);
  const [topAuthors, setTopAuthors] = useState([]);

  useEffect(() => {
    const getMostFavorite = async () => {
      const res = await axios.get(
        API + "recipes?sortBy=numOfFavourite:desc&limit=5"
      );
      setMostFavorite(res.data);
    };
    const getLatest = async () => {
      const res = await axios.get(
        API + "recipes?sortBy=createdAt:desc&limit=5"
      );
      setLatestRecipes(res.data);
    };
    const getAuthors = async () => {
      const res = await axios.get(
        API + "members?sortBy=numOfFavourite:desc&limit=5"
      );
      setTopAuthors(res.data);
    };
    getMostFavorite();
    getLatest();
    getAuthors();
  }, []);
  // const recipes = [
  //   {
  //     _id: "0",
  //     title: "pho",
  //     description: "test desciption",
  //     author: "author name",
  //     difficulty: "3",
  //     time: "30",
  //   },
  //   {
  //     _id: "0",
  //     title: "pho",
  //     description: "test desciption",
  //     author: "author name",
  //     difficulty: "3",
  //     time: "30",
  //   },
  //   {
  //     _id: "0",
  //     title: "pho",
  //     description: "test desciption",
  //     author: "author name",
  //     difficulty: "3",
  //     time: "30",
  //   },
  //   {
  //     _id: "0",
  //     title: "pho",
  //     description: "test desciption",
  //     author: "author name",
  //     difficulty: "3",
  //     time: "30",
  //   },
  // ];
  return (
    <div className="home">
      <Navbar1 />
      <SlideShow />
      <Navbar2 />
      <QuickFilter />
      {topAuthors.map((item) => console.log(item))}
      <section id="recipeItems">
        <div className="container">
          <div className="title">
            <h1>Top Rated Recipes </h1>
          </div>
          <div className="row">
            {mostFavorite.map((item) => (
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
        <div className="container">
          <div className="title">
            <h1>Latest Recipes </h1>
          </div>
          <div className="row">
            {latestRecipes.map((item) => (
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
        <div className="container">
          <div className="title">
            <h1>Latest Recipes </h1>
          </div>
          <div className="row">
            {topAuthors.map((data, key) => {
              return (
                <div key={key} className="avatarone" id="onethird">
                  <MemberItem
                    key={key}
                    id={data._id}
                    avatar={data.avatar}
                    name={data.name}
                    time={data.createdAt}
                    numOfRecipes={data.numOfRecipes}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
