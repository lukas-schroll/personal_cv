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
                    <GitHubIcon
                        onClick={() => window.open('https://github.com/lukas-schroll')}
                        className='contactIcon'
                        sx={{fontSize: iconSize}}
                    />
                    <LinkedInIcon
                        onClick={() => window.open('https://www.linkedin.com/in/lukas-schroll/')}
                        className='contactIcon'
                        sx={{fontSize: iconSize}}/>
                    <MailOutlineIcon
                        onClick={() => window.location.replace('mailto:luki.schroll@gmail.com')}
                        className='contactIcon'
                        sx={{fontSize: iconSize}}/>
                </div>
            </div>
        </div>
    );
}

export default Contact;