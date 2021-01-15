import React from 'react';
import './Contact.css';
import Auxial from '../../../../hoc/Auxial/Auxial';
import Input from '../../../UI/Input/Input';
import Spinner from '../../Spinner/Spinner';

import SuperMe_img from '../../../../assets/images/superme.png';
import Insta_img from '../../../../assets/images/insta.png';
import Cv_img from '../../../../assets/images/cv.png';
import Cv_doc from '../../../../assets/docs/CV_WillemBrants_EN.pdf';

const Contact = (props) => {

    const fullContactForm = props.formElements.map( el => {
        return <Input
                    key = {el.id}
                    label = {el.config.label}
                    elementType = {el.config.elementType}
                    config = {el.config.elementConfig}
                    value = {el.config.value}
                    changed={(event) => props.inputChange(event,el.id)}
                    focus = {props.focus}
                    blur = {props.blur}
        />
    });

    let content = fullContactForm;
    let submitBtnTxt = "Send";

    if(props.isLoading){
        content = <Spinner/>;
    }

    if(props.formIsSend){
        content = <h1 className="FormIsSend">Nice to meet you, we will chat soon</h1>;
        submitBtnTxt = "Take me back";
    }

    return(
        <Auxial>
            <svg className="Rectangle">
                <rect className="RectangleContact"/>
            </svg>
            <section className="AllParts">
                    <section className="SuperPart">
                        <article className="SuperMe">
                            <img alt="Super web application developer" src={SuperMe_img}/>
                        </article>
                     </section>
                    <section className="FormPart">
                            <article className="Salutation">
                                    <h1>Contactform</h1>
                                    <svg className="Circle" width="20" height="20"><circle cx="8" cy="8" r="4"/></svg>
                            </article>
                            <form name="contact" method="POST" data-netlify="true" onSubmit={props.contactMe}>
                                     {content}
                                    <button className="SubmitBtn" >{submitBtnTxt}</button>
                            </form>
                    </section>
                    <section className="ContactPart">
                        <article className="Address">
                            <ul>
                                <li>Willem Brants</li>
                                <li>2800 Mechelen</li>
                            </ul>
                        </article>
                        <article className="ContactPhone">
                                <p>0486 38 04 70</p>
                                <a href="tel:0486380470">0486 38 04 70</a>
                        </article>
                        <article className="ContactMail">
                                <p>willembrants@hotmail</p>
                        </article>
                        <article className="LinksCv"> 
                                <a href={Cv_doc} rel="noopener noreferrer" download target="_blank" >
                                    <img alt="cv" src={Cv_img}/></a>
                        </article>
                        <article className="LinksInsta">
                                <a href="https://www.instagram.com/wbcreations2020/" rel="noopener noreferrer" download target="_blank" >
                                    <img alt="instagram" src={Insta_img}/>
                                    </a>
                        </article>
                    </section>
            </section>
        </Auxial>
    );
};

export default Contact;

