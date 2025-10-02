import IntroPage from "./pages/IntroPage";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import { Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";
import { GlobalTypographyStyle } from "./styles/typography";
import { GlobalResetStyle } from "./styles/reset";
import "./App.css";

function App() {
  return (
    <>
      <Global styles={GlobalTypographyStyle}></Global>
      <Global styles={GlobalResetStyle}></Global>
      <Routes>
        <Route path="/" element={<IntroPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
