import React from 'react'
import reactlogo from "../Assets/reactlogo.png";
import jslogo from "../Assets/jslogo.png";
import csslogo from "../Assets/csslogo.png";
import sasslogo from "../Assets/sasslogo.png";
import htmllogo from "../Assets/htmlicon.png";
import npmlogo from "../Assets/npm.svg";
import nodeicon from "../Assets/node-js.svg";
import giticon from "../Assets/git.svg";
import dockericon from "../Assets/docker.svg";
import angularlogo from "../Assets/angular.svg";
import drupallogo from "../Assets/drupal-5.svg";
import wordpresslogo from "../Assets/wordpress-icon-1.svg";
import "../Styles/skills.scss";



function Skills() {
    const icons =
        [{ icon: htmllogo, name: "html" },
        { icon: csslogo, name: "CSS" },
        { icon: jslogo, name: "Javascript" },
        { icon: reactlogo, name: "React" },
        { icon: angularlogo, name: "Angular" },
        { icon: sasslogo, name: "Sass" },
        { icon: npmlogo, name: "NPM" },
        { icon: nodeicon, name: "Node" },
        { icon: wordpresslogo, name: "Wordpress" },
        { icon: drupallogo, name: "Drupal" },
        { icon: giticon, name: "Git" },
        { icon: dockericon, name: "Docker" }
        ];

    return (
        <div className='skills-container'>
            <h2>My Skills</h2>
            <div className='skills-icon-container'>
                {icons.map((icon) => (
                    <div className='skill-box'>
                        <img className='tech-icon' src={icon.icon} />
                        <p>{icon.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
