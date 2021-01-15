import React, {Component} from 'react';
import Home from '../../Components/UI/Pages/Home/Home';
import Skills from '../../Components/UI/Pages/Skills2/Skills';
import './Section.css';
import Passions from '../../Components/UI/Pages/Passions/Passions';
import Contact from '../../Components/UI/Pages/Contact/Contact';
import Creations from '../../Components/UI/Pages/Creations/Creations';

class Section extends Component{
    state = {
        skills:{
            logicActive:true,
            creativeActive:true,
            brainBtn:true,
            initial:true
        }
    }

    componentDidUpdate(){ 
        this.resetSkills();
    }

    resetSkills = () => {
        if(!this.props.skillsActive){
            if(!this.state.skills.logicActive || !this.state.skills.creativeActive || !this.state.skills.brainBtn){
                const updatedSkills = { ...this.state.skills};
                updatedSkills["logicActive"] = true;
                updatedSkills["creativeActive"] = true;
                updatedSkills["brainBtn"] = true;
                updatedSkills["initial"] = true;

                this.setState({
                    skills:updatedSkills
                });
        }
        }
    }

    showSkills = (clickedBtn,hideOther,btn) => {
        let updatedSkills = { ...this.state.skills };
        updatedSkills[hideOther] = false;
        updatedSkills[clickedBtn] = true;
        updatedSkills["brainBtn"] = btn;
        updatedSkills["initial"] = false;

        this.setState({
            skills:updatedSkills,
        });
        
    }

    render(){
        let phone = false;
        if(window.innerWidth < 450)
        {
            phone = true;
        }
        return(
            <section id={this.props.id} className="SectionPage">
                {this.props.id === "Home" ? <Home phone={phone} /> : null}
                {this.props.id === "Skills" ? 
                    <Skills 
                        skills = {this.state.skills}
                        clicked = {this.showSkills}
                        active = {this.props.skillsActive}
                        phone = {phone}
                    /> : null}
                {this.props.id === "Creations" ? 
                <Creations
                    creations = {this.props.creations}
                    clicked = {this.props.clicked}
                    /> : null}
                {this.props.id === "Passions" ? <Passions/> : null}
                {this.props.id === "Contact" ? 
                <Contact 
                    formElements = {this.props.formElements} 
                    formIsValid = {this.props.formIsValid}
                    formIsSend = {this.props.formIsSend}
                    isLoading = {this.props.isLoading}
                    inputChange = {this.props.inputChange}
                    contactMe = {this.props.contactMe}
                    focus = {this.props.focus}
                    blur = {this.props.blur}
                    /> : null}
            </section>
        );
    };
};

export default Section;