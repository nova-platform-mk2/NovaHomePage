import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import SubRouter from "./components/SubRouter";
import { Global, css } from "@emotion/react";
function App() {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0");
          @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap");
          body {
            font-family: "Noto Sans", sans-serif;
          }
        `}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/nova/*" element={<SubRouter />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
