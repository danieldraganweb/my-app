import "./App.css";

import Nav from "./components/Nav";
import Header from "./components/Heading";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import Footer from "./components/Footer";
import Promo from "./components/Promo";
import ModeToggler from "./components/ModeToggler";
import Job from "./components/Job";

const App = () => {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("type a number");
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  return (
    <div className="App">
      <Nav />

      <div className="container">
        <Header firstName="John" />
        <Job salary="1000" position="Developer" company="Google" />
        <Header firstName="Jane" />
        <Job salary="2000" position="Designer" company="Facebook" />
        <Header firstName="Joe" />
        <Job salary="3000" position="Manager" company="Twitter" />
        <Header firstName="Jack" />
        <Job salary="4000" position="CEO" company="Amazon" />
      </div>
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <ModeToggler />
      <Promo />
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
      <Footer />
    </div>
  );
};

export default App;
