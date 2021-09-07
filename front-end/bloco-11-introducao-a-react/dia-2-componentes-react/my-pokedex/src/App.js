import './App.css';
import PokemonType from './PokemonType'
import pokemons from './data';

function App() {
  return (
    <div className="pokemon">
      {pokemons.map((pokes) => < PokemonType key={pokes.id} poke={pokes} />)}
    </div>
  );
}

export default App;
