import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
