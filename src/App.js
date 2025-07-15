
import './App.css';
import Description from './components/desctiption/Description';
import GetStarted from './components/getStarted/GetStarted';
import Navbar from './components/navbar/Navbar';
import AboutPage from './pages/about/AboutPage';
import HomePage from './pages/home/HomePage';


function App() {



  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <AboutPage />
      <Description />
      <GetStarted />
    </div>
  );
}

export default App;