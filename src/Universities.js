import { Link, Routes, Route } from 'react-router-dom'
import Albania from './Albania'
import Abroad from './Abroad'

function Universities() {
    return (
        <div>
            <h1> Universities </h1>

            <nav>
                <li>
                    <Link to="/universities/Albania">Universities in Albania</Link>
                </li>
                <li>
                    <Link to="/universities/Abroad">Universities Abroad</Link>
                </li>
            </nav>

            <Routes>
                <Route path="Albania/*" element={<Albania />} />
                <Route path="Abroad/*" element={<Abroad />} />
            </Routes>
        </div>
    )
}

export default Universities;