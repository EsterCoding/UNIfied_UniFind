import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Universities from './Universities.js';
import Home from './Home.js';
import { logDOM } from '@testing-library/react';


function App() {
    return (
        <div>
          <BrowserRouter>
          <nav class="navbar background">
              <p class="text">
                UniFind
              </p>
              <ul class="nav-list">
                <img src={1} alt=""/>
                <li><a href="home">Home</a></li>
                <li><Link to="/universities">Universities</Link></li>
                <li><Link to="/agenda">Counselling</Link></li>
                <li><Link to="/conatctUs">Contact Us</Link></li> 
              <div class="rightNav">
                <input type="text" name="search" id="search" />
                <button class="btn btn-sm">Search</button>
              </div> 
            </ul>
          </nav>
  
          <section class="section">
            <div class="box-main">
            
            </div>
          </section> 

          <Routes>
            <Route index element={<Home />} />
            <Route path={"universities/*"} element={<Universities />} />
            
          </Routes>
        </BrowserRouter>
      
      </div>
    );
}
  
export default App;
