import React from 'react';
import Twit from './twitcard.js'
import './messages.css';

export default function Messages ({micros, loading, error, follow}) {

    if(loading) {return <div className="message-div">Loading...</div>};
    if(error) {return <div className="message-div">Error... {error}</div>};


    let followMicros = micros.allMicros.data.filter((micro) => follow.includes(micro.author._id));

    let listData = followMicros.map((micro) => <li key={micro._id}><Twit name={micro.author.nickName} message={micro.text} /></li>);

    return (
        <div className="message-div">
            <ul>
                {listData}
            </ul>
        </div>
    );
}