import React from "react";
import style from "./Recipe.module.css";

export default function Recipe({title, calories, image, ingredients, url, }) {
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <ol className={style.ingredientsList}>
                {ingredients.map(ingredient => (
                    <li className={style.ingredient}>{ingredient.text}</li>
                ))}
            </ol>
            <p className={style.calories}>Calories: {(calories).toFixed(0)} Kcal</p>
            <a className={style.url} href={url} target="_blank">View the full recipe</a>
            <img className={style.recipeImage} src={image} alt=""/>
        </div>
    );
}