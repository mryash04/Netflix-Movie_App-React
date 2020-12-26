import React from "react";
import Card from "./Card.jsx";

const Cards = () =>{
    return(<React.Fragment>
        <Card image="Bardofblood.jpg"
        titleName = "Bard Of Blood"/>
        <Card image="Dark.jpeg"
        titleName="Dark" />
        <Card image="Delhicrime.jpg"
        titleName="Delhi Crime" />
        <Card image="Mindgames.jpg"
        titleName="Mind Game" />
        <Card image="Selectionday.jpg"
        titleName="Selection Day" />
        <Card image="Battlecreek.jpg"
        titleName="Battle Creek" />
    </React.Fragment>)
}

export default Cards;