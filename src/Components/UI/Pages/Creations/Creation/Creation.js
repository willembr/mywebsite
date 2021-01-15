import React from 'react';
import './Creation.css';
import Auxial from '../../../../../hoc/Auxial/Auxial';

// VECTORS

const Creation = (props) => {

    let vector = "";
    // SETS THE POSITION OF THE CREATION
    let gridPart = "project" + props.positionNr;


    let creationClasses = ["Creation"];
    let creationDesktopTitleClasses = ["CreationDesktopTitle","Right"];
    let overlayClasses = ["Overlay","Right"]

    if(props.bigger){
        creationClasses = ["Creation", "Bigger"];
    }

    switch(props.vector){
        case('virus'):
            vector = "images/virus.png";
            break;
        case('tax'):
            vector = "images/tax.png";
            break;
        case('nerd'):
            vector = "images/nerd.png";
            creationDesktopTitleClasses = ["CreationDesktopTitle","Left"];
            overlayClasses = ["Overlay","Left"];
            break;
        case('shout'):
            vector = "images/shout.png";
            break;
        default:
            vector = "";
    }

    return(
        <Auxial>
        <div className={creationClasses.join(' ')} style={{gridArea:gridPart}} onClick={() => props.clicked(props.vector)}>
            <img className="Vector" alt="vector for creation" src={vector}/>
            { props.vector === "shout" ? <p className="ComingSoon">Mars 2021</p> : null}
        </div>
        <div className={creationDesktopTitleClasses.join(' ')} style={{gridArea:gridPart}}>
            <p className="Title">{props.title}</p>
        </div>
        <div className={overlayClasses.join(' ')} style={{gridArea:gridPart}}>
        </div>
        <div className="MovingBall" style={{gridArea:gridPart}}></div>
        <div className="BigBallGray" style={{gridArea:gridPart}}></div>
        </Auxial>
    );
};

export default Creation;