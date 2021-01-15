import React from 'react';
import './Percentage.css';

const Percentage = (props) => { 
    const strokeDashArrayValue = [props.percentage,"100"];
    const colorValue = ["circular-chart",props.color];

    let vBx = "-60 -6 150 50";
    let dPath = "M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831";
    let xPath = "-26";
    let skillTxtClasses = ["SkillTxt","Right"];
    let percentageClasses = ["Percentage", "Logic"]

    if(props.skillPart === "Logic")
    {
        vBx = "33 -6 150 50";
        dPath = "M56 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831";
        xPath = "105";
        skillTxtClasses = ["SkillTxt","Left"];
        percentageClasses = ["Percentage", "Creative"]
    }

    let circleClasses = ["circle"];
    if(props.fast){
        circleClasses = ["circle","Active"];
    }

    return (
    <div className={percentageClasses.join(' ')}>
        <svg viewBox={vBx} className={colorValue.join(' ')}>
             <path className="circle-bg"d={dPath}/>
             <path className={circleClasses.join(' ')} strokeDasharray={strokeDashArrayValue.join(' ')}  d={dPath}/>
       <text x={xPath} y="20.35" className="PercentageTxt">{props.percentage}%</text>
    </svg>
    <p className={skillTxtClasses.join(' ')}><strong>{props.skill}</strong></p>
    </div>
            );
    };

export default Percentage;