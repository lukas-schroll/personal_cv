import React from 'react';
import LinearDeterminate from "./LinearDeterminante";


function Language({language}) {
    return (
        <div className='languageItem'>
            <div className='barDescription'>
                <p>{language.textEnglish} {language.country_symbol}</p>
                <p>{language.proficiency_description_english}</p>
            </div>
            <LinearDeterminate proficiency={language.proficiency * 100}/>
        </div>
    );
}

export default Language;