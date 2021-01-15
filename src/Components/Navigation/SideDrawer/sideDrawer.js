import React from 'react';
import './sideDrawer.css';
import Auxial from '../../../hoc/Auxial/Auxial';
import NavigationItems from '../NavigationItems/navigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';


const SideDrawer = (props) => {  
    let sideDrawerClasses = ["SideDrawer","Closed"];
    if(props.showSideDrawer){
        sideDrawerClasses = ["SideDrawer","Open"];
    }
return(
    <Auxial>
        <Backdrop show={props.showSideDrawer}/>
        <div className={sideDrawerClasses.join(' ')}>
            <nav>
                <NavigationItems 
                showSideDrawer = {props.showSideDrawer}
                goToSection = {props.goToSection}
                />
            </nav>
        </div>
    </Auxial>
);
};

export default SideDrawer;