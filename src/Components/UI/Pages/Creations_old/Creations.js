import React from 'react';
import Creation from './Creation/Creation';
import './Creations.css';

const Creations = (props) => {
    let creations;
    if(props.creations){
        creations = Object.keys(props.creations)
        .map(creKey => {
            return <Creation
                            key = { creKey }
                            vector = { props.creations[creKey].vector }
                            title = { props.creations[creKey].titel }
                            explanation = { props.creations[creKey].explanation }
                            clicked = {props.clicked}
                            active = {props.creationsClicked[props.creations[creKey].vector]}
                            close = {props.close}
                            images = {props.creations[creKey].images}
                            />
        })
    }
    return(
        <div className="Creations">
            {creations}
        </div>
    );
};

export default Creations;
