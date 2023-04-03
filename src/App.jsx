import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { useState } from "react";
import { HomePage } from "./pages/HomePage";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <>
      <Header />
      <Main>
        <HomePage countries={countries} setCountries={setCountries} />
      </Main>
    </>
  );
}

export default App;
