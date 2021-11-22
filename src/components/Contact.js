import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Contact(props) {

    let iconSize = 50

    return (
        <div className='contactContainer'>
            <div className='contactSubContainer'>
                <h2 className='contactHeader'>Contact</h2>
                <div className='contactIconContainer'>
                    <GitHubIcon href='' className='contactIcon' sx={{fontSize: iconSize}}/>
                    <LinkedInIcon className='contactIcon' sx={{fontSize: iconSize}}/>
                    <MailOutlineIcon className='contactIcon' sx={{fontSize: iconSize}}/>
                </div>
            </div>
        </div>
    );
}

export default Contact;