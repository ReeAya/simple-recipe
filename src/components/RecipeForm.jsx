import { useState } from "react";

export function RecipeForm({ onBtnClick }) {
  //   const [childState, setChildState] = useState(false);
  const [formState, setFormState] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
  }
  // console.log(formState);
  //   function toggleState() {
  //     // setChildState(!childState);
  //     // console.log(childState);
  //     // return childState;
  //     // console.log(props);
  //     setFormState(!formState);
  //   }
  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <p>
        <label htmlFor="recipe-ttl">Recipe Title</label>
        <input type="text" name="recipe-ttl" id="recipe-ttl" />
      </p>

      <p>
        <label htmlFor="recipe-ing">Recipe Ingredients</label>
        <textarea name="recipe-ingre" id="recipe-ing" rows="5"></textarea>
      </p>

      <p>
        <label htmlFor="recipe-steps">Recipe Steps</label>
        <textarea name="recipe-steps" id="recipe-steps" rows="10"></textarea>
      </p>
      <button
        onClick={setFormState}
        onClick={onBtnClick}
        className="add-recipe-btn"
      >
        Add New Recipe
      </button>
    </form>
  );
}

// onClick={props.onBtnClick}
/* <button
          onClick={() => setFormState(!formState)}
          className="add-recipe-btn"
          value={formState}
        >
          Add New Recipe
        </button> */
