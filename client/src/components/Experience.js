import React from 'react';
import '../css/experience.css';

export default function Experience() {
    return (
        <div className = 'container'>
            <div className = 'row' id = 'experience'>
                <div className = 'col-sm-12 col-md-12'>
                    <p className = 'centered' id = 'experience-title'>Skills</p>
                </div>
            </div>
            <div className = 'row row-margin-2'>
                <div className = 'col-sm-12 col-md-4'>
                    <div className = 'centered lang-container'>
                        <img src = './files/images/python.png' />
                        <p className = 'lang-text'>Python</p>
                        <p id = 'python-tech'>Flask, Kivy, NumPy, Matplotlib</p>
                    </div>
                </div>
                <div className = 'col-sm-12 col-md-4'>
                    <div className = 'centered lang-container'>
                        <img src = './files/images/js.png' />
                        <p className = 'lang-text'>JavaScript</p>
                        <p id = 'js-tech'>Node.js, jQuery, Express.js, Handlebars</p>
                    </div>
                </div>
                <div className = 'col-sm-12 col-md-4'>
                    <div className = 'centered' id = 'lang-container'>
                        <img src = './files/images/db.png' />
                        <p className = 'lang-text'>Databases</p>
                        <p id = 'db-tech'>MySQL, MongoDB, Azure SQL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}