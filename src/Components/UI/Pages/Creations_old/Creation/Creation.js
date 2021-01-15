import React from 'react';
import './Creation.css';
import Auxial from '../../../../../hoc/Auxial/Auxial';
import Backdrop from '../../../Backdrop/Backdrop';
import ReactSwipe from 'react-swipe';

// VECTORS

import Virus_img from '../../../../../assets/images/virus.png';
import Tax_img from '../../../../../assets/images/tax.png';
import Nerd_img from '../../../../../assets/images/nerd.png';
import Shout_img from '../../../../../assets/images/shout.png';

// IMAGES 

import Cr_chapel_img from '../../../../../assets/images/creations/chapel1.jpg';
import Cr_chapel2_img from '../../../../../assets/images/creations/chapel2.jpg';
import Cr_chapel3_img from '../../../../../assets/images/creations/chapel3.jpg';


const Creation = (props) => {
    let vector = "";
    let images = [];
    let creationImages = null;

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

if(images.length >= 1){
    creationImages = Object.keys(images).map(el => {
        return <picture>
            <img className="CreationImg" key={el} alt={images[el].alt} src={images[el].src}/>
            <p className="ImgExplanation">{images[el].explanation}</p>
            </picture>
    })
}


    return(
        <Auxial>
        { !props.active ? <div id={props.vector} className="Creation NonActive" onClick={() => props.clicked(props.vector)}>
        <img className="Vector" alt="vector for creation" src={vector}/>
        <h1>{props.title}</h1>
        <p>{props.explanation}</p>
        </div> :
        <Auxial>
        <Backdrop show={props.active}/> 
            <div id={props.vector} className="Creation Active">
            <img className="Vector" alt="vector for creation" src={vector}/>
            <h1>{props.title}</h1>
        <div>
        <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: true }}
         >
            {creationImages}
        </ReactSwipe>
        </div>
            <p>{props.explanation}</p>
            <button className="Close" onClick={() => props.close(props.vector)}>Close</button>
            </div>
        </Auxial> 
        }
        </Auxial>
        
);
};

export default Creation;
