import React from 'react';

function SoftSkill({skill}) {
    return (
        <div
            className='softSkillItem'
            style={{
                backgroundColor: skill.color
            }}
        >
            <p>{skill.textEnglish}</p>
        </div>
    );
}

export default SoftSkill;