import { Link, Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import UniversitiesInAlbania from './UniversitiesInAlbania'
import UniversitiesAbroad from './UniversitiesAbroad'

function Universities() {
    return (
        <div>
            <h1> Universities </h1>
            <p> Do you want to study in Albania or abroad?</p>
            <nav>
                
            </nav>
          <div class="university-buttons">
            <button class="two-buttons">
              <Link to="/universities/universities-in-albania">Universities in Albania</Link>
            </button>
            <button class="two-buttons">
              <Link to="/universities/universities-abroad">Universities abroad</Link>
            </button>
          </div>
            <Routes>
                <Route path="universities-in-albania/" element={<UniversitiesInAlbania />} />
                <Route path="universities-abroad/" element={<UniversitiesAbroad />} />
            </Routes>
        </div>
    )
}

export default Universities



