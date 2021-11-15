import React from 'react';
import SoftSkill from "./SoftSkill";

function SoftSkills({softSkills}) {
    return (
        <div className='softSkillsContainer'>
            <div className='softSkillsSubContainer'>
                <h2 className='containerHeader' >SOFT SKILLS</h2>
                {
                    softSkills.map( (skill, index) => (
                        <SoftSkill key={index} skill={skill}/>
                    ))
                }
            </div>
        </div>
    );
}

export default SoftSkills;