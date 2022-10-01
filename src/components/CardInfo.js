import React from 'react';

export default function CardInfo(props) {
    console.log(props);

    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>{props.technologies}</p>
            <a href={props.sourceCode}>GitHub</a>
            <br/>
            <a href={props.livePreview}>Live Preview</a>
            <img src={props.image} alt={''}></img>
        </div>
    )
}