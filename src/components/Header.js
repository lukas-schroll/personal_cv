import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


const classes = 'header flexContainer'
const element = <FontAwesomeIcon icon={faDownload} />

function Header(props) {
    return (
        <div className={classes}>
            <p className='headerName'>Lukas Schroll</p>
            <div className='btnGroup'>
                <Link className='cvLink' to="/cv.pdf" target="_blank"  download>CV {element}</Link>
            </div>
        </div>
    );
}

export default Header;