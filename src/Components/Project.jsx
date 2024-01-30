import React from "react";
import { useInView } from "react-intersection-observer";
import "../Styles/project.scss";
import Button from "react-bootstrap/Button";
import gitlogo from "../Assets/github-logo.png";
import link from "../Assets/link.png";

function Project(props) {
    const ticons = props.icons;
    const { ref, inView } = useInView();

    return (
        <div className="project-outer">
            <div className="project" ref={ref}>
                <a href={props.link} className="project-link-desktop">
                    <img
                        className={
                            inView === true ? "project-image-active" : "project-image"
                        }
                        src={props.image}
                    />
                </a>

                <div className="project-info">
                    <h1>{props.title}</h1>
                    <div className="tech-icon-container">
                        <h4>Made With</h4>

                        <div className="icon-image-container">
                            {ticons.map((icon) => (
                                <img className="tech-icon" src={icon} alt="tech-icon" />
                            ))}
                        </div>
                    </div>
                    <a href={props.link} className="project-link-mobile">
                        <img
                            className={
                                inView === true ? "project-image-active" : "project-image"
                            }
                            src={props.image}
                        />
                    </a>
                    <p>{props.summary}</p>

                    <div className="link-container">
                        <Button
                            className="link-button"
                            href={props.codelink}
                            variant="outline-dark"
                        >
                            <img className="tech-icon" src={gitlogo} alt="tech-icon" />
                            View Code
                        </Button>
                        <Button
                            className="link-button"
                            href={props.codelink}
                            variant="outline-dark"
                        >
                            <img className="tech-icon" src={link} alt="tech-icon" />
                            Live Link
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
