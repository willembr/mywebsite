import React from 'react';
import FingerPrintBtn from '../../../../Navigation/FingerPrintBtn/FingerPrintBtn';
import LogicBrain_img from '../../../../../assets/images/left_brain.png';
import CreativeBrain_img from '../../../../../assets/images/right_brain.png';
import Percentages from '../Percentages/Percentages';
import './BrainPart.css';

const BrainPart = (props) => {

    let brainPartClasses = ["BrainPart"];
    let imgClasses = ["BrainPartIMG","Active"];
    let alt = "";
    let imgSource;
    let percentages = null;

    if( props.id === 'Logic' )
    {
        imgSource = LogicBrain_img;
        brainPartClasses = ["BrainPart","LeftSide"];
        alt = "The logic left part of the brain";
        if(!props.skills.logicActive)
        {
            imgClasses = ["BrainPartIMG", "NonActive"];
            percentages = <Percentages
                                id = { props.id }
                                skills = { props.skills }
                                // if props.navAni = true => means faster animation
                                animationFast = { props.brainBtn }
                          />
        }

    }
    else 
    {
        imgSource = CreativeBrain_img;
        brainPartClasses = ["BrainPart","RightSide"];
        alt = "The Creative right part of the brain";

        if(!props.skills.creativeActive)
        {
            imgClasses = ["BrainPartIMG", "NonActive"];
            percentages = <Percentages
                                id = { props.id }
                                skills = { props.skills }
                                // if props.navAni = true => means faster animation
                                animationFast = { props.brainBtn }
                          />
        }
    }

    return(
        <div className={brainPartClasses.join(' ')}>
                    <img alt={alt} className={imgClasses.join(' ')} src={imgSource}/>
                    <FingerPrintBtn
                        id = { props.id }
                        clicked = { props.clicked }
                        skills = { props.skills }
                        phone = { props.phone }
                        />
                    {percentages}
                </div>
    );
}

export default BrainPart;