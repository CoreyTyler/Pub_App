import React from "react";
import Like from "../Like/Like";
import "./Beer.css";

const Beer = (props) => {
  return (
    <li class="list_item">
      <h2>{props.beer.name}</h2>
      <p>{props.beer.tagline}</p>
      <p>{props.beer.first_brewed}</p>
      <img class="app_pic" src={props.beer.image_url} alt="" />
      <Like class="like" />
    </li>
  );
};

export default Beer;
