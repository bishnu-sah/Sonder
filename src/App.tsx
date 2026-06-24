import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Library from './pages/Library';
import Roleplay from './pages/Roleplay';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/library" element={<Library />} />
        <Route path="/roleplay" element={<Roleplay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
