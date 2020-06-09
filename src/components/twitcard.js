import React from 'react';
import './twitcard.css';

export default function Twit ({name, message}) {

    return (
        <div>
            {name} says:
            <p>{message}</p>
        </div>
    );
}