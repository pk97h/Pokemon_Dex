import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  const HomeBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `;

  const LogoImage = styled.img`
    width: 600px;
    height: 220px;
  `;

  const StartButton = styled.button`
    width: 150px;
    height: 40px;
    color: white;
    background-color: orange;
    border: transparent;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 20px;

    &:hover {
      background-color: #db3838;
    }
  `;

  return (
    <HomeBox>
      <LogoImage src="/images/pokemon-logo.png" />
      <StartButton
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감
      </StartButton>
    </HomeBox>
  );
};

export default Home;
