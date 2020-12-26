import React from "react";
import Cards from "./Cards.jsx";

const Movieinfo = () =>{
    return(<React.Fragment>
        <h2 className="heads"> Welcome to the netflix series </h2>
        <div className = "contents">
            <Cards />
        </div>
    </React.Fragment>)
}

export default Movieinfo;