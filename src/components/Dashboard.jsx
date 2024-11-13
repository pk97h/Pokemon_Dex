import React, { useState } from "react";
import styled from "styled-components";
import PokemonList from "./PokemonList";

const DashboardStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(248, 248, 248);
  width: 90%;

  border-radius: 20px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const DashboardTitle = styled.p`
  color: red;
  font-weight: bold;
  font-size: 24px;
`;

export const BookMark = styled.img`
  border: 2px dashed grey;
  border-radius: 5px;
  width: 70px;
  height: 70px;
  padding: 10px;
  margin: 10px;

  ${(props) =>
    props.isAdded &&
    `
    border: transparent
  `}
`;

export const BookMarkBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const BookMarkWrapper = styled.div`
  ${(props) =>
    props.isAdded &&
    `  background-color: white;

  border-radius: 7px;
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);`}
`;

const defaultPokeball = {
  id: null,
  img_url: "/images/pokeball.png",
  korean_name: "",
  types: [],
  description: "",
};

const Dashboard = () => {
  const [favorites, setFavorites] = useState([
    defaultPokeball,
    defaultPokeball,
    defaultPokeball,
    defaultPokeball,
    defaultPokeball,
    defaultPokeball,
  ]);

  const removeFromFavorites = (pokemonId) => {
    const updatedFavorites = favorites.map((fav) =>
      fav.id === pokemonId ? defaultPokeball : fav
    );
    setFavorites(updatedFavorites);
  };

  const AddToFavorites = (selectedPokemon) => {
    const isDuplicate = favorites.some((fav) => fav.id === selectedPokemon.id);

    if (isDuplicate) {
      alert("이미 추가된 포켓몬입니다.");
      return;
    }

    const emptySlotIndex = favorites.findIndex((fav) => fav.id === null);
    if (emptySlotIndex !== -1) {
      const updatedFavorites = [...favorites];
      updatedFavorites[emptySlotIndex] = selectedPokemon;
      setFavorites(updatedFavorites);
    } else {
      alert("더 이상 추가할 수 없습니다.");
    }
  };

  const RemoveButton = styled.button`
    font-weight: bold;
    cursor: pointer;
    background-color: orange;
    color: white;
    border: transparent;
    border-radius: 5px;
    margin-bottom: 5px;

    &:hover {
      background-color: #db3838;
    }
  `;

  return (
    <>
      <DashboardStyle>
        <DashboardTitle>나만의 포켓몬</DashboardTitle>
        <BookMarkBox>
          {favorites.map((item, index) => (
            <BookMarkWrapper key={index} isAdded={item.id !== null}>
              <BookMark src={item.img_url} isAdded={item.id !== null} />
              {item.id !== null && (
                <>
                  <p style={{ fontWeight: "bold" }}>{item.korean_name}</p>
                  <RemoveButton
                    onClick={() => {
                      removeFromFavorites(item.id);
                    }}
                  >
                    즐겨찾기 해제
                  </RemoveButton>
                </>
              )}
            </BookMarkWrapper>
          ))}
        </BookMarkBox>
      </DashboardStyle>
      <PokemonList AddToFavorites={AddToFavorites} />
    </>
  );
};

export default Dashboard;
