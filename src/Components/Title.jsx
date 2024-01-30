import React, { forwardRef, useRef } from "react";

const Title = ({ resultRef }) => {
    const clickHandler = (e) => {
        e.preventDefault();
        resultRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <div className="title-container">
                <h1 className="heading">Joe Abele</h1>
                <h4 className="sub-heading">Web Developer</h4>

                <div class="view-work-button" onClick={clickHandler}>
                    View My Projects
                </div>
            </div>
        </div>
    );
};

export default Title;
