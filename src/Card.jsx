import React from "react";

const Card = (props) =>{
    return(<React.Fragment>
        <div class="card" style={{width: "20rem"}}>
        <img src={props.image} class="card-img-top" alt="netflixImages" height="300px" />
        <div class="card-body bg-dark">
        <h5 class="card-title text-white">{props.titleName}</h5>
        <p class="card-text text-white">Famous Netflix Series</p>
        <a href="https://www.netflix.com/in/" class="btn btn-primary">Go and Watch</a>
        </div>
        </div>
    </React.Fragment>)
}

export default Card;