import React from 'react';


export default function About() {
    return (
    <div className="container">
        <h1>About Me</h1>
        <img src={process.env.PUBLIC_URL + '/assets/images/headshot.png'} alt={'headshot'} className="img-fluid rounded-circle"></img>
        <br />
        <div className="container col-md-7 text-break">
            <h4>Hi I'm Mackenzie</h4>
            <p>
                I am a full stack developer based in Sydney, Australia. With a focus on attention to detail, creating polished and efficient code and working with people, my passion lies in product management in the technology space.
            </p>
            <p>
                I have a certificate in full stack develop from the University of Sydney Coding Bootcamp. 
            </p>
        </div>
    </div>
    );
}