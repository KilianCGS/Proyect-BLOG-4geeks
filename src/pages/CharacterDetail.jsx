import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { imagenesMap } from "../helpers/ImagenesMap";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
   
    fetch(`https://the-one-api.dev/v2/character/${id}`, {
      headers: { Authorization: "Bearer V_YdK4FMCzBbIilRFB9x" }
    })
      .then(res => res.json())
      .then(data => setCharacter(data?.docs[0] || null))
      .catch(err => {
        console.error("Error fetching character detail:", err);
        setCharacter(null);
      });

   
    fetch(`https://the-one-api.dev/v2/character/${id}/quote`, {
      headers: { Authorization: "Bearer V_YdK4FMCzBbIilRFB9x" }
    })
      .then(res => res.json())
      .then(data => setQuote(data?.docs[0]?.dialog || ""))
      .catch(err => console.error("Error fetching quote:", err));
  }, [id]);

  if (!character) return <p>Cargando detalle...</p>;

  const keyName = character.name.replace(/\s/g, "");

  return (
    <div className="detail-card">
      <img
        src={imagenesMap[keyName]}
        alt={character.name}
      />
      <h1>{character.name}</h1>
      <p>Race: {character.race || "Unknown"}</p>
      <p>Gender: {character.gender || "Unknown"}</p>
      <p>Birth: {character.birth || "Unknown"}</p>
      {quote && <p><strong>Quote:</strong> "{quote}"</p>}
    </div>
  );
}
