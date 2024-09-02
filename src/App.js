
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NavBar />} />
          <Route index element={<HomePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
