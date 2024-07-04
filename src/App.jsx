import { useState } from "react";
import reactLogo from "./assets/react.svg";
import applePieImg from "./assets/apple-pie.jpg";

import RecipeCard from "./components/RecipeCard";

import { RecipeForm } from "./components/RecipeForm";
import "./App.css";

function App() {
  // function handleClick() {
  //   console.log("clicked");
  // }

  const [isClicked, setIsClicked] = useState(false);
  function handleChangeState() {
    setIsClicked(!isClicked);
  }
  let randomTxt =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A mollitia voluptatem repellat tempore quam veniam deserunt. Vitae aperiam placeat cumque optio totam enim nesciunt, ullam rem asperiores quo ea aliquam?";

  function onBtnClickHandler(e) {
    handleChangeState();
  }

  return (
    <>
      <h2>Recipes</h2>
      <section className="recipe-section-body">
        <RecipeCard
          title={"Apple Pie"}
          image={applePieImg}
          text={randomTxt}
        ></RecipeCard>
        <RecipeCard
          title={"Apple Pie"}
          image={applePieImg}
          text={randomTxt}
        ></RecipeCard>
      </section>

      <button
        onClick={() => setIsClicked(!isClicked)}
        className="add-recipe-btn"
      >
        Add Recipe
      </button>
      <section
        className={
          !isClicked ? "recipe-form-body display-none" : "recipe-form-body"
        }
      >
        <RecipeForm
          formState={isClicked}
          onBtnClick={onBtnClickHandler}
        ></RecipeForm>
      </section>
    </>
  );
}

export default App;
//  className={
//   isToggled ? "recipe-form-body " : "recipe-form-body display-none"
// }
