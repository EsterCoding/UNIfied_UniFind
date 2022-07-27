import { Link, Routes, Route } from 'react-router-dom'

function AbroadList() {
    return (
        <div className='div' align="center">
            <h1> Universities Abroad </h1>
            <div class="alb-university-buttons">
                <button class="unis">
                    <Link to="/universities/Abroad/AbroadCS"> Computer Science </Link>
                </button>
                <button class="unis">
                    <Link to="/universities/Abroad/AbroadEconomy">  Economy </Link>
                </button>
                <button class="unis">
                    <Link to="/universities/Abroad/AbroadArch"> Architecture </Link>
                </button>
                <button class="unis">
                    <Link to="/universities/Abroad/AbroadLaw">  Law </Link>
                </button>
                <button class="unis">
                    <Link to="/universities/Abroad/AbroadMedicine">  Medicine </Link>
                </button>
            </div>
        </div>
    )
}

export default AbroadList;