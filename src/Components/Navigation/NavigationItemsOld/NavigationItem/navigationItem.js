import React from 'react';
import './navigationItem.css';

const navigationItem = (props) => {
    let navigationItemClasses = ["NavigationItem"];
    if(!props.showSideDrawer){
        navigationItemClasses = ["NavigationItem", "Close"];
    }
    return(
        <li className={ navigationItemClasses.join(' ')} onClick={props.clicked}>
            <span>{props.children}</span>
    </li>
)};

export default navigationItem;