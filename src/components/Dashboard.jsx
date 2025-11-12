import styled from "@emotion/styled";
import PokemonCard from "./pokemonCard";
import pokeball from "../assets/pokeball.png";

const Dashboard = ({ selectPokemon, setSelectPokemon }) => {
  return (
    <Container>
      <Title>나만의 포켓몬</Title>
      <Content>
        {selectPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            selectPokemon={selectPokemon}
            setSelectPokemon={setSelectPokemon}
            select={true}
          />
        ))}
        {Array.from({ length: 6 - selectPokemon.length }, (_, index) => (
          <Box key={index}>
            <Img src={pokeball} alt="pokeball" key={index} />
          </Box>
        ))}
      </Content>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #ff0000;
  margin: 20px 0;
`;

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  justify-items: center;
  gap: 20px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 225.5px;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  padding: 25px;
  border-radius: 10px;
  border: 2px dashed #d0d0d0;
  background-color: #ffffff;
`;
