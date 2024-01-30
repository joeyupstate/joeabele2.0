import React, { useState, useRef } from "react";
import Project from "./Project";
import Palmfinderimg from "../Assets/palmfinderpic.jpg";
import Languageimg from "../Assets/translate.png";
import Cryptoimg from "../Assets/crypto.png";
import Weatherimg from "../Assets/weather.png";
import Calcimg from "../Assets/reacttip.png";
import reactlogo from "../Assets/reactlogo.png";
import jslogo from "../Assets/jslogo.png";
import csslogo from "../Assets/csslogo.png";
import sasslogo from "../Assets/sasslogo.png";
import htmllogo from "../Assets/htmllogo.png"
import Data from "../Data.js"
import { forwardRef } from "react";




const ProjectContainer = forwardRef((props, ref) => {

    return (

        <div className="project-container" ref={ref}  >

            <Project title="Palmfinder"
                image={Palmfinderimg}
                summary={Data[0].summaries[0].palmSummary}
                link={Data[0].links[0].palmLink}
                codelink={Data[0].codelinks[0].palmCode}
                icons={[reactlogo, htmllogo, jslogo, sasslogo]}
            />

            <Project
                title="Language Translator"
                image={Languageimg}
                summary={Data[0].summaries[0].languageSummary}
                link={Data[0].links[0].languageLink}
                codelink={Data[0].codelinks[0].languageCode}
                icons={[htmllogo, jslogo, csslogo]} />


            <Project
                title="Crypto Converter"
                image={Cryptoimg}
                summary={Data[0].summaries[0].cryptoSummary}
                link={Data[0].links[0].cryptoLink}
                codelink={Data[0].codelinks[0].crytpoCode}
                icons={[htmllogo, jslogo, csslogo]} />



            <Project
                title="React Tip Calculator"
                image={Calcimg}
                summary={Data[0].summaries[0].calcSummary}
                link={Data[0].links[0].calcLink}
                codelink={Data[0].codelinks[0].calcCode}
                icons={[reactlogo, htmllogo, jslogo, sasslogo]} />


            <Project
                title="Weather App"
                image={Weatherimg}
                summary={Data[0].summaries[0].weatherSummary}
                link={Data[0].links[0].weatherLink}
                codelink={Data[0].codelinks[0].weatherCode}
                icons={[htmllogo, jslogo, sasslogo]} />


        </div>
    );
});

export default ProjectContainer;
