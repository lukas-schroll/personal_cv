import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearDeterminate({proficiency}) {

    return (
        <Box sx={{width: '100%'}}>
            <LinearProgress
                className='volumeBar'
                sx={{
                    height: '1rem',
                    borderRadius: '0.25rem',
                    backgroundColor: 'azure',
                }}
                variant="determinate"
                value={proficiency}
            />
        </Box>
    );
}