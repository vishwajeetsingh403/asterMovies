import './App.css';
import UseMoviesContext from './context/useMoviesContext';
import HomeContainer from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <UseMoviesContext>
        <HomeContainer />
      </UseMoviesContext>
    </div>
  );
}

export default App;
