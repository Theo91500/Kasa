

export function Banner({image, altText, content}){
    return <div className="Banner">
        <img src={image} alt={altText} />
        <div className="filter">
            <h2>{content}</h2>
        </div>
    </div> 
}