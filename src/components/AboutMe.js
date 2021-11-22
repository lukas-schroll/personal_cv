import React from 'react';
const classes = 'flexContainer aboutMeContainer'

function AboutMe({aboutMeText}) {
    return (
        <div className={classes}>
            <div className='aboutMeSubContainer flexContainer'>
                <h2 className='containerHeader'>ABOUT ME</h2>
                <p className='aboutMeText'>{aboutMeText}</p>
            </div>
        </div>
    );
}

export default AboutMe;