import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Header/Header";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Education from "./Pages/Education/Education";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/aboutme" element={<About></About>}></Route>
          <Route path="/education" element={<Education></Education>}></Route>
          <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

