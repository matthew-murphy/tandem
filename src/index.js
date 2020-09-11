import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

// const fireapp = firebase.initializeApp({
//   apiKey: "AIzaSyDfrdEV7AFBGR-1g7kBLnagmzIh7ahF7cE",
//   authDomain: "package-in-transit.firebaseapp.com",
//   databaseURL: "https://package-in-transit.firebaseio.com",
//   projectId: "package-in-transit",
//   storageBucket: "package-in-transit.appspot.com",
//   messagingSenderId: "661750429457",
//   appId: "1:661750429457:web:ffcf0bdc82003be6733eb0",
//   measurementId: "G-RNPXXSCZJK"
// });
// // Initialize Firebase

// export default fireapp

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <BrowserRouter>
    <React.StrictMode>
        <CssBaseline />
        <App />
    </React.StrictMode>
  </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
