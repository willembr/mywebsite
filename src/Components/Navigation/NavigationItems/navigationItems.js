import React from 'react';
import './navigationItems.css';
import NavigationItem from './NavigationItem/navigationItem';

const sections = ["Home", "Skills" , "Creations" , "Passions" , "Contact"];

const navigationItems = (props) => (
    <ul className="NavigationItems">
        { sections.map( section => {
            return <NavigationItem
            key={section}
            id={section}
            showSideDrawer={props.showSideDrawer}
            clicked = {() => props.goToSection()}
            mainMenu = {props.mainMenu}
            sectionsActive = {props.sectionsActive}
            >
            {section}    
            </NavigationItem>
        })}
    </ul>
);

export default navigationItems;
