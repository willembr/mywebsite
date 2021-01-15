import React from 'react';
import './navigationItem.css';

    const whiteSections = ["skills","passions"];
    const graySections = ["home","creations"];
    const blackSections = ["contact"];

const navigationItem = (props) => {
    let navigationItemClasses = ["NavigationItem"];
    let navCircleClasses = ["NavigationItemCircle"];
    let navAnchorClasses = ["NavigationAnchor"]

    if(props.sectionsActive){

        Object.keys(props.sectionsActive).map( section => {
                if( props.sectionsActive[section]){
                    // SEE IF IT WE NEED A WHITE MENU
                    for(let i = 0; i < whiteSections.length;i++) {
                            if(section === whiteSections[i]){
                                  navigationItemClasses = ["NavigationItem","White"];
                                  navCircleClasses = ["NavigationItemCircle","WhiteCircle"];
                                  navAnchorClasses = ["NavigationAnchor","White"];
                            }
                    }
                    // SEE IF IT WE NEED A GRAY MENU
                    for(let i = 0; i < graySections.length;i++) {
                        if(section === graySections[i]){
                              navigationItemClasses = ["NavigationItem","Gray"];
                                navCircleClasses = ["NavigationItemCircle","GrayCircle"];
                              navAnchorClasses = ["NavigationAnchor","Gray"];
                        }
                    }
                    // SEE IF IT WE NEED A BLACK MENU
                    for(let i = 0; i < blackSections.length;i++) {
                        if(section === blackSections[i]){
                                navigationItemClasses = ["NavigationItem","Black"];
                                navCircleClasses = ["NavigationItemCircle","BlackCircle"];
                                navAnchorClasses = ["NavigationAnchor","Black"];
                            }
                    }
                    // MAKE A BIGGER CIRCLE WHEN ON PAGE
                    if(props.id.toLowerCase() === section){

                        navCircleClasses.push("Selected");
                    }
                }
                return section;
        });
        
    }
    
    return(
        <li 
        id = {"Nav" + props.id}
        className={ navigationItemClasses.join(' ')} 
        style={{transform:"matrix(1,0,0,1,0,0)"}}
        data-menuanchor={props.children}
        >   
     {props.mainMenu ? 
     <a href={"#an_" + props.children} className={navAnchorClasses.join(' ')}  style={{transform:"matrix(1,0,0,1,0,0"}}> <div className={navCircleClasses.join(' ')} style={{transform:"matrix(1,0,0,1,0,0"}}>
     </div><em>{props.children}</em></a> : 
            <a onClick={props.clicked} href={"#an_" + props.children} style={{transform:"matrix(1,0,0,1,0,0"}}>{props.children}</a>
       }
     
</li>

)};

export default navigationItem;