import "./PlanetWorld.css";

function PlanetWorld({ planet, onBack }) {

    return (

        <div className="planet-world">

            <button
                type="button"
                className="back-button"
                onClick={onBack}
            >
                ← Back to Universe
            </button>

            <div className="world-content">

                <p className="world-label">
                    {planet.label}
                </p>

                <h1>
                    {planet.worldName}
                </h1>

                <p>
                    {planet.description}
                </p>

            </div>

        </div>

    );
}

export default PlanetWorld;
