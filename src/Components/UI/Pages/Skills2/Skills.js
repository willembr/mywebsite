import React from 'react';
import './Skills.css';
import Auxial from '../../../../hoc/Auxial/Auxial';
import BrainPart from './Brainpart/BrainPart';
import CurvedText from './CurvedText/CurvedText';
import FingerPrintBtn from '../../../Navigation/FingerPrintBtn/FingerPrintBtn';


const Skills = (props) => {
    return(
        <Auxial>
            <article className="LogicLeftWords">
                {/* <ul className="BrainNames">
                    <li><h1>Analysis</h1></li>
                    <li><h1>Logic</h1></li>
                    <li><h1>Idea</h1></li>
                    <li><h1>Math</h1></li>
                    <li><h1>Training</h1></li>
                </ul>              */}
            </article>
            <article className="SkillsBrain">
                {/* Navigation for smartphone/tablet */}
                {props.active ? <FingerPrintBtn
                    id = "Navigation"
                    clicked = {props.clicked}
                    skills = {props.skills}
                /> : null }
                <div className = "BrainFull">
                    <BrainPart
                         id = "Logic"
                         skills = {props.skills}    
                         clicked = {props.clicked}
                         phone = {props.phone}
                    />
                    <BrainPart
                        id = "Creative"
                        skills = {props.skills}
                        clicked = {props.clicked}
                        phone = {props.phone}
                    /> 
                    <CurvedText
                        skills = {props.skills}
                    />  
                </div>         
            </article>
            <article className="CreativeRightWords">
                {/* <ul className="BrainNames">
                    <li><h1>Creativity</h1></li>
                    <li><h1>Intuition</h1></li>
                    <li><h1>Arts</h1></li>
                    <li><h1>Feeling</h1></li>
                    <li><h1>Imagination</h1></li>
                </ul>  */}
            </article>
        </Auxial>
    );
};

export default Skills;