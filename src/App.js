import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Inscripcion from './pages/Inscripcion/Inscripcion';
import Servicios from './pages/Servicios/Servicios';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/servicios" element={<Servicios/>}/>
          <Route path="/inscripcion" element={<Inscripcion/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
