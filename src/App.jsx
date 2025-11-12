import IntroPage from "./pages/IntroPage";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import { Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import { GlobalTypographyStyle } from "./styles/typography";
import { GlobalResetStyle } from "./styles/reset";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [selectPokemon, setSelectPokemon] = useState(() => {
    const saved = sessionStorage.getItem("selectedPokemon");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("selectedPokemon", JSON.stringify(selectPokemon));
  }, [selectPokemon]);

  return (
    <>
      <Global styles={GlobalTypographyStyle}></Global>
      <Global styles={GlobalResetStyle}></Global>
      <Routes>
        <Route path="/" element={<IntroPage />}></Route>
        <Route
          path="/main"
          element={
            <MainPage
              selectPokemon={selectPokemon}
              setSelectPokemon={setSelectPokemon}
            />
          }
        ></Route>
        <Route
          path="/detail"
          element={
            <DetailPage
              selectPokemon={selectPokemon}
              setSelectPokemon={setSelectPokemon}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
