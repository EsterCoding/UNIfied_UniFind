import { Link, Routes, Route } from 'react-router-dom'

function AlbaniaList() {
    return (

        <div className='div' align="center">
            <h1> Universities in Albania </h1>
            <div class="alb-university-buttons">
                <button class="unis">
                    <Link to="/universities/Albania/AlbCS"> Computer Science </Link>
                </button>
                <button class="unis">
                    <Link to="/universities/Albania/AlbEconomy">  Economy </Link>
                </button>
                <button class="unis">
                    <Link to="/universities/Albania/AlbArch"> Architecture </Link>
                </button>
                <button class="unis">
                    <Link to="/universities/Albania/AlbLaw">  Law </Link>
                </button>
                <button class="unis">
                    <Link to="/universities/Albania/AlbMedicine">  Medicine </Link>
                </button>
            </div>    
        </div>
    )
}

export default AlbaniaList