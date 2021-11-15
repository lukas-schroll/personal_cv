import React from 'react';


function ExperienceDetails({experience,side}) {
    return (
        <div>
            <p>{experience.titleEnglish}</p>
            <p style={{color: experience.color}}>{experience.institution}</p>

            <ul className='experienceList'>
                {
                    experience.descriptionItemsEnglish.map((item, index) => {
                        if(side === 'right'){
                            return <li className='experienceListItem'>{item}</li>
                        }
                        else
                            return <li className='experienceListItem' style={{direction: "rtl"}}>{item}</li>
                    })
                }
            </ul>

        </div>
    );
}

export default ExperienceDetails;