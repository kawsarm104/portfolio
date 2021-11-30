import "./App.css";
import Header from "./Pages/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Education from "./Pages/Education/Education";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <About></About>
      <Education></Education>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
