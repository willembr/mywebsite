import React from 'react';
import './navigationItems.css';
import NavigationItem from './NavigationItem/navigationItem';

const sections = ["Home", "Skills" , "Creations" , "Passions" , "Contact"];

const NavigationItems = (props) => (
    <ul className="NavigationItems">
        { sections.map( section => {
            return <NavigationItem
            key={section}
            showSideDrawer={props.showSideDrawer}
            clicked = {() => props.goToSection(section)}
            >
            {section}    
            </NavigationItem>
        })}
    </ul>
);

export default NavigationItems;
