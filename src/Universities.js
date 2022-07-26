import { Link, Routes, Route } from 'react-router-dom'
import UniversitiesInAlbania from './UniversitiesInAlbania'
import UniversitiesAbroad from './UniversitiesAbroad'

function Universities() {
    return (
        <div>
            <h1> Universities </h1>
         <BrowserRouter>
            <nav>
                <button>
                    <li>
                        <Link to="/universities/universities-in-albania">Universities in Albania</Link>
                    </li>
                    <li>
                        <Link to="/universities/universities-abroad">Universities abroad</Link>
                    </li>
                </button>
            </nav>

            <Routes>
                <Route path="universities-in-albania/" element={<UniversitiesInAlbania />} />
                <Route path="universities-abroad/" element={<UniversitiesAbroad />} />
            </Routes>
         </BrowserRouter>
        </div>
    )
}

export default Universities
{/* <BrowserRouter>
<nav class="navbar background">
  <p class="text">UniFind</p>
    <ul class="nav-list">
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/universities">Universities</Link></li>
      <li><Link to="/agenda">Agenda</Link></li>
      <li><Link to="/conatctUs">Contact Us</Link></li> 
    <div class="rightNav">
      <input type="text" name="search" id="search" />
      <button class="btn btn-sm">Search</button>
    </div> 
  </ul>
</nav> */}