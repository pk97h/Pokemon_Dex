import { children, createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const defaultPokeball = {
    id: null,
    img_url: "/images/pokeball.png",
    korean_name: "",
    types: [],
    description: "",
  };

  const [favorites, setFavorites] = useState([
    defaultPokeball,
    defaultPokeball,
    defaultPokeball,
    defaultPokeball,
    defaultPokeball,
    defaultPokeball,
  ]);

  const addPokemon = (pokemon) => {
    const isDuplicate = favorites.some((fav) => fav.id === pokemon.id);

    if (isDuplicate) {
      alert("이미 추가된 포켓몬입니다.");
      return;
    }

    const emptySlotIndex = favorites.findIndex((fav) => fav.id === null);
    if (emptySlotIndex !== -1) {
      const updatedFavorites = [...favorites];
      updatedFavorites[emptySlotIndex] = pokemon;
      setFavorites(updatedFavorites);
    } else {
      alert("더 이상 추가할 수 없습니다.");
    }
  };

  const removePokemon = (id) => {
    const updatedFavorites = favorites.map((fav) =>
      fav.id === id ? defaultPokeball : fav
    );
    setFavorites(updatedFavorites);
  };

  return (
    <PokemonContext.Provider value={{ favorites, addPokemon, removePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
