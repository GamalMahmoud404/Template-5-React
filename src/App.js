
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/1-Header/header';
import Hero from './Components/2-Hero/hero';
import Sec1 from './Components/3-Skills/skills';
import Sec2 from "./Components/4-Projects/Projects";
import FirstSec from "./Components/4-Projects/FirstSec"
import ScoundSec from "./Components/4-Projects/ScoundSec"
import ThirdSec from "./Components/4-Projects/thirdSec";
import Sec3 from './Components/5-Sec3/sec3';
import Footer from './Components/6-Footer/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Sec1 />
      <Sec2 />

      <Routes>
        <Route path="/first" element={<FirstSec />} />
        <Route path="/scound" element={<ScoundSec />} />
        <Route path="/third" element={<><ThirdSec /><ScoundSec /></>} />
      </Routes>

      <Sec3 />
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
