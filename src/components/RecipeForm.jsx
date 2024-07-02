import AddBtn from "./AddBtn";

export default function RecipeForm() {
  return (
    <>
      <form action="" className="recipe-form">
        <p>
          <label htmlFor="recipe-ttl">Recipe Title</label>
          <input type="text" name="recipe-ttl" id="recipe-ttl" />
        </p>
        {/*  */}
        <p>
          <label htmlFor="recipe-ing">Recipe Ingredients</label>
          <textarea name="recipe-ingre" id="recipe-ing" rows="5"></textarea>
        </p>

        {/*  */}
        <p>
          <label htmlFor="recipe-steps">Recipe Steps</label>
          <textarea name="recipe-steps" id="recipe-steps" rows="10"></textarea>
        </p>
        <AddBtn text="Add New Recipe"></AddBtn>
      </form>
    </>
  );
}
