import React,{Component} from 'react';
import Axios from 'axios';
import Section from '../Section/Section';


class Creations extends Component{
    state={
        creations:{},
        creationsClicked:{
            virus:false,
            tax:false,
            shout:false,
            nerd:false
        }
    }

    componentDidMount(){
        if(Object.keys(this.state.creations).length === 0){
            Axios.get('https://creations-wb.firebaseio.com/creations.json')
                    .then(response => {
                        console.log(response);
                        this.setState({
                            creations:response.data
                        });
                    })
                    .catch(error => {
                        console.log(error);
                    });
        }
    }

    creationClickedHandler = (id) => {
        const creationUpdate = {...this.state.creationsClicked};
        creationUpdate[id] = true;

        this.setState({
            creationsClicked:creationUpdate
        });

    }


    creationCloseHandler = (refer) => {
        const creationClose = {...this.state.creationsClicked};
        creationClose[refer] = false;

        this.setState({
            creationsClicked:creationClose
        })
    }

    render(){

        return(
                this.state.creations ? <Section
                    id = "Creations"
                    creations = {this.state.creations}
                    creationsClicked = {this.state.creationsClicked}
                    clicked = { this.creationClickedHandler}
                    close = { this.creationCloseHandler }
                /> : null 
        );
    }
};

export default Creations;