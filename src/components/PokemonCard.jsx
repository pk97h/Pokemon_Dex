import styled from "styled-components";
import MockData from "./MockData";
import { useNavigate, useParams } from "react-router-dom";

const PokemonCard = () => {
  const DescriptionBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    height: 100vh;
    font-weight: bold;

    .korean_name {
      color: red;
      font-size: 24px;
    }
  `;

  const BackButton = styled.button`
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

  const navigate = useNavigate();
  const param = useParams();

  const pokemonCard = MockData.find(
    (pokemonCard) => pokemonCard.id === parseInt(param.id)
  );

  if (!pokemonCard) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <DescriptionBox>
      <img src={pokemonCard.img_url}></img>
      <p className="korean_name">{pokemonCard.korean_name}</p>
      <p>No. {pokemonCard.id}</p>
      <p>타입 : {pokemonCard.types.join(", ")}</p>
      <p>{pokemonCard.description}</p>
      <BackButton onClick={() => {
        navigate("/dex")
      }}>뒤로 가기</BackButton>
    </DescriptionBox>
  );
};

export default PokemonCard;
