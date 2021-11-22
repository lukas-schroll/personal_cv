import React from 'react';
import {Chip} from "@mui/material";

function TechnicalSkill({skill, itemColor}) {

    const handleClick = () => {
    };

    const colors = ['#EF6C00', '#4CAF50', '#03A9F4', '#9C27B0', '#ec407a' , '#00e5ff', '#ff1744']
    Array.prototype.sample = function () {
        return colors[Math.floor(Math.random() * colors.length)]
    }


    return (
        <div className='technicalSkill'>
            <p className='technologyTitle'>{skill.title}</p>
            <div className='technologyItems'>
                {
                    skill.technologies.map((tech, index) => {
                        let color = colors.sample()

                        return <div className='technologyItem' key={index}>
                            <Chip
                                sx={{color: color, borderColor: color}}
                                label={tech}
                                variant="outlined"
                                onClick={handleClick}
                            />
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default TechnicalSkill;