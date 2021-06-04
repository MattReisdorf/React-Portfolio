import React from 'react';
import '../css/bio.css';

export default function Bio() {
    return (
        <div className = 'container' id = 'bio'>
            <div className = 'row row-margin'>
                <div className = 'col-sm-12 col-md-4'>
                    <div className = 'headshot-container'>
                        <img id = 'headshot' src = './files/images/headshot-cropped.png' alt = 'headshot' />
                        <div className = 'socials-container'>
                            <a href = 'https://github.com/MattReisdorf' target = '_blank'>
                                <img id = 'github-img' src = './files/images/github.png' />
                            </a>
                            <a href = 'https://www.linkedin.com/in/matthew-reisdorf/' target = '_blank'>
                                <img id = 'linked-in-img' src = './files/images/linkedin.png' />
                            </a>
                            <a href = 'https://soundcloud.com/matt-reisdorf' target = '_blank'>
                                <img id = 'sc-img' src = './files/images/soundcloud.png' />
                            </a>
                            {/* <a href = 'https://steamcommunity.com/profiles/76561198116700731' target = '_blank'>
                                <img id = 'steam-img' src = './files/images/steam.png' />
                            </a>
                            <a href = 'mailto:mreisdorf9717@gmail.com'>
                                <img id = 'email-img' src = './files/images/email.png' />
                            </a> */}
                        </div>
                    </div>
                </div>
                <div className = 'col-sm-12 col-md-8'>
                    <div className = 'row row-margin'>
                        <div className = 'col-sm-4'>
                            <p id = 'biography-title'>Biography</p>
                        </div>
                    </div>
                    <div className = 'row'>
                        <div className = 'col-sm-12'>
                            <p id = 'biography-paragraph'>
                                I am a current student of the Full Stack Development Bootcamp at Northwestern University graduating in June 2021,
                                as well as an analyst and developer at Maven Wave through their IGNITE Development Program. Prior to this, 
                                I received a Bachelor of Applied Science in Physics with a concentration in digital electronics, as well as
                                a mathematics minor, from Appalachian State University.
                            </p>
                            <p id = 'biography-paragraph'>
                                Eventually, I want to leverage my physics and mathematics background to move into the machine learning field.
                            </p>
                            <p id = 'biography-paragraph'>
                                Outside of my current work and studies, I spend my time making music with a couple local producers,
                                riding any kind of board I can get my hands (or feet) on, and exploring the urban jungle of Chicago, IL. 
                            </p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}