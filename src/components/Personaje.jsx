import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { uPersonaje } from "../fuctions/Funciones";

export const Personaje = () => {
  const [personaje, setPersonaje] = useState(null);

  const params = useParams();
  useEffect(() => {
    uPersonaje(params.id, setPersonaje);
  }, [params.id]);

  return (
    <>
      {personaje != null ? (
        <div>
          <h2>Personaje con id {params.id}</h2>
          <p>con el nombre {personaje.name}</p>
          <img src={personaje.image} alt="" />
        </div>
      ) : (
        "no hay personaje"
      )}
    </>
  );
};

export default Personaje;
