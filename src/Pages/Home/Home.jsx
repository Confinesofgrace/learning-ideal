import './Home.css';
import { useState } from 'react';
import Planet from "../../Components/Planet/Planet";
import PlanetWorld from "../../Components/PlanetWorld/PlanetWorld";

function Home() {

    const [exploring, setExploring] = useState(false);
    const [selectedPlanet, setSelectedPlanet] = useState(null);


    // =========================================
    // PLANET DATA
    // =========================================

    const planets = {

        design: {
            name: 'DESIGN',
            worldName: 'Design World',
            tagline: 'Visually communicate.',
            label: 'LEARNING IDEAL / DESIGN',
            description:
                'A space for creativity, bringing ideas to life and communicating visually.'
        },

        coding: {
            name: 'CODING',
            worldName: 'Coding World',
            tagline: 'Build with code.',
            label: 'LEARNING IDEAL / CODING',
            description:
                'A space for building ideas with code.'
        },

        teaching: {
            name: 'TEACHING',
            worldName: 'Teaching World',
            tagline: 'Learn how to learn.',
            label: 'LEARNING IDEAL / TEACHING',
            description:
                'What do you want to learn today?'
        },

        music: {
            name: 'MUSIC',
            worldName: 'Music World',
            tagline: 'Communicate with music.',
            label: 'LEARNING IDEAL / MUSIC',
            description:
                'A space for creativity and bringing ideas to life through music.'
        }

    };


    // =========================================
    // RETURN HOME
    // =========================================

    function returnHome() {

        setSelectedPlanet(null);
        setExploring(false);

    }


    // =========================================
    // RETURN
    // =========================================

    return (

        <div className={`hero ${exploring ? 'exploring' : ''}`}>


            {/* =========================================
                LANDING SCREEN
            ========================================= */}

            <div className="landing">

                <h1 className="hero-title">
                    Learning Ideal
                </h1>

                <p className="hero-tagline">
                    ...from idea to reality,
                    <span> then beyond</span>
                </p>

                <button
                    className="explore-button"
                    onClick={() => setExploring(true)}
                >
                    Explore
                </button>

            </div>


            {/* =========================================
                UNIVERSE
            ========================================= */}

            <div className="universe">


                {/* =====================================
                    CENTRAL WORLD
                ===================================== */}

                <button
                    type="button"
                    className="universe-center"
                    onClick={returnHome}
                    aria-label="Return to Learning Ideal home"
                >
                    LEARNING IDEAL
                </button>


                {/* =====================================
                    PLANETS
                ===================================== */}

                {Object.entries(planets).map(([planetId, planet]) => (

                    <Planet
                        key={planetId}
                        planetId={planetId}
                        name={planet.name}
                        tagline={planet.tagline}
                        onClick={() => setSelectedPlanet(planetId)}
                    />

                ))}


                {/* =====================================
                    SELECTED PLANET WORLD
                ===================================== */}

                
                {selectedPlanet && (

                    <PlanetWorld
                        planet={planets[selectedPlanet]}
                        onBack={() => setSelectedPlanet(null)}
                    />

                )}


            </div>

        </div>

    );
}

export default Home;
