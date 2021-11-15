import React from 'react';

import {
    Timeline,
} from '@mui/lab';
import ExperienceItem from "./ExperienceItem";
import ExperienceItemAlt from "./ExperienceItemAlt";

function Experience({experience, title,color}) {
    return (
        <div style={{backgroundColor: color}} className="experienceContainer">
            <div className='experienceSubContainer'>
                <h2 className='containerHeader'>{title}</h2>
                <Timeline
                    position="alternate"
                    sx={{width: '75%'}}
                >
                    {
                        experience.map((experience, index) => {
                            if (index % 2 === 0) {
                                return <ExperienceItem key={index} experience={experience} side={'right'}/>
                            } else {
                                return <ExperienceItemAlt key={index} experience={experience} side={'left'}/>
                            }
                        })
                    }
                </Timeline>
            </div>
        </div>
    );
}

export default Experience;