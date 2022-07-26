import { Link, Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import UniversitiesInAlbania from './UniversitiesInAlbania'
import UniversitiesAbroad from './UniversitiesAbroad'

function Universities() {
    return (
        <div>
            <h1> Universities </h1>
            <nav>
                
            </nav>

            <button class="two-buttons-first">
              <Link to="/universities/universities-in-albania">Universities in Albania</Link>
            </button>
            <button class="two-buttons-second">
              <Link to="/universities/universities-abroad">Universities abroad</Link>
            </button>

            <Routes>
                <Route path="universities-in-albania/" element={<UniversitiesInAlbania />} />
                <Route path="universities-abroad/" element={<UniversitiesAbroad />} />
            </Routes>
        </div>
    )
}

export default Universities



