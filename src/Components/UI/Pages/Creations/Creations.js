import React from 'react';
import Auxial from '../../../../hoc/Auxial/Auxial';
import Creation from './Creation/Creation';
import './Creations.css';

const CREATION_POSITIONS = {
    4:[2,6,8,4],
    5:[1,3,5,7,9],
    6:[1,3,5,7,9,11],
    7:[1,3,4,5,6,7,9],
    8:[1,2,3,4,5,6,7,9],
    9:[1,2,3,4,5,6,7,8,9],
    10:[1,2,3,4,5,6,7,8,9,10],
    11:[1,2,3,4,5,6,7,8,9,10,11],
    12:[1,2,3,4,5,6,7,8,9,10,11,12],
};
const Creations = (props) => {

    let content = null;
    let CreationsClasses = ["Creations", "Normal"];

    if(props.creations)
    {
    const creationsLength = Object.keys(props.creations).length;

    let iterationNr = 0;
    let positionNr;
    const bigger = creationsLength <= 5;

     content = Object.keys(props.creations).map( creation => {
        positionNr = CREATION_POSITIONS[creationsLength][iterationNr];
        iterationNr++;
        return <Creation
                    key = {creation}
                    vector = { props.creations[creation].vector }
                    positionNr = {positionNr}
                    bigger = { bigger }
                    clicked = { () => props.clicked(props.creations[creation].vector)}
                    title = {props.creations[creation].titel}
                 />
    }) 

    if( bigger ){
        CreationsClasses = ["Creations", "Bigger"];
    }

    }
    return(
        <Auxial>
            <div className="StartingBall"></div>        
            <div className={CreationsClasses.join(' ')}>
                    {content}
            <div className="CreationTitleContainer">
                <h1 className="CreationTitle">...</h1>
            </div>
            </div>
    </Auxial>
    );
};

export default Creations;