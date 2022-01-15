import { React, useState, useEffect } from "react";
import "./author.css";
import Navbar1 from "../../organisms/Navbar1";
import Navbar2 from "../../organisms/Navbar2";
import Footer from "../../molecules/Footer";
import RecipeTable from "../../organisms/RecipeTable";
import UserCard from "../../atoms/Card/UserCard/UserCard";
import { useParams } from "react-router";
import axios from "axios";

const API = "http://localhost:4000/api";

const AuthorPage = () => {
  const { id } = useParams();
  const [arrayOwnRecipes, setArray1] = useState([]);
  const [arrayFavouredRecipes, setArray2] = useState([]);
  const [member, setMember] = useState({});
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const getRecipe = async () => {
      const res = await axios.get(API + "/members/" + id);
      const item = res.data;
      const newDate = new Date(item.createdAt);
      const day = newDate.getDate();
      const month = newDate.getMonth() + 1;
      const year = newDate.getFullYear();
      item.createdAt = day + "-" + month + "-" + year;
      setMember(item);
      setArray1(item.own_recipes);
      setArray2(item.favourited_recipes);
    };
    getRecipe();
  }, []);

  if (member !== undefined) {
    return (
      <div className="author">
        <Navbar1 />
        <Navbar2 />
        <section className="author-container">
          <div className="container">
            <div className="row">
              <UserCard user={member} num_recipe={arrayOwnRecipes.length} />
              <div className="col-sm-9">
                <div className="accordion right-part" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        About Author
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body changeInfoCon">
                        <div className="changeInfo">
                          <hr />
                          <label>Email: {member.email}</label>
                          <label>Recipes wrote: {arrayOwnRecipes.length}</label>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        About Recipes
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="white-block2">
                          <div className="content-inner">
                            <hr />
                            <RecipeTable
                              array={arrayOwnRecipes}
                              input_value={filter}
                              handleInput={(event) =>
                                setFilter(event.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Favoured Recipes
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="white-block2">
                          <div className="content-inner">
                            <hr />
                            <RecipeTable
                              array={arrayFavouredRecipes}
                              input_value={filter}
                              handleInput={(event) =>
                                setFilter(event.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <br />
          <br />
          <br />
        </div>
        <Footer />
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};
export default AuthorPage;