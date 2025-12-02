import { useState, useEffect } from "react"; 
import ItemCard from "../components/ItemCard";
import { imagenesMap } from "../helpers/ImagenesMap";

const NOMBRES_MAP = {
  FrodoBaggins: ["Frodo Baggins"],
  Gandalf: ["Gandalf"],
  Elrond: ["Elrond"],
  Legolas: ["Legolas"],
  Gimli: ["Gimli"],
  Sauron: ["Sauron"],
  Saruman: ["Saruman"],
  Galadriel: ["Galadriel"],
  Gollum: ["Gollum"],
  Sam: ["Samwise Gamgee"]
};

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://the-one-api.dev/v2/character?limit=1000", {
      headers: { Authorization: "Bearer V_YdK4FMCzBbIilRFB9x" }
    })
      .then(res => res.json())
      .then(data => {
        const docs = data?.docs || [];

        const filtrados = docs.filter(char =>
          Object.values(NOMBRES_MAP).some(names => names.includes(char.name))
        );

        setCharacters(filtrados);
      })
      .catch(err => {
        console.error(err);
        setCharacters([]);
      });
  }, []);

  return (
    <div className="home-grid">
      {characters.map(char => {
        const key = Object.keys(NOMBRES_MAP).find(k =>
          NOMBRES_MAP[k].includes(char.name)
        );

        return (
          <ItemCard
            key={char._id}
            item={{
              ...char,
              name: key,
              image: imagenesMap[key] ?? `/src/images/${key}.png`
            }}
            type="character"
          />
        );
      })}
    </div>
  );
}
