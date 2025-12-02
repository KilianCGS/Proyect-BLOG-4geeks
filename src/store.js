import { createContext, useContext, useReducer } from "react";

const initialState = {
  favorites: []
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      if (state.favorites.find(fav => fav._id === action.payload._id)) return state;
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
}

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}
