import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const generateNumber = (num) => {
  return `No. ${String(num).padStart(3, "0")}`;
};

const PokemonCard = ({ pokemon, selectPokemon, setSelectPokemon, select }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail?id=${pokemon.id}`);
  };

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
  return (
    <Card onClick={handleCardClick}>
      <Img src={pokemon.img_url} alt="pokemon" />
      <Name>{pokemon.korean_name}</Name>
      <Num>{generateNumber(pokemon.id)}</Num>
      <Button onClick={(e) => handleButtonClick(e, pokemon)}>
        {select ? "삭제" : "추가"}
      </Button>
    </Card>
  );
};

export default PokemonCard;

const Card = styled.div`
  width: 100%;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const Name = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 5px 0;
`;

const Num = styled.p`
  font-size: 12px;
  margin: 12px 0;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-top: 10px;
  background-color: #ff0000;
  color: #ffffff;
  border: nome;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #e60000;
  }
  &:active,
  &:focus {
    outline: 4px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }
`;
