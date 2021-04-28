// import logo from './logo.svg';
import './App.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBBCos2_0391b9nbyAsLadPJG3sGCdOEmk",
  authDomain: "webapp-d1c63.firebaseapp.com",
  projectId: "webapp-d1c63",
  storageBucket: "webapp-d1c63.appspot.com",
  messagingSenderId: "700248453706",
  appId: "1:700248453706:web:1958ec2511660e5d6aacb3"
};

firebase.initializeApp(firebaseConfig);

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  // signInSuccessUrl: '/signedIn',
  signInSuccessUrl: '/',
  signInOptions: [
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => {
    var opened = window.open("");
    opened.document.write("<html><body>Landing page here!</body></html>");
    return false},
  },
};


  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div style={ChatAppStyle}>Chat App</div> */}
        <div style={{ height: 100, color: 'aqua'}}>
        CHAT APP
        </div>          
        {/* <input class="input" type="text" placeholder="User Name"></input> */}
        {/* <input class="input" type="text" placeholder="Password"></input> */}
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

        {/* <a class="button is-primary" href="https://reactjs.org" >Log In</a>  */}
        {/* <a class="button is-primary" onclick="Landing()" >Log In</a>  */}
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
