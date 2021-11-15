import React from 'react';
import Language from "./Language";

function Languages({languages}) {
    return (
        <div className='languageContainer'>
            <div className='languageSubContainer'>
                <h2 className='containerHeader'>LANGUAGES</h2>
                {
                    languages.map((language, index) => (
                        <Language key={index} language={language}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Languages;