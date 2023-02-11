import './App.css';
import NavBar from './Componentes/NavBar/NavBar.js';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <NavBar/>
        <ItemListContainer greeting="hola"/>
        
      </header>

    </div>
  );
}

export default App;

