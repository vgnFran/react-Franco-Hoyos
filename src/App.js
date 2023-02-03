import './App.css';
import NavBar from './Componentes/NavBar/NavBar.js';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <NavBar/>
        <ItemListContainer greetings="Bienvenido" page="Vintage Clothings"/>

      </header>

    </div>
  );
}

export default App;
