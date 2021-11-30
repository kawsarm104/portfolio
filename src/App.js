import "./App.css";
import About from "./Pages/About/About";
import Education from "./Pages/Education/Education";
import Header from "./Pages/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import Portfolio from "./Pages/Portfolio/Portfolio";

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
