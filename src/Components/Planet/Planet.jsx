import "./Planet.css";

function Planet ({planetId, name, tagline, onClick}) {
    return(
        <button
            type="button"
            className={`planet planet-${planetId}`}
            onClick={onClick}
            aria-label={`Explore ${name}`}
        >

            <span className="planet-name">
                {name}
            </span>
            
            <span className="planet-tagline">
                {tagline}
            </span>

        </button>
    )
}

export default Planet;