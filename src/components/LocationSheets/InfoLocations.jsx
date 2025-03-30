export function InfoLocations({card, rating}) {
    const totalStars = 5;    

    return (
        <section className="infoLocations">
            <div className="leftContent">
                <h1>
                    {card.title}
                </h1>

                <h2>
                    {card.location}
                </h2>

                <div className="infoTags">
                    {card.tags.map((data, index) => (
                        <button key={index}>
                            {data}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="rightContent">
                <a className="host" href="#">
                    <span>
                        {card.host.name}
                    </span>
                    <img src={card.host.picture} alt={card.host.name} />
                </a>

                <div className="starRating">
                    {Array.from({ length: totalStars }, (_, index) => (
                        <i 
                            key={index} 
                            className={index < rating ? "fa fa-star red" : "fa fa-star gray"}
                        />
                    ))}
                </div>
            </div>

        </section>
    )

}


export function StarRating({ rating }) {
    const totalStars = 5; // Nombre total d'étoiles

    return (
        <div className="star-rating">
            {Array.from({ length: totalStars }, (_, index) => (
                <i 
                    key={index} 
                    className={index < rating ? "fa fa-star red" : "fa fa-star gray"}
                />
            ))}
        </div>
    )
}