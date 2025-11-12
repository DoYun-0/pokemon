import MOCK_DATA from "../constant/mock";
import PokemonCard from "./PokemonCard";
import styled from "@emotion/styled";

const PokemonList = ({ selectPokemon, setSelectPokemon }) => {
  const isSelected = (pokemon) => {
    return selectPokemon.some((p) => p.id === pokemon.id);
  };
  return (
    <Container>
      {MOCK_DATA.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            selectPokemon={selectPokemon}
            setSelectPokemon={setSelectPokemon}
            select={isSelected(pokemon)}
          />
        );
      })}
    </Container>
  );
};

export default PokemonList;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;
