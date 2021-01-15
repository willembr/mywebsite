import React from 'react';
import './Creation.css';
import Auxial from '../../../../../hoc/Auxial/Auxial';
import ReactSwipe from 'react-swipe';
import Modal from '../../../Modal/Modal';

// VECTORS

import Virus_img from '../../../../../assets/images/virus.png';
import Tax_img from '../../../../../assets/images/tax.png';
import Nerd_img from '../../../../../assets/images/nerd.png';
import Shout_img from '../../../../../assets/images/shout.png';

// IMAGES 

import Cr_chapel_img from '../../../../../assets/images/creations/chapel1.jpg';
import Cr_chapel2_img from '../../../../../assets/images/creations/chapel2.jpg';
import Cr_chapel3_img from '../../../../../assets/images/creations/chapel3.jpg';

import Cr_vat_img from '../../../../../assets/images/creations/vat1.jpg';
import Cr_vat2_img from '../../../../../assets/images/creations/vat2.jpg';
import Cr_vat3_img from '../../../../../assets/images/creations/vat3.jpg';
import Cr_vat4_img from '../../../../../assets/images/creations/vat4.jpg';
import Cr_vat5_img from '../../../../../assets/images/creations/vat5.jpg';
import Cr_vat6_img from '../../../../../assets/images/creations/vat6.jpg';

const Creation = (props) => {
    let vector = "";
    let images = [];
    let creationImages = null;
    let keyWords = null;

    switch(props.vector){
        case('virus'):
            vector = Virus_img;
            images = [
                    {src:Cr_chapel_img,alt:props.images.image1.alt,explanation:props.images.image1.explanation},
                    {src:Cr_chapel2_img,alt:props.images.image2.alt,explanation:props.images.image2.explanation},
                    {src:Cr_chapel3_img,alt:props.images.image3.alt,explanation:props.images.image3.explanation}
                    ];
            break;
        case('tax'):
            vector = Tax_img;
            images = [
                {src:Cr_vat_img,alt:props.images.image1.alt,explanation:props.images.image1.explanation},
                {src:Cr_vat2_img,alt:props.images.image2.alt,explanation:props.images.image2.explanation},
                {src:Cr_vat3_img,alt:props.images.image3.alt,explanation:props.images.image3.explanation},
                {src:Cr_vat4_img,alt:props.images.image4.alt,explanation:props.images.image4.explanation},
                {src:Cr_vat5_img,alt:props.images.image5.alt,explanation:props.images.image5.explanation},
                {src:Cr_vat6_img,alt:props.images.image6.alt,explanation:props.images.image6.explanation}
                ];
            break;
        case('nerd'):
            vector = Nerd_img;
            break;
        case('shout'):
            vector = Shout_img;
            break;
        default:
            vector = "";
    }

if(props.active){

    let circlesAll = [];


    for(let i = 1; i <= images.length; i++){
            let cx = 8;
            let circlesOneImage = [];
            let circleSvg = null;
            let creationCirclesWidth = 0;

                     for(let r = 1; r <= images.length; r++ ){
                                let circle = {};
                                let colorCircle = "#ccc";
                                
                                if( i === r){
                                        colorCircle = "#646464";
                                 }

                                circle = {cxEl:cx,colorCircleEl:colorCircle};
                                cx += 20;
                                circlesOneImage.push(circle);

                                // set width of circles to center it => every item = +20px => look style svg element line 75
                                creationCirclesWidth += 20;
                        }

            circleSvg = <svg style={{width:creationCirclesWidth}} className="CreationCircles">{Object.keys(circlesOneImage).map(el => {
                                return <circle cx={circlesOneImage[el].cxEl} cy="8" r="5" fill={circlesOneImage[el].colorCircleEl}/>
                        })}</svg>;
              
            circlesAll.push(circleSvg);



    }

    

    if(images.length >= 1){
        let i = 0;
        let picture;
        creationImages = Object.keys(images).map(el => {
            picture = <picture>
                <img className="CreationImg" key={el} alt={images[el].alt} src={images[el].src}/>
                <p className="ImgExplanation">{images[el].explanation}</p>
                    {circlesAll[i]}
                </picture>;
                i++;
                return picture;
        })
    }

    keyWords = Object.keys(props.keywords).map( el => {
        return <p>{ props.keywords[el]}</p>
    });
}




    return(
        <Auxial>
        {/* <div id={props.vector} className="slide" onClick={() => props.clicked(props.vector)}> */}
        {/* <div className="fp-tableCell"> */}
        <img className="Vector" alt="vector for creation" src={vector}/>
        <h1>{props.title}</h1>
        <p className="ExplanationLimit">{props.explanation.substr(0,130)}...</p>
        {/* </div> */}
        {/* </div> */}
        {/* {props.active ?
        <Modal>
            <div id={props.vector} className="CreationModal">
            <img className="Vector" alt="vector for creation" src={vector}/>
            <h1>{props.title}</h1>
            <ReactSwipe
                    className="carousel"
                    swipeOptions={{ continuous: true }}
             >
                    {creationImages}
            </ReactSwipe>
            <p>{props.explanation}</p>
            <h4 className="TechTitle">Techniques / Programs</h4>
            <div className="KeyWords">
                {keyWords}
            </div>
            <button onClick={() => props.close(props.vector)}>Close</button>
            </div>
        </Modal>
        : null
        } */}
        </Auxial>
        
);
};

export default Creation;
