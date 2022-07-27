import { Route, Routes } from 'react-router-dom'
import Universities from './Universities'
import Albania from './Albania'
import Abroad from './Abroad'

function UniversitiesRouter() {
    return (
        <div>
            <Routes>
                <Route path="" element={<Universities />} />
                <Route path="Albania" element={<Albania />} />
                <Route path="Abroad" element={<Abroad />} />
            </Routes>
        </div>
    )
}

export default UniversitiesRouter