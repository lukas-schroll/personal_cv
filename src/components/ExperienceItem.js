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

function ExperienceItem({experience, side}) {
    return (
        <div>
            <TimelineItem>
                <TimelineOppositeContent sx={{color: experience.color}}>
                    {parseDateString(experience.startDate)} - {parseDateString(experience.endDate)}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot sx={{backgroundColor: experience.color}}/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <ExperienceDetails experience={experience} side={side} />
                </TimelineContent>
            </TimelineItem>
        </div>
    );
}

export function parseDateString(dateString) {
    if(dateString === null)
        return 'Present'
    let arr = dateString.split("-")
    let monthString
    switch (arr[1]) {
        case '01':
            monthString = "Jan"
            break
        case '02':
            monthString = "Feb"
            break
        case '03':
            monthString = "Mar"
            break
        case '04':
            monthString = "Apr"
            break
        case '05':
            monthString = "Mai"
            break
        case '06':
            monthString = "Jun"
            break
        case '07':
            monthString = "Jul"
            break
        case '08':
            monthString = "Aug"
            break
        case '09':
            monthString = "Sep"
            break
        case '10':
            monthString = "Okt"
            break
        case '11':
            monthString = "Nov"
            break
        case '12':
            monthString = "Dez"
            break
        default:
            return ""
    }

    return monthString + " "+ arr[0]
}

export default ExperienceItem;