import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { summer, boreal } from "assets/styles/Themes.js";
import { GlobalStyle } from "assets/styles/GlobalStyle";

import { Home } from "./pages/Home";
import { Experience } from "./pages/Experience";

import { Header } from "components/Header";
import { Footer } from "components/Footer";


function App() {
  
  return (
   
      <ThemeProvider theme={summer}>
        <GlobalStyle />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>

        <Footer />
      </ThemeProvider>

  );
}

export default App;
