
import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import AboutPage from './pages/about/AboutPage';
import HomePage from './pages/home/HomePage';
import Portfolio from './pages/portfolio/Portfolio';

function App() {

  const name = 234;
  // let name = "ali";
  // let name2 = "akbar"
  let navoptions = {
    home : "home",
    about : "about",
    Proj : "Projects",
    Exp : "Experience",
    contact : "contactUS"
  }
  
  return (
    <div className="App">
      {/* <Navbar abc={name} name2={name2} /> */}
      <Navbar navlinks={navoptions} />
      <Hero/>
      <div> Helo my name is = {name}  </div>
    </div>
  );
}

export default App;