import { Column } from "./components/Column";
import { AppContainer } from "./styles";

function App() {
  return (
    <>
      <AppContainer>
        <Column text="A faire" />
        <Column text="En cours" />
        <Column text="Fini" />
      </AppContainer>
    </>
  );
}

export default App;
