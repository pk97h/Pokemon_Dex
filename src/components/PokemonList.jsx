import React, { useContext, useState } from "react";
import styled from "styled-components";
import MockData from "./MockData";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "./PokemonContext";

export const PokemonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 2px solid transparent;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  background-color: white;
  margin: 20px;
  transition: transform 0.3s;
  width: 170px;
  min-height: 300px;
  font-weight: bold;

  &:hover {
    transform: scale(1.05);
  }
`;
const PokemonListBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: rgb(248, 248, 248);
  width: 90%;
  border-radius: 20px;
  margin: auto;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const BookMarkButton = styled.button`
  background-color: orange;
  color: white;
  border: transparent;
  border-radius: 5px;
  width: auto;
  height: auto;
  padding: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #db3838;
  }
`;

const DescriptionButton = styled.button`
  background-color: orange;
  color: white;
  border: transparent;
  border-radius: 5px;
  width: auto;
  height: auto;
  margin: 10px;
  padding: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #db3838;
  }
`;

const PokemonList = ({}) => {

  const {addPokemon} = useContext(PokemonContext);

  const navigate = useNavigate();

  return (
    <>
      <PokemonListBox>
        {MockData.map(({ img_url, korean_name, type, id, description }) => {
          return (
            <PokemonBox key={id}>
              <img src={img_url} />
              <p>{korean_name}</p>
              <DescriptionButton
                onClick={() => {
                  navigate(`/card/${id}`);
                }}
              >
                포켓몬을 조사한다
              </DescriptionButton>
              <BookMarkButton
                onClick={() => {
                  addPokemon({ id, img_url, korean_name, type, description });
                }}
              >
                즐겨찾기 등록
              </BookMarkButton>
            </PokemonBox>
          );
        })}
      </PokemonListBox>
    </>
  );
};

export default PokemonList;
