import { Link, NavLink } from "react-router-dom"
import logoKasa from "../../../public/assets/img/.LOGO.png"

export function Header() {
    return <header>
        <nav>
            <Link to="/" className="LogoKasa">
                <img src={logoKasa} alt="Logo Kasa" />
            </Link>
            <ul>
                <NavLink to='/' className={({ isActive }) => `LinkHeader ${isActive ? "active" : ""}`}>
                    <li>
                        Accueil
                    </li>
                </NavLink>
                <NavLink to='/about' className={({ isActive }) => `LinkHeader ${isActive ? "active" : ""}`}>
                    <li>
                        A Propos
                    </li>
                </NavLink>
            </ul>
        </nav>
    </header>
}