import { useState } from "react";
import iconChevron from "../../../public/assets/img/vector.png"

export function Collapse({title, description}){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <article  className="collapse">
            <div className="collapseHeader" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <img src={iconChevron} alt="IconChevron"
                 className={`chevron ${isOpen ? "rotated" : ""}`} />
            </div>
            <div className={`collapseContent ${isOpen ? "open" : ""}`}>
                <p>{description}</p>
            </div>
        </article>
    )
}