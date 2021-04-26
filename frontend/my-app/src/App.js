// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Landing-page">
        Welcome to the Chat App!
      </header>
      <header className="App-header">
        {/* <div style={ChatAppStyle}>Chat App</div> */}
        <div style={{ height: 100, color: 'aqua'}}>
        CHAT APP
        </div>          
        <input class="input" type="text" placeholder="User Name"></input>
        <input class="input" type="text" placeholder="Password"></input>

        <a class="button is-primary" href="https://reactjs.org" >Log In</a> 
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Log In
        </a> */}
      </header>
    </div>
  );
}


export default App;
