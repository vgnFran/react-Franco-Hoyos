import './App.css';
import NavBar from './Componentes/NavBar/NavBar.js';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer.js';
import Counter from './Componentes/Counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <NavBar/>
        <ItemListContainer/>
        
      </header>

    </div>
  );
}

export default App;
