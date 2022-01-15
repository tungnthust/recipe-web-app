import React from "react";
import InputField from "../../atoms/InputField/InputField";
import { Link } from "react-router-dom";

const RecipeTable = (props) => {
  const { array, input_value, handleInput } = props;
  return (
    <div className="bt-table">
      <div className="bootstrap-table">
        <div className="fixed-table-toolbar">
          <div className="pull-left-search">
            <InputField
              type="text"
              value={input_value}
              handleFunction={handleInput}
              placeholder="Search for Recipes..."
              aria_label="Search"
            />
          </div>
        </div>
        <div className="fixed-table-container">
          <div className="fixed-table-header">
            <table></table>
          </div>
          <div className="fixed-table-body">
            <table
              data-toggle="table"
              data-search-align="left"
              data-search="true"
              data-classes="table table-striped"
              className="table table-striped"
            >
              <thead>
                <tr>
                  <th>
                    <div className="th-inner">Image</div>
                    <div className="fht-cell"></div>
                  </th>
                  <th>
                    <div className="th-inner sortable">Name</div>
                    <div className="fht-cell"></div>
                  </th>
                  <th>
                    <div className="th-inner">Category</div>
                    <div className="fht-cell"></div>
                  </th>
                  <th>
                    <div className="th-inner">Difficulty</div>
                    <div className="fht-cell"></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {array
                  .filter(
                    (f) =>
                      f.title.toLowerCase().includes(input_value.toLowerCase()) ||
                      input_value === ""
                  )
                  .map((recipe) => {
                    const recipeInfo = {
                      pathname: "/recipes/" + recipe._id,
                      id: recipe._id,
                    };
                    return (
                      <tr className="no-records-found">
                        <th>
                          <Link to={recipeInfo}>
                            <div className="th-inner-route">
                              <img
                                src={`${recipe.image}`}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src =
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqjnW3exxJNLtPV7reKRCjjELkyXcO4a_1Q&usqp=CAU";
                                }}
                                width="120"
                                height="80"
                                alt="img"
                              />
                            </div>
                          </Link>
                          <div className="fht-cell"></div>
                        </th>
                        <th>
                          <Link to={recipeInfo}>
                            <div className="th-inner-route sortable">
                              {recipe.title}
                            </div>
                          </Link>
                          <div className="fht-cell"></div>
                        </th>
                        <th>
                          <div className="th-inner">{recipe.category}</div>
                          <div className="fht-cell"></div>
                        </th>
                        <th>
                          <div className="th-inner">{recipe.difficulty}</div>
                          <div className="fht-cell"></div>
                        </th>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="fixed-table-pagination"></div>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  );
};

export default RecipeTable;
