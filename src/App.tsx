import { AddNewItem } from "./components/AddNewItem";
import Card from "./components/Card";
import { Column } from "./components/Column";
import { AppContainer } from "./styles";

function App() {
  return (
    <>
      <AppContainer>
        <Column text="A faire">
          <Card text="Apprendre le code" />
        </Column>
        <Column text="En cours">
          <Card text="Apprendre le javascript" />
        </Column>
        <Column text="Terminé">
          <Card text="Apprendre le HTML" />
        </Column>

        <AddNewItem
          toggleButtonText=" + Ajouter une autre liste"
          onAdd={console.log}
        />
      </AppContainer>
    </>
  );
}

export default App;
