import React, { useEffect, useState } from "react";
import style from './App.module.css'
import Recipe from "./components/Recipe";

export default function App() {

    const APP_ID = 'cd945a21';
    const APP_KEY = 'a3dd25c2d796af31f71743ef5f375849';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {
        const getRecipes = async () => {
            const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
            const data = await response.json();
            setRecipes(data.hits);
        }
        getRecipes();
    }, [query]);

    

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
        <div className={style.App}>
            <h1 className={style.title}>Fast and Cooked</h1>
            <h2 className={style.subtitle}>Don't know what to eat? Let's find out a healty and tasty recipe!</h2>
            <form onSubmit={getSearch} className={style.searchForm}>
                <input className={style.searchBar} type="text" value={search} onChange={updateSearch} placeholder="Search for ingredient (e.g. banana, chicken, etc...)"/>
                <button className={style.searchButton} type="submit">Search</button>
            </form>
            <div className={style.recipes}>
                {recipes.map(recipe => (
                    <Recipe 
                        key={recipe.recipe.label}
                        title={recipe.recipe.label} 
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                        url={recipe.recipe.url}
                    />
                ))}
            </div>
        </div>
    )
}