import { useNavigate } from "react-router-dom";
import { useGlobalStore } from "../hooks/useGlobalReducer";

export default function ItemCard({ item, type }) {
  const navigate = useNavigate();
  const { dispatch } = useGlobalStore();

  const handleAddFavorite = () => {
    dispatch({
      type: "ADD_FAVORITE",
      payload: {
        _id: item._id,
        name: item.name,
        type,
        image: item.image
      }
    });
  };

  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} />

      <h3>{item.name}</h3>

      <div className="buttons-container">

      
        {type !== "movie" && (
          <button onClick={() => navigate(`/characters/${item._id}`)}>
            View More
          </button>
        )}

        <button onClick={handleAddFavorite}>
          Add Favorite
        </button>
      </div>
    </div>
  );
}
