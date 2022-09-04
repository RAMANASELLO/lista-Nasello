import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ItemListContainer greeting="Hola"/>
      </header>
    </div>
  );
}

export default App;
