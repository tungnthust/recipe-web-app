import { React, useState } from "react";

const IngredientForm = () => {
  const [inputList, setInputList] = useState([
    {
      ingredient: "",
      quantity: 0,
      quantityType: "",
    },
  ]);

  const handleInputChange = (e, index) => {
    const { data, value } = e.target;
    const list = [...inputList];
    list[index][data] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        ingredient: "",
        quantity: 0,
        quantityType: "",
      },
    ]);
  };

  return (
    <div className="IngredientForm">
      {inputList.map((x, i) => {
        return (
          <div className="box">
              <p>Ingredient Form</p>
            <input
              name="ingredient"
              value={x.ingredient}
              onChange={(e) => handleInputChange(e, i)}
            />
            <input
              className="ml10"
              name="quantity"
              value={x.quantity}
              onChange={(e) => handleInputChange(e, i)}
            />
            <input
              className="ml10"
              name="quantityType"
              value={x.quantityType}
              onChange={(e) => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {inputList.length !== 1 && (
                <button className="mr10" onClick={() => handleRemoveClick(i)}>
                  Remove
                </button>
              )}
              {inputList.length - 1 === i && (
                <button onClick={handleAddClick}>Add</button>
              )}
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
};

export default IngredientForm;