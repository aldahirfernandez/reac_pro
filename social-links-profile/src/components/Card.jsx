import React from "react";
// import avatarJessica from "../public/avatar-jessica.jpeg"
import UserDetails from "./UserDetails";
import ButtonSection from "./ButtonSection";
import "./Card.css";

function Card(props) {

  const character = props.character;
  /*console.log(user);*/
 // const socialLinks = user["social-links"]

  return (
    <div className="contenedorDinamico">
      <UserDetails character = {character}/>
     {/* <ButtonSection socialLinks ={socialLinks}  /> */}
    </div>

  )
}

export default Card;