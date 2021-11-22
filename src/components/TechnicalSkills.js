import React from 'react';
import TechnicalSkill from "./TechnicalSkill";


const TechnicalSkills = ({technicalSkills}) => {


    const classes = 'technicalSkillsContainer flexContainer'



    return (
        <div className={classes}>
            <div className='technicalSkillsSubContainer'>
                <h2 className='containerHeader'>SKILLS</h2>
            {
                technicalSkills.map((skill, index) => (
                    <TechnicalSkill key={index} skill={skill} />
                ))
            }
            </div>
        </div>
    );
}

export default TechnicalSkills;