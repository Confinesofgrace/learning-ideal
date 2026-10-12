
import './Home.css';
import { useState } from 'react';

function Home() {

    const [exploring, setExploring] = useState(false);
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    function returnHome() {
        setSelectedPlanet(null);
        setExploring(false);
    }

    return (
        <div className={`hero ${exploring ? 'exploring' : ''}`}>

            {/* Landing Screen */}

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


            {/* Universe */}

            <div className="universe">

                {/* Central World */}

                <button
                    type="button"
                    className="universe-center"
                    onClick={returnHome}
                    aria-label="Return to Learning Ideal home"
                >
                    LEARNING IDEAL
                </button>


                {/* Design Planet */}

                <button
                    type="button"
                    className="planet planet-design"
                    onClick={() => setSelectedPlanet("design")}
                    aria-label="Explore Design World"
                >
                    <span className="planet-name">
                        DESIGN
                    </span>

                    <span className="planet-tagline">
                        Visually communicate.
                    </span>
                </button>


                {/* Coding Planet */}

                <button
                    type="button"
                    className="planet planet-coding"
                    onClick={() => setSelectedPlanet("coding")}
                    aria-label="Explore Coding"
                >
                    <span className="planet-name">
                        CODING
                    </span>

                    <span className="planet-tagline">
                        Build with code.
                    </span>
                </button>


                {/* Teaching Planet */}

                <button
                    type="button"
                    className="planet planet-teaching"
                    onClick={() => setSelectedPlanet("teaching")}
                    aria-label="Explore Teaching"
                >
                    <span className="planet-name">
                        TEACHING
                    </span>

                    <span className="planet-tagline">
                        Learn how to Learn.
                    </span>
                </button>


                {/* Music Planet */}

                <button
                    type="button"
                    className="planet planet-music"
                    onClick={() => setSelectedPlanet("music")}
                    aria-label="Explore Music"
                >
                    <span className="planet-name">
                        MUSIC
                    </span>

                    <span className="planet-tagline">
                        Communicate with Music.
                    </span>
                </button>


                {/* Design World */}

                {selectedPlanet === "design" && (

                    <div className="planet-world design-world">

                        <button
                            type="button"
                            className="back-button"
                            onClick={() => setSelectedPlanet(null)}
                        >
                            ← Back to Universe
                        </button>

                        <div className="world-content">

                            <p className="world-label">
                                LEARNING IDEAL / DESIGN
                            </p>

                            <h1>Design World</h1>

                            <p>
                                A space for creativity, bringing ideas to life and communicaticating visually.
                            </p>

                        </div>

                    </div>

                )}
                

                {/* Coding World */}

                {selectedPlanet === "coding" && (

                    <div className="planet-world coding-world">

                        <button
                            type="button"
                            className="back-button"
                            onClick={() => setSelectedPlanet(null)}
                        >
                            ← Back to Universe
                        </button>

                        <div className="world-content">

                            <p className="world-label">
                                LEARNING IDEAL / CODING
                            </p>

                            <h1>Coding World</h1>

                            <p>
                                A space for creativity, visual thinking,
                                and bringing ideas to life.
                            </p>

                        </div>

                    </div>

                )}

                {/* Teaching World */}

                {selectedPlanet === "teaching" && (

                    <div className="planet-world teaching-world">

                        <button
                            type="button"
                            className="back-button"
                            onClick={() => setSelectedPlanet(null)}
                        >
                            ← Back to Universe
                        </button>

                        <div className="world-content">

                            <p className="world-label">
                                LEARNING IDEAL / TEACHING
                            </p>

                            <h1>Teaching World</h1>

                            <p>
                                What do you want to learn today?
                            </p>

                        </div>

                    </div>

                )}

                 {/* Music World */}

                {selectedPlanet === "music" && (

                    <div className="planet-world music-world">

                        <button
                            type="button"
                            className="back-button"
                            onClick={() => setSelectedPlanet(null)}
                        >
                            ← Back to Universe
                        </button>

                        <div className="world-content">

                            <p className="world-label">
                                LEARNING IDEAL / MUSIC
                            </p>

                            <h1>Music World</h1>

                            <p>
                                A Space for creativity, and bringing ideas to life throgh music.
                            </p>

                        </div>

                    </div>

                )}

            </div>

        </div>
    );
}

export default Home;