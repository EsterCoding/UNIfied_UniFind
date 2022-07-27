import { Link, Routes, Route } from 'react-router-dom'

import AbroadCS from './AbroadCS'

import AbroadEconomy from './AbroadEconomy'
import AbroadArch from './AbroadArch'
import AbroadLaw from './AbroadLaw'
import AbroadMedicine from './AbroadMedicine'
import AbroadList from './AbroadList'

function Abroad() {
    return (
        <div>
            <Routes>
                <Route path="" element={<AbroadList />} />
                <Route path="AbroadCS" element={<AbroadCS />} />
                <Route path="AbroadEconomy" element={<AbroadEconomy />} />
            </Routes>
        </div>
    )
}

export default Abroad;