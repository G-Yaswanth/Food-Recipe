import React from "react";
import "./App.css"

function Recipes( {name,yt,image} ) {
    return(
        <div className="recipe-comp">
            <br/> <h2 > {name} </h2> <br/>
            <img src={image} height={"300px"} width={"300px"} className="image"/> <br/>
            <a href={yt} target={"_blank"} className="yt" >  Watch Tutorial  </a><br />
            <br/><br />
        </div>
    )

}

export default Recipes;