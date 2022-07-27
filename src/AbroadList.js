import { Link, Routes, Route } from 'react-router-dom'

function AbroadList() {
    return (
        <div>
            <h1> Universities Abroad</h1>

            <nav>
                <li>
                    <Link to="/universities/Abroad/AbroadCS"> Computer Science </Link>
                </li>
                <li>
                    <Link to="/universities/Abroad/AbroadEconomy">  Economy </Link>
                </li>
                <li>
                    <Link to="/universities/Abroad/AbroadArch"> Architecture </Link>
                </li>
                <li>
                    <Link to="/universities/Abroad/AbroadLaw">  Law </Link>
                </li>
                <li>
                    <Link to="/universities/Abroad/AbroadMedicine">  Medicine </Link>
                </li>
            </nav>

        </div>
    )
}

export default AbroadList;