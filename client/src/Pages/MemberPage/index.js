import {React, useState, useEffect} from "react";
import './index.css';

import Navbar1 from "../../organisms/Navbar1";
import Navbar2 from "../../organisms/Navbar2";
import Footer from "../../molecules/Footer";
import AuthorList from "../../molecules/AuthorList/AuthorList";
import axios from "axios";

const API = "http://localhost:4000/api";

const MembersPage = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getAllRecipes = async () => {
      const res = await axios.get(API + "/members");
      const items = res.data;
      items.forEach((item) => {
        const newDate = new Date(item.createdAt);
        const day = newDate.getDate();
        const month = newDate.getMonth() + 1;
        const year = newDate.getFullYear();
        item.createdAt = day + "-" + month + "-" + year;
        console.log(item.createdAt);
      });
      setMembers(res.data);
    };
    getAllRecipes();
  }, []);

  return (
    <div className="authorsPage">
      <Navbar1 />
      <Navbar2 />
      <section className="author-section">
        <AuthorList list={members} mode="member"/>
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

export default MembersPage;