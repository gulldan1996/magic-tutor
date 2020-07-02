import React from "react";
import "./App.scss";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/createStore";
import Main from "./pages/Main";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Main />
      </Provider>
    </Router>
  );
}

export default App;
