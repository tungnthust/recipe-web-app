import {React,useState,useEffect} from "react";
import Navbar1 from '../../Components/Navbar1';
import SlideShow from '../../Components/SlideShow';
import Navbar2 from '../../Components/Navbar2';
import QuickFilter from '../../Components/QuickFilter';
import Footer from '../../Components/Footer';
import axios from "axios";

const API = "http://localhost:4000";

const HomePage = () =>{

    // const [topRated,setTopRated] = useState([]);
    // const [mostFavorite,setMostFavorite] = useState([]);
    // const [latestRecipes,setLatestRecipes] = useState([]);
    // const [topAuthors,setTopAuthors] = useState([]);

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
    // },[])
    return(
        <div>
        <Navbar1/>
        <SlideShow/>
        <Navbar2/>
        <QuickFilter/>
        <QuickFilter/>
        <QuickFilter/>
        <QuickFilter/>
        <Footer/>
        </div>
    )
}

export default HomePage;