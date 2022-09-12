import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./Components / NavigationBar/NavigationBar";
import Hero from "./Components /Hero/Hero";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
