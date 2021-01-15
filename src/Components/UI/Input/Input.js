import React from 'react';
import './Input.css';

const Input = (props) => {

    let inputElement = null;

    switch(props.elementType){
        case('input'):
            inputElement = <input 
                                {...props.config} 
                                value={props.value} 
                                className="InputElement" 
                                onChange={props.changed} 
                                onFocus={props.focus} 
                                onBlur={props.blur}
                                />;
            break;
        case('textarea'):
            inputElement = <textarea 
                                {...props.config} 
                                value={props.value} 
                                rows="2" 
                                className="InputElement" 
                                onChange={props.changed} 
                                onFocus={props.focus}
                                onBlur={props.blur}
                                />;
            break;
        default:
            inputElement = <input 
                                {...props.config} 
                                value={props.value} 
                                className="InputElement" 
                                onChange={props.changed} 
                                onFocus={props.focus}
                                onBlur={props.blur}
                                />;
            break;
        
    }

    return(
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    );
};
export default Input;