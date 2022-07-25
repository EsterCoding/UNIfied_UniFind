import { Link, Routes, Route } from 'react-router-dom'
import UniversitiesInAlbania from './UniversitiesInAlbania'
import UniversitiesAbroad from './UniversitiesAbroad'

function Universities() {
    return (
        <div>
            <h1> Universities </h1>

            <nav>
                <li>
                    <Link to="/universities/universities-in-albania">Universities in Albania</Link>
                </li>
                <li>
                    <Link to="/universities/universities-abroad">Universities abroad</Link>
                </li>
            </nav>

            <Routes>
                <Route path="universities-in-albania/" element={<UniversitiesInAlbania />} />
                <Route path="universities-abroad/" element={<UniversitiesAbroad />} />
            </Routes>
        </div>
    )
}

export default Universities