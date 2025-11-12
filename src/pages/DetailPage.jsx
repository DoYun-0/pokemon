import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../constant/mock";
import styled from "@emotion/styled";

const DetailPage = ({ selectPokemon, setSelectPokemon }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(id));
  const select = selectPokemon.some((p) => p.id === pokemon.id);

  const handleButtonClick = (e, pokemon) => {
    e.stopPropagation();
    if (select) {
      setSelectPokemon(selectPokemon.filter((p) => p.id !== pokemon.id));
      return;
    }

    if (selectPokemon.length >= 6) {
      alert("포켓몬은 6마리까지만 선택할 수 있습니다.");
      return;
    }
    if (selectPokemon.some((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }

    if (!select) {
      setSelectPokemon([...selectPokemon, pokemon]);
      return;
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Img src={pokemon.img_url} alt="포켓몬 이미지" />
      <Title>{pokemon.korean_name}</Title>
      <Context>{pokemon.types.join(",")}</Context>
      <Context>{pokemon.description}</Context>
      <ButtonBox>
        <Button
          $color="#ff0000"
          $hoverColor="#dd0000"
          onClick={(e) => handleButtonClick(e, pokemon)}
        >
          {select ? "삭제" : "추가"}
        </Button>
        <Button
          $color="#252525"
          $hoverColor="#000000"
          onClick={handleBackClick}
        >
          뒤로가기
        </Button>
      </ButtonBox>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: red;
  margin: 20px 0;
`;

const Context = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${(props) => props.$color};
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.$hoverColor};
  }
  &:active,
  &:focus {
    outline: 4px auto -webkit-focus-ing-color;
    outline-offset: 2px;
  }
`;
