import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

function Contact(props) {
    return (
        <div className='contactContainer'>
            <div className='contactSubContainer'>
                <h2 className='contactHeader'>Contact</h2>
                <div className='contactIconContainer'>
                    <FontAwesomeIcon className='contactIcon' icon={faGithub} />
                    <FontAwesomeIcon className='contactIcon' icon={faLinkedin} />
                    <FontAwesomeIcon className='contactIcon' icon={faEnvelope}/>
                </div>
            </div>
        </div>

    );
}

export default Contact;