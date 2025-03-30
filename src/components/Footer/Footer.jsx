import {Link} from "react-router-dom"
import logoKasa from "../../../public/assets/img/.LOGO-1.png"

export function Footer() {
    return (
        <footer>
            <Link to="/">
                <img src={logoKasa} alt="logo Kasa" />
            </Link>
            <span>
                © 2020 Kasa. All rights reserved
            </span>
        </footer>
    )
}