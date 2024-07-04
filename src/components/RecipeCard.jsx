// import styles from "./RecipeCard.module.css";

export default function RecipeCard({ title, image, text }) {
  return (
    <>
      <a href="/" className="recipe-card">
        <h3 className="recipe-card-ttl"> {title} </h3>
        <img className="recipe-card-img" src={image} />
        <p> {text} </p>
      </a>
    </>
  );
}
