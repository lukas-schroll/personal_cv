import React from 'react';
import {Chip} from "@mui/material";
import {red} from "@mui/material/colors";

function TechnicalSkill({skill}) {

    const handleClick = () => {};
    const colors = ['#ffcccb', '#d76eee', '#e53935', '#81d4fa', '#4caf50' ,  '#ff5722']
    Array.prototype.sample = function(){
        return this[Math.floor(Math.random()*this.length)];
    }



    return (
        <div className='technicalSkill'>
            <p className='technologyTitle'>{skill.title}</p>
            <div className='technologyItems'>
                {
                    skill.technologies.map((tech, index) => (
                        <div className='technologyItem' key={index}>
                            <Chip
                                sx={{color: colors.sample()}}
                                label={tech}
                                variant="outlined"
                                onClick={handleClick}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default TechnicalSkill;