import { Link, Routes, Route } from 'react-router-dom'

import AlbCS from './AlbCS'
import AlbEconomy from './AlbEconomy'
import AlbArch from './AlbArch'
import AlbLaw from './AlbLaw'
import AlbMedicine from './AlbMedicine'
import AlbaniaList from './AlbaniaList'

function Albania() {
    return (
        <div>
            <Routes>
                <Route path="" element={<AlbaniaList />} />
                <Route path="AlbCS" element={<AlbCS />} />
                <Route path="AlbEconomy" element={<AlbEconomy />} />
                <Route path="AlbArch" element={<AlbArch />} />
                <Route path="AlbMedicine" element={<AlbMedicine />} />
                <Route path="AlbLaw" element={<AlbLaw />} />
            </Routes>
        </div>
    )
}

export default Albania