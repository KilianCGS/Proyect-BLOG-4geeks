import { createContext, useContext, useReducer } from "react";

const StoreContext = createContext();

const initialState = {
  favorites: []
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      if (state.favorites.some(f => f._id === action.payload._id)) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };

case "REMOVE_FAVORITE":
  return {
    ...state,
    favorites: state.favorites.filter(f => f._id !== action.payload._id)
  };


    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useGlobalStore() {
  return useContext(StoreContext);
}
