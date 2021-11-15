import React from 'react';

const classes = 'toggle'

function Toggle(props) {
    return (
        <div className={classes}>
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
        </div>
    );
}

export default Toggle;