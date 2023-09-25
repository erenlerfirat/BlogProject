import './App.css';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Welcome to react blog site by F.Erenler
        </h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Home/>
    </div>
  );
}

export default App;
