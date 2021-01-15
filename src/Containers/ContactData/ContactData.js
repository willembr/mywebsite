import React,{Component} from 'react';
import Section from '../Section/Section';
import Axios from 'axios';

class ContactData extends Component{
    state = {
            contactForm : {
                name: {
                    elementType:'input',
                    elementConfig: {
                        type:'text',
                        placeholder:''
                    },
                    value:'',
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false,
                    label: "Name",
                    error: "Tell me who you are"
                },
                phone: {
                    elementType:'input',
                    elementConfig: {
                        type:'tel',
                        placeholder:''
                    },
                    value:'',
                    valid:false,
                    touched:false,
                    label: "Phone"
                },
                email: {
                    elementType:'input',
                    elementConfig: {
                        type:'email',
                        placeholder:''
                    },
                    value:'',
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false,
                    label:"Email",
                    error:"Leave this empty and I'm unable to contact you"
                  },
                message: {
                    elementType:'textarea',
                    elementConfig: {
                        type:'email',
                        placeholder:''
                    },
                    value:'',
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false,
                    label: 'What can I do for you?',
                    error: "Please,say something"
                  }
            },
            formIsValid:false,
            formIsSend:false,
            isLoading:false
    }

    checkValidation(value,rules){
        let isValid = true;

        if(!rules)
        {
            return true;
        }
        if(rules.required)
        {
            isValid = value !== '' && isValid;
        }
        return isValid;
    }

    inputChangeHandler = (event,identifier) => {
        const updatedContactForm = { ...this.state.contactForm};
        const updatedElement = {
            ...updatedContactForm[identifier]
        };

        updatedElement.value = event.target.value;
        updatedElement.valid = this.checkValidation(updatedElement.value,updatedElement.validation);
        updatedElement.touched = true;

        updatedContactForm[identifier] = updatedElement;

        let updatedFormIsValid = true;

        for(identifier in updatedContactForm)
        {
            updatedFormIsValid = updatedContactForm[identifier].valid && updatedFormIsValid;
        

        this.setState({
             contactForm:updatedContactForm,
             formIsValid:updatedFormIsValid,
        });

    }
}

    contactMeHandler = (event) => {
        event.preventDefault();
        if(!this.state.formIsSend){
                this.setState({
                     isLoading:true
                            });
                const mail = {
                     name: this.state.contactForm.name.value,
                     phone: this.state.contactForm.phone.value,
                     mailaddress: this.state.contactForm.email.value,
                     subject: this.state.contactForm.message.value
                            }
                Axios.post('https://mails-wb.firebaseio.com/mails-wb.json', mail)
                    .then( message => {
                        this.setState({
                            isLoading:false,
                            formIsSend:true
                        });
                        return message;
                    })
                    .catch( error => {
                        this.setState({
                            isLoading:false
                        });
                        return error;
                    });
                }
        else {
                // CLEARING THE FORM
                let updateForm = { ...this.state.contactForm };

                updateForm = Object.keys(updateForm).map( el => {
                    updateForm[el].value = "";
                    updateForm[el].touched = false;
                    updateForm[el].valid = false;
                    return updateForm[el];
                })

                this.setState({
                        formIsSend:false
                });
        }
    }

    onFocusHandler(){
        if(window.innerWidth <= 500){
            document.querySelector('#Contact').style.backgroundColor = "rgb(256,256,256)";
        }
    }
    onBlurHandler(){
        if(window.innerWidth <= 500){
            document.querySelector('#Contact').style.backgroundColor = "rgb(97,156,156)";
        }
    }

    render(){
        let inputElements = [];
            for (let element in this.state.contactForm){
                inputElements.push({
                    id:element,
                    config:this.state.contactForm[element]
                });
            }   
        return(
                <Section 
                    formElements = {inputElements} 
                    formIsValid = {this.state.formIsValid} 
                    formIsSend = {this.state.formIsSend}
                    isLoading = {this.state.isLoading}
                    inputChange = {this.inputChangeHandler} 
                    contactMe = {this.contactMeHandler}
                    id="Contact"
                    focus = {this.onFocusHandler}
                    blur = {this.onBlurHandler}
                    />    
        );
    };
};

export default ContactData;