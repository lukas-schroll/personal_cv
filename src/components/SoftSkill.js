import React from 'react';
import {green} from "@mui/material/colors";

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