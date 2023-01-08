import React, { useEffect, useState } from "react";
import "./App.css"
import Recipes from "./recipe.js"

function App() {
  const [query,setQuery]=useState("chicken");
  const [search,setSearch] = useState("")
  const [result,setResult] = useState([]);
  const [error, setError] = useState("");

  useEffect(() =>{
    getRecipe(); 
  },[query]);

  const getRecipe =()=>{ 
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`).then(res=>
      res.json()).then(data=>{
      try{
        setResult(data.meals);
        // console.log(result);
        console.log(data);
      }
      catch(err){
        console.log("Error");
        setError("Enter another value");
      }
    })
  }
  
  const updateSearchBox= e =>{
    setSearch(e.target.value);
  }

  const  searchRecipe= e =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }


  return (
    <div className="app">
      <form onSubmit={searchRecipe} className="search-form">
        <input type="text" value={search} onChange={updateSearchBox}  className="search-box" />
        <button  type="submit" className="search-button">search</button>
      </form>
      <br />
      {error && <div>{error}</div> }
      <h3 className="query">You are searching for {query} recepie</h3> <br />
      <br />
      <div className="recipes">
        { error.length===0 && (
          result.map(res=>(
            <Recipes 
            key={res.idMeal}
            name={res.strMeal} 
            id={res.idMeal}
            yt={res.strYoutube} 
            image={res.strMealThumb }/>
          )))
        }
      </div>

    </div>
  );
}

export default App;
