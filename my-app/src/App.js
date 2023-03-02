import logo from './logo.svg';
import './App.css';
import './Guestgreeting.js'
import Guestgreeting from './Guestgreeting.js';

function App() {
 // let msg = "benn";
  return (
    <div className="App">
      <header className="App-header">
        <p>
         <Guestgreeting />
        </p>
      </header>
    </div>
  );
}

export default App;
