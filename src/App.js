import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Universities from './Universities.js';
import Home from './Home.js';

function App() {
    return (
        <div>
          <BrowserRouter>
          <nav class="navbar background">
              <p class="text">
                UniFind
              </p>
              <ul class="nav-list">
                <li><a href="home">Home</a></li>
                <li><Link to="/universities">Universities</Link></li>
                <li><Link to="/agenda">Agenda</Link></li>
                <li><Link to="/conatctUs">Contact Us</Link></li> 
              <div class="rightNav">
                <input type="text" name="search" id="search" />
                <button class="btn btn-sm">Search</button>
              </div> 
            </ul>
          </nav>
  
          <section class="section">
            <div class="box-main">
              <div class="firstHalf">
                <h1 class="text-big"> UniFind</h1>
              </div>
            </div>
          </section> 

          <Routes>
            <Route index element={<Home />} />
            <Route path={"universities/*"} element={<Universities />} />
          </Routes>
        </BrowserRouter>
        <footer className="footer">
          <p className="text-footer">Made by UNIfied</p>
          </footer>
      </div>
    );
}
  
export default App;
