import { Link, Routes, Route } from 'react-router-dom'
import Albania from './Albania'
import Abroad from './Abroad'

function Universities() {
    return (
        <div>
            <h1> Universities </h1>
            <p> Do you want to study in Albania or abroad?</p>
            <nav>
                
            </nav>
          <div class="university-buttons">
            <button class="two-buttons">
              <Link to="/universities/Albania">Universities in Albania</Link>
            </button>
            <button class="two-buttons">
              <Link to="/universities/Abroad">Universities abroad</Link>
            </button>
          </div>
            <Routes>
                <Route path="Albania/" element={<Albania />} />
                <Route path="Abroad/" element={<Abroad />} />
            </Routes>
        </div>
    )
}

export default Universities



