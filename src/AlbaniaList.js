import { Link, Routes, Route } from 'react-router-dom'



function AlbaniaList() {
    return (
        <div>
            <h1> Universities in Albania </h1>

            <nav>
                <li>
                    <Link to="/universities/Albania/AlbCS"> Computer Science </Link>
                </li>
                <li>
                    <Link to="/universities/Albania/AlbEconomy">  Economy </Link>
                </li>
                <li>
                    <Link to="/universities/Albania/AlbArch"> Architecture </Link>
                </li>
                <li>
                    <Link to="/universities/Albania/AlbLaw">  Law </Link>
                </li>
                <li>
                    <Link to="/universities/Albania/AlbMedicine">  Medicine </Link>
                </li>
            </nav>

        </div>
    )
}

export default AlbaniaList