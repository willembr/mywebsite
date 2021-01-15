import React from 'react';
import './drawerToggle.css';
import Auxial from '../../../../hoc/Auxial/Auxial';

const drawerToggle = (props) => {
    let drawerToggleClasses = ["DrawerToggle"];
    let menuTriggerClasses = ["Bt-menu-trigger"];
    let circleMenuClasses = ["CircleMenu"];
    if(props.showSideDrawer){
        drawerToggleClasses = ["DrawerToggle", "menu-open"];
        menuTriggerClasses = ["Bt-menu-trigger","Bt-menu-open"];
        circleMenuClasses = ["CircleMenu","BorderCircleOpen"];
    }
    else{
        if(props.showSideDrawerClicked)
        {
           circleMenuClasses = ["CircleMenu","BorderCircleClose"];
        }
    }
    return(
        <Auxial>
    <div className={drawerToggleClasses.join(' ')} onClick={props.toggle}>
        <div className={menuTriggerClasses.join(' ')}>
            <span></span>
        </div>
        <svg className="CircleSvg" height="70" width="70">
            <circle className={circleMenuClasses.join(' ')} cx="35" cy="35" r="30" fill="gray" opacity="0.4"/>
        </svg>
        <svg className="CircleSvg2" height="70" width="70">
            <circle className={circleMenuClasses.join(' ')} cx="35" cy="35" r="30" fill="none"/>
        </svg>
    </div>
    </Auxial>
)};

export default drawerToggle;