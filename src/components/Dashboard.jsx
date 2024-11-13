import React, { useContext, useState } from "react";
import styled from "styled-components";
import PokemonList from "./PokemonList";
import { PokemonContext } from "./PokemonContext";

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

const Dashboard = () => {
  const {favorites, removePokemon} = useContext(PokemonContext);

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
                      removePokemon(item.id);
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
    </>
  );
};

export default Dashboard;
