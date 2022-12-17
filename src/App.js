import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Inscripcion from './pages/Inscripcion/Inscripcion';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/inscripcion" element={<Inscripcion/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
