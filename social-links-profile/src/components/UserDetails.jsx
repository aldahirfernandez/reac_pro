import React /*{ useState, useEffect }*/ from "react";
import "./UserDetails.css";

const UserDetails = (props) => {
  //const user = props.user
  /*const [user, setUser] = useState({})
  setUser(props.user);*/

  const character = props.character;

  return (
    <div className="contenedor1">
      <div className="cabeza">
        <img
          className="imagen"
          src={character.image}
          alt={`avatar de ${character.name}`}
        ></img>
      </div>
      <h1 className="nombre">{character.name}</h1>
      <h2 className="nacionalidad">{character.location.name}</h2>
      <p className="descripcion">{character.species}</p>
    </div>
  );
};

export default UserDetails;
