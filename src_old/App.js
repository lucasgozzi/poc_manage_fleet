import React from "react";
import "./App.css";
import Menu from "../src/components/Appbar/index";
import Login from "../src/pages/login";
import Footer from "../src/components/Footer";
import store from './redux';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Menu />
        <Login />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
