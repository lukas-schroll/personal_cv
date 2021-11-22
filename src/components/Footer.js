import React from 'react';


function Footer(props) {

    var today = new Date()

    return (
        <div className='footer'>
            <p>©{today.getFullYear()} Lukas Schroll</p>
        </div>
    );
}

export default Footer;