import styled from "@emotion/styled";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const MainPage = ({ selectPokemon, setSelectPokemon }) => {
  return (
    <Container>
      <Dashboard
        selectPokemon={selectPokemon}
        setSelectPokemon={setSelectPokemon}
      />
      <PokemonList
        selectPokemon={selectPokemon}
        setSelectPokemon={setSelectPokemon}
      />
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;
