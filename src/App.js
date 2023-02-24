import './style.css';
import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"

// import katieZaferes from './images/katie-zaferes.png'


export default function App() {
  return (
    <div className="App">
      <Header/>
      <Meme/>
    </div>
  );
}

