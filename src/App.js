import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Inscripcion from './pages/Inscripcion/Inscripcion';
import Servicios from './pages/Servicios/Servicios';
import Estudiantes from './pages/Estudiantes/Estudiantes';
import Nosotros from './pages/Nosotros/Nosotros';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/servicios" element={<Servicios/>}/>
          <Route path="/inscripciones" element={<Inscripcion/>}/>
          <Route path="/estudiantes" element={<Estudiantes/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
