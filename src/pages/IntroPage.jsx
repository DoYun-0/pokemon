import styled from "@emotion/styled";
import PokemonLogo from "../assets/pokemon-logo.png";
import { useNavigate } from "react-router-dom";

const IntroPage = () => {
  const navigate = useNavigate();
  const ButtonClick = () => {
    navigate("/main");
  };
  return (
    <ContainerDiv>
      <Img src={PokemonLogo}></Img>
      <Button onClick={ButtonClick}>포켓몬 도감 시작하기</Button>
    </ContainerDiv>
  );
};

export default IntroPage;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; // 가로 가운데
  align-items: center; // 세로 가운데
  gap: 20px;
  height: 100vh;
`;
const Img = styled.img`
  width: 600px;
`;
const Button = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 20px;

  &:hover {
    background-color: #cc0000;
  }
`;
