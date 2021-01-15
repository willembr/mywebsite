import React from 'react';
import './Percentages.css';
import Percentage from './Percentage/Percentage';

// SKILL OBJECTS DIVIDED IN CREATIVE AND LOGIC ARRAYS

const CREATIVE_PERCENTAGES = [
    {percentage:"80",skill:"Photography",color:"blue"},
    {percentage:"80",skill:"HTML / CSS",color:"green"},
    {percentage:"70",skill:"Photoshop",color:"red"},
    {percentage:"30",skill:"Illustrator",color:"orange"},
    {percentage:"20",skill:"Animate",color:"purple"},
];

const LOGIC_PERCENTAGES = [
    {percentage:"40",skill:"REACT",color:"blue"},
    {percentage:"70",skill:"Javascript",color:"blue"},
    {percentage:"20",skill:"JQuery",color:"blue"},
    {percentage:"30",skill:"PHP",color:"blue"}
];

const Percentages = (props) => {

    let Percentagesclasses = ["Percentages","Nonactive"];

    if( props.id === "Creative"){

        if(!props.skills.creativeActive)
        {
            if(props.animationFast)
            {
                Percentagesclasses = ["Percentages","Creative","ActiveFast"];
            }
            else{
                Percentagesclasses = ["Percentages","Creative","Active"];
            }
        }
    }
    if( props.id === "Logic"){

        if(!props.skills.logicActive)
        {
            if(props.animationFast)
            {
                Percentagesclasses = ["Percentages","Logic","ActiveFast"];
            }
            else{
                Percentagesclasses = ["Percentages","Logic","Active"];
            }
        }
    }
    return(
        <div className={Percentagesclasses.join(' ')}>

            {!props.skills.logicActive ? CREATIVE_PERCENTAGES.map( item => {
                return <Percentage
                    key = {item.skill}
                    percentage = {item.percentage}
                    skill = {item.skill}
                    color = {item.color}
                    skillPart = {props.id}
                    fast = {props.animationFast}
                />
            }) : null}

            {!props.skills.creativeActive ? LOGIC_PERCENTAGES.map( item => {
                return <Percentage
                    key = {item.skill}
                    percentage = {item.percentage}
                    skill = {item.skill}
                    color = {item.color}
                    skillPart = {props.id}
                    fast = {props.animationFast}
                />
            }) : null}

        </div>
    );
};

export default Percentages;