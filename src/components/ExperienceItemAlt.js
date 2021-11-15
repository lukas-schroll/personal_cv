import React from 'react';
import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import ExperienceDetails from "./ExperienceDetails";
import {parseDateString} from "./ExperienceItem";

function ExperienceItem({experience, side}) {
    return (
        <div>
            <TimelineItem>
                <TimelineOppositeContent>
                    <ExperienceDetails experience={experience} side={side} />
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot sx={{backgroundColor: experience.color}}/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent sx={{color: experience.color}}>
                    {parseDateString(experience.startDate)} - {parseDateString(experience.endDate)}
                </TimelineContent>
            </TimelineItem>
        </div>
    );
}

export default ExperienceItem;