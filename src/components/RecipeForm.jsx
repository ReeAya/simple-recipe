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
        <input
          type="text"
          name="recipe-ttl"
          id="recipe-ttl"
          placeholder="Apple Pie"
        />
      </p>

      <p>
        <label htmlFor="recipe-ing">Recipe Ingredients</label>
        <textarea
          name="recipe-ingre"
          id="recipe-ing"
          rows="5"
          placeholder="5 apples, 1 cup sugar, etc..."
        ></textarea>
      </p>

      <p>
        <label htmlFor="recipe-img">Recipe Images</label>
        <input
          type="file"
          name="recipe-img"
          id="recipe-img"
          accept="image/png, image/jpeg"
        />
      </p>

      <p>
        <label htmlFor="recipe-steps">Recipe Steps</label>
        <textarea
          name="recipe-steps"
          id="recipe-steps"
          rows="10"
          placeholder="1. Peel apples...."
        ></textarea>
      </p>
      <div className="btn-area">
        <button
          onClick={setFormState}
          onClick={onBtnClick}
          className="add-recipe-btn"
        >
          Add New Recipe
        </button>
        <button
          onClick={setFormState}
          onClick={onBtnClick}
          className="add-recipe-btn"
        >
          Cancel
        </button>
      </div>
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
