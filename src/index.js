import React from 'react';
import ReactDOM from 'react-dom';
import {ContextProvider} from "./Context";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
