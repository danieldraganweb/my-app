import "./App.css";
import React from "react";
import Card from "./components/card.component";

function App() {
  return (
    <div className="App">
      <Card title={"Daniel Dragan"} description={"Front-end Developer"} />
      <Card title={"Welcome to my website!"} description={"DIVE IN!"} />
      <Card title={"About me"} description={"I am a front-end developer"} />
      <Card
        title={"Contact me"}
        description={"Email: danieldraganweb@gmail.com "}
      />
    </div>
  );
}

export default App;
