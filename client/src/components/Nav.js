import React from 'react';
import '../css/nav.css';

export default function Nav() {
    return (
        <nav className = 'sticky-top my-nav-css'>
            <h2 id = 'matt'>Matt Reisdorf</h2>
            <ul className = 'nav justify-content-end my-nav-list-css'>
                <li className = 'nav-item'>
                    <a className = 'nav-link nav-links-css' href = '#bio'>Bio</a>
                </li>
                <li className = 'nav-item'>
                    <a className = 'nav-link nav-links-css' href = '#experience'>Skills</a>
                </li>
                <li className = 'nav-item'>
                    <a className = 'nav-link nav-links-css' href = '#projects'>Projects</a>
                </li>
                <li className = 'nav-item'>
                    <a className = 'nav-link nav-links-css' href = '/files/Resume.pdf'>Resume</a>
                </li>
            </ul>
        </nav>
    )
}