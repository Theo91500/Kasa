import { Link } from "react-router-dom";
import dataJson from "../../../public/data/data.json"

export function Card() {
    return (
        <div className="cardList">
            {dataJson.map(card => (
                <Link to={`/LocationSheets/${card.id}`}>
                <article key={card.id} className="card">
                    <img src={card.cover} alt={card.title} />
                    <div className="filter"></div>
                    <h3>{card.title}</h3>
                </article>
                </Link>
            ))}
        </div>
    );
}

