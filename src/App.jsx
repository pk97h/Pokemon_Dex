import GlobalStyle from "./components/GlobalStyle";
import { PokemonProvider } from "./components/PokemonContext";
import Router from "./shared/Router";



const App = () => {
  return (
    <PokemonProvider>
      <GlobalStyle />
      <Router />
    </PokemonProvider>
  );
};

export default App;
