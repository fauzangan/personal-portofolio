import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import { Footer } from './components/Footer';
import { Certificates } from './components/Certificates';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Certificates />
      <Footer />
    </div>
  );
}

export default App;
