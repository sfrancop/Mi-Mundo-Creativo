import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Inscripcion from './pages/Inscripcion/Inscripcion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/inscripcion" element={<Inscripcion/>}/>     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
