import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from "react";
import Global from "./components/Global/Global";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Tabs from "./pages/Tabs/Tabs";


function App() {
  return (
    <div className="App">
        <Header/>
        <Global/>
        <Footer/>
    </div>
  );
}

export default App;
