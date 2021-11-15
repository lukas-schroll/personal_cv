import React from 'react';
import Toggle from "./Toggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDownload} from "@fortawesome/free-solid-svg-icons";


const classes = 'header flexContainer'
const element = <FontAwesomeIcon icon={faDownload} />

function Header(props) {
    return (
        <div className={classes}>
            <p className='headerName'>Lukas Schroll</p>
            <div className='btnGroup'>
                <button className='btn'> CV {element}</button>
                <Toggle/>
            </div>
        </div>
    );
}

export default Header;