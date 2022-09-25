import './App.css';
import CryptoCurrencyComponent from './components/CryptoCurrencyComponent';

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <h2 className="text-center">Today's Cryptocurrency Prices by Market Cap</h2>
        <CryptoCurrencyComponent/>
      </div>
    </div>
  );
}

export default App;
