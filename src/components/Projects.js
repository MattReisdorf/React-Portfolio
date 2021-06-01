import React from 'react';
import '../css/projects.css';

export default function Projects() {
    return (
        <div className = 'container'>
            <div className = 'row' id = 'projects'>
                <div className = 'col-sm-12 col-md-12'>
                    <p className = 'centered' id = 'projects-title'>Projects</p>
                </div>
            </div>

            <div className = 'row row-margin-2'>
                <div className = 'col-sm-12 col-md-4'>
                    <div className = 'centered proj-container'>
                        <div className = 'card card-background'>
                            <p className = 'centered' id = 'scaled'>Scaled</p>
                            <a href = 'https://sleepy-falls-53764.herokuapp.com/' target = '_blank'>
                                <img src = './files/images/scaled.png' />
                            </a>
                            <div className = 'card-body'>
                                <p className = 'card-text'>
                                    Resource website for users to
                                    create and practice lessons based on musical scales.
                                    Users can create an account, and their lessons will be
                                    isolated from all other user's lessons.
                                </p>
                                <p className = 'card-text'>
                                    Utilizes a pitch detection algorithm to move the user through their lesson. 
                                    Works best with an audio interface to isolate the input, but any device microphone will suffice.
                                </p>
                                <p className = 'card-text'>
                                    The repository for this project can be found
                                    <a id = 'repo-link' href = 'https://github.com/MattReisdorf/Project2-Music-Lessons' target = '_blank'>
                                    here.
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'col-sm-12 col-md-4'>
                    <div className = 'centered proj-container'>
                        <div className = 'card card-background'>
                            <p className = 'centered' id = 'reddit'>Translate Bot</p>
                            <a href = 'https://github.com/MattReisdorf/r-France-Post-Title-Translator' target = '_blank'>
                                <img src = './files/images/reddit.png' />
                            </a>
                            <div className = 'card-body'>
                                <p className = 'card-text' id = 'python'>
                                    Command line python script designed to translate any post or comment on reddit. 
                                    Currently defaults to r/France and English results, but any subreddit or language can be targeted
                                    by altering the parameters of the reddit query and/or translator API.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'col-sm-12 col-md-4'>
                    <div className = 'centered proj-container'>
                        <div className = 'card card-background'>
                            <p className = 'centered' id = 'unify'>Unify</p>
                            <a href = 'https://vygoth.github.io/Unify/' target = '_blank'>
                                <img src = './files/images/Unify.png' />
                            </a>
                            <div className = 'card-body'>
                                <p className = 'card-text' id = 'unify-top'>
                                    Proof of concept website to connect
                                    workers with local unions in the Chicago area.
                                    Utilizes Google Maps API to show union locations
                                    and a webscraper to grab relevant news articles.
                                </p>
                                <p className = 'card-text' id = 'unify-bottom'>
                                    The website is live, but the APIs are currently
                                    disconnected to prevent over-use charges.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}