import { React, useState, useEffect } from "react";
import SlideShow from "../../atoms/SlideShow";
import Navbar1 from "../../organisms/Navbar1";
import Navbar2 from "../../organisms/Navbar2";
import QuickFilter from "../../molecules/QuickFilter";
import Footer from '../../molecules/Footer';
import axios from "axios";
import RecipeList from "../../molecules/RecipeList/RecipeList";
import AuthorList from "../../molecules/AuthorList/AuthorList";

const API = "http://localhost:4000/api/";

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
      const items = res.data;
      items.forEach((item) => {
        const newDate = new Date(item.createdAt);
        const day = newDate.getDate();
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();
        item.createdAt = day + "-" + month + "-" + year;
        console.log(item.createdAt);
      });
      setTopAuthors(res.data);
    };
    getMostFavorite();
    getLatest();
    getAuthors();
  }, []);
  return (
    <div className="home">
      <Navbar1 />
      <SlideShow />
      <Navbar2 />
      <QuickFilter />
      <section id="Card">
        <RecipeList list={mostFavorite} list_name="Top Rated Recipes" />
      </section>
      <section id="Card">
        <RecipeList list={latestRecipes} list_name="Latest Recipes" />
      </section>
      <section id="Card">
        <AuthorList list={topAuthors} mode="home"/>
      </section>

      <div>
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
