import { useState } from "react";
import reactLogo from "./assets/react.svg";
import applePieImg from "./assets/apple-pie.jpg";

import RecipeCard from "./components/RecipeCard";
import AddBtn from "./components/AddBtn";
import RecipeForm from "./components/RecipeForm";
import "./App.css";

function App() {
  // function handleClick() {
  //   console.log("clicked");
  // }
  let randomTxt =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A mollitia voluptatem repellat tempore quam veniam deserunt. Vitae aperiam placeat cumque optio totam enim nesciunt, ullam rem asperiores quo ea aliquam?";

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

      <AddBtn text="Add Recipe"></AddBtn>

      <section className="recipe-form-body display-none">
        <RecipeForm></RecipeForm>
      </section>
    </>
  );
}

export default App;
//  className={
//   isToggled ? "recipe-form-body " : "recipe-form-body display-none"
// }
