import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import photo from './photo.png'
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
