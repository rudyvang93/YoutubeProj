
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="YouTube-header">
        <img src="/Youtube.jpg" className="App-logo" alt="logo" />
        <h1> Welcome to Youtube</h1>
        <form action="/videos" methos="POST">
          <input type="text" placeholder="search" name="search"></input>
          <button href="./App.js">add search picture</button>
          <a class="home" href="./App.js"> Home</a>
        </form>
      </header>
    </div>
  );
}

export default App;
