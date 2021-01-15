import React from 'react';
import './toolbar.css';
import NavigationItems from '../NavigationItems/navigationItems';

const Toolbar = (props) =>{

    let toolbarClasses = ["Toolbar"];
    if(props.sections){

        if(!props.sections["Home"]){
            toolbarClasses = ["ToolbarFixed"];
        }
    
    }

    return(
        <div className={toolbarClasses.join(' ')}>
            <nav className="DesktopOnly">
                <NavigationItems mainMenu sectionsActive={props.sections}/>
            </nav>
        </div> 
            )};

export default Toolbar;