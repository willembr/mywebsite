import React from 'react';
import './FingerPrintBtn.css';
import Auxial from '../../../hoc/Auxial/Auxial';

import ArrowSkills_img from '../../../assets/images/arrow_skills.png';

const FingerPrintBtn = (props) => {
    let fingerPrintBtnClasses = ["FingerPrintBtn"];
    let navigationTextClasses = [""];
    let arrowImgClasses = ["ArrowImg"];
    let hideOther,clickedBtn = "";
    let firstParam,secondParam,firstAnimation,secondAnimation = "";

    if( props.id === "Logic" && props.skills.brainBtn)
    {
        firstParam = "FingerPrintBtn";
        secondParam = "Left";
        firstAnimation = "Disappear"
        secondAnimation = "NavLeft";
        clickedBtn = "logicActive";
        hideOther = "creativeActive";
    }
     else if( props.id === "Creative" && props.skills.brainBtn)
    {
        firstParam = "FingerPrintBtn";
        secondParam = "Right";
        firstAnimation = "NavRight";
        secondAnimation = "Disappear";
        clickedBtn = "creativeActive";
        hideOther = "logicActive";
    }
    else if( props.id === "Logic" && !props.skills.brainBtn)
    {
        firstParam = "FingerPrintBtn";
        secondParam = "Disappear";
    }
     else if( props.id === "Creative" && !props.skills.brainBtn)
    {
        firstParam = "FingerPrintBtn";
        secondParam = "Disappear";
    }

    if(!props.phone && props.skills.initial)
    {
        if(props.id === "Logic"){
            secondParam = "LeftShow";
        }
        else {
            secondParam = "RightShow";
        }
    }

    if( props.id === "Navigation")
    {
        firstParam = "Navigation"
        if(props.skills.logicActive && props.skills.creativeActive){secondParam = "NonActive";}
        else if(props.skills.brainBtn){secondParam = "Active";}
        else{secondParam = "ActiveAfter";}

        if(!props.skills.creativeActive){
            clickedBtn = "creativeActive";
            hideOther = "logicActive";
        }
        if(!props.skills.logicActive)
        {
            clickedBtn = "logicActive";
            hideOther = "creativeActive";
        }
         firstAnimation = "";
         secondAnimation = "";
         if(props.skills.brainBtn){ 
            if(!props.skills.logicActive)
            {
                navigationTextClasses = ["NavigationText","Show","Logic"]; 
            }
             else{
                navigationTextClasses = ["NavigationText","Show"]; 
             }
             arrowImgClasses = ["ArrowImg","Show"];
            }
         else { 
            if(!props.skills.logicActive)
            {
                navigationTextClasses = ["NavigationText","ShowAfter","Logic"]; 
            }
             else{
                navigationTextClasses = ["NavigationText","ShowAfter"]; 
             }
             arrowImgClasses = ["ArrowImg","ShowAfter"];
            }    
    }   

    if(props.skills.logicActive && props.skills.creativeActive)
        {
            fingerPrintBtnClasses = [firstParam,secondParam];
        }
        if(props.skills.logicActive && !props.skills.creativeActive)
        {
            fingerPrintBtnClasses = [firstParam,secondParam,firstAnimation];
        }
        if(!props.skills.logicActive && props.skills.creativeActive)
        {
            fingerPrintBtnClasses = [firstParam,secondParam,secondAnimation];
        }

    return(
        <Auxial>
        {props.id !== "Navigation" ? 
        <div 
            id = {props.id}
            className = {fingerPrintBtnClasses.join(' ')}
            onClick = {() => props.clicked(clickedBtn,hideOther,true)}
        >
        </div>
         :
         <div key={props.skills.logicActive ? "Creative" : "Logic"} className={fingerPrintBtnClasses.join(' ')}><div  
        className="Toggle"
        onClick = {() => props.clicked(clickedBtn,hideOther,false)}
        >
                    <div className="FingerPrintBtnNav"></div>
            </div>
            {props.skills.logicActive ? <p key="Creative" className={navigationTextClasses.join(' ')}>Creative</p> 
            : <p key="Logic" className={navigationTextClasses.join(' ')}>Logic</p>  }
            <img className={arrowImgClasses.join(' ')}  src={ArrowSkills_img} alt="navigation arrow"/>
            </div>
         }
        </Auxial>
    );
}
export default FingerPrintBtn;