import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Inscripcion from './pages/Inscripcion/Inscripcion';

function App() {
  return (
    <div>
      <HashRouter basename="/Front-End">
        <Routes>
          <Route path="/Front-End" element={<Home/>} />
          <Route path="/inscripcion" element={<Inscripcion/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
