import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import UniversitiesRouter from './UniversitiesRouter.js';
import Home from './Home.js';
import logo from './logo.png'

function App() {
    return (
        <div>
          <BrowserRouter>
          <nav class="navbar background">
            <div class="upLogo">
              <img src={logo} width="65%"/>
            </div>
            {/* <p class="text">UniFind</p> */}
              <ul class="nav-list">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/universities">Universities</Link></li>
                <li><Link to="/agenda">Agenda</Link></li>
                <li><Link to="/contactUs">Contact Us</Link></li> 
              <div class="rightNav">
                <input type="text" name="search" id="search" />
                <button class="btn btn-sm">Search</button>
              </div> 
            </ul>
          </nav>

          <Routes>
            <Route path={"home/*"} element={<Home />} />
            <Route path={"universities/*"} element={<UniversitiesRouter />} />
          </Routes>
        </BrowserRouter>
        <footer className="footer">
          <p className="text-footer">Made by UNIfied</p>
          </footer>
      </div>
    );
}

  
export default App;
