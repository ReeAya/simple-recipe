import { useState } from "react";

export function RecipeForm({ onBtnClick }) {
  //   const [childState, setChildState] = useState(false);
  const [formState, setFormState] = useState(false);
  //
  const [ttlState, setTTlState] = useState("");

  const [ingState, setIngState] = useState("");
  const [imgState, setImgState] = useState("");
  const [stepsState, setStepsState] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(ttlState, ingState, stepsState);
    setTTlState("");
    setIngState("");
    setStepsState("");
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
          onChange={(e) => setTTlState(e.target.value)}
          type="text"
          name="recipe-ttl"
          id="recipe-ttl"
          value={ttlState}
          placeholder="Apple Pie"
          required
        />
      </p>

      <p>
        <label htmlFor="recipe-ing">Recipe Ingredients</label>
        <textarea
          onChange={(e) => setIngState(e.target.value)}
          name="recipe-ingre"
          id="recipe-ing"
          rows="5"
          value={ingState}
          placeholder="5 apples, 1 cup sugar, etc..."
          required
        ></textarea>
      </p>

      {/* <p>
        <label htmlFor="recipe-img">Recipe Images</label>
        <input
          onChange={(e) => setImgState(e.target.value)}
          type="file"
          name="recipe-img"
          id="recipe-img"
          accept="image/png, image/jpeg"
        />
      </p> */}

      <p>
        <label htmlFor="recipe-steps">Recipe Steps</label>
        <textarea
          onChange={(e) => setStepsState(e.target.value)}
          name="recipe-steps"
          id="recipe-steps"
          rows="10"
          value={stepsState}
          placeholder="1. Peel apples...."
          required
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

        <button onClick={onBtnClick} className="add-recipe-btn">
          Cancel
        </button>
      </div>
    </form>
  );
}
//  onClick={setFormState}
// onClick={props.onBtnClick}
/* <button
          onClick={() => setFormState(!formState)}
          className="add-recipe-btn"
          value={formState}
        >
          Add New Recipe
        </button> */
