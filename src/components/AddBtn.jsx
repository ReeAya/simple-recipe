import { useState } from "react";

export default function AddBtn({ text }) {
  function handleClick() {
    console.log("clicked");
  }
  return (
    <button onClick={handleClick} className="add-recipe-btn">
      {text}
    </button>
  );
}
