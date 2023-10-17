import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Homepage/Home';


function App() {
  return (
    <div className="App">
      <div className='fShipping-container'>
      <div className='fShipping page-width'>
       
        <p className='free-shipping'>Free Shipping on orders above 999/-</p>
        <p className='call-us'>Call us on: +91 98768 05120</p>
        </div>
      </div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
