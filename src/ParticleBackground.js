import React from 'react';
import Particles from "react-tsparticles";
import particleConfig from "./config/particle-config";

function ParticleBackground(props) {
    return (
        <div className='particles'>

            <Particles params={particleConfig}></Particles>

        </div>
    );
}

export default ParticleBackground;