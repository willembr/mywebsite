import React,{Component} from 'react';
import './Layout.css';

import Auxial from '../Auxial/Auxial';
import SideDrawer from '../../Components/Navigation/SideDrawer/sideDrawer';
import DrawerToggle from '../../Components/Navigation/SideDrawer/DrawerToggle/drawerToggle';


class Layout extends Component{
    state={
        showSideDrawer:false,
        showSideDrawerClicked:false
    }

    toggleSideDrawerHandler = () => {
        this.setState( prevState => (
            {
                showSideDrawer:!prevState.showSideDrawer,
                showSideDrawerClicked:true
            }));
    }

    goToSectionHandler = () => {
        this.setState({
            showSideDrawer:false,
            showSideDrawerClicked:false
        });
    }

    render(){
        return(
            <Auxial>
                <DrawerToggle
                    toggle = {this.toggleSideDrawerHandler}
                    showSideDrawer = {this.state.showSideDrawer}
                    showSideDrawerClicked = {this.state.showSideDrawerClicked}
                />
                 <SideDrawer 
                showSideDrawer={this.state.showSideDrawer}
                 goToSection = {this.goToSectionHandler}
                />
                <main className="Content">
                    {this.props.children}
                </main>
            </Auxial>
        );
    }
}

export default Layout;