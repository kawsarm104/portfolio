import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import AboutMe from './Pages/Home/AboutMe/AboutMe';
import Education from './Pages/Home/Education/Education';
import Portfolio from './Pages/Home/Portfolio/Portfolio';
import Contact from './Pages/Home/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <AboutMe></AboutMe>
      <Education></Education>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
}

export default App;
