import './Home.css';
import { useState } from 'react';

function Home() {

    const [exploring, setExploring] = useState(false);

    return (
        <div className={`hero ${exploring ? 'exploring' : ''}`}>

            {!exploring && (
                <>
                    <h1 className="hero-title">
                        LEARNING IDEAL
                    </h1>

                    <p className="hero-tagline">
                        ...from idea to reality,
                        <span> then beyond</span>
                    </p>

                    <button onClick={() => setExploring(true)}>
                        Explore
                    </button>
                </>
            )}

            {exploring && (
                <div className="universe">

                    <div className="universe-center">
                        LEARNING IDEAL
                    </div>

                    <div className="planet planet-design">
                        DESIGN
                    </div>

                    <div className="planet planet-coding">
                        CODING
                    </div>

                    <div className="planet planet-teaching">
                        TEACHING
                    </div>

                    <div className="planet planet-music">
                        MUSIC
                    </div>

                </div>
            )}

        </div>
    );
}

export default Home;