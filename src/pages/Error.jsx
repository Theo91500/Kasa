import {Link} from "react-router-dom"
import logoKasa from "../../public/assets/img/Error404.png"

function Error(){
    return <main className="error">
        <img src={logoKasa} alt="#" />
        <p>
            Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/">
            Retourner sur la page d’accueil
        </Link>
    </main>
}

export default Error
