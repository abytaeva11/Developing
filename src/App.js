import './App.css';
import React from "react";
import Global from "./components/Global/Global";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
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
