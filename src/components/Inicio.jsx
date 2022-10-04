import React, { useEffect, useState } from "react";
import { todosPersonajes } from "../fuctions/Funciones";

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null);
  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);
  return (
    <>
      {personajes != null
        ? personajes.map((character) => (
            <div key={character.id}>
              {/* <img src={character.image} alt="pepe"></img> */}
              <a href={`/character/${character.id}`}>{character.name}</a>
            </div>
          ))
        : "no hay personajes"}
    </>
  );
};

export default Inicio;
