import React from 'react';
import './CreationSummary.css';
import ReactSwipe from 'react-swipe';

//BTNS

import LeftBtn_img from '../../../assets/images/left.png';
import RightBtn_img from '../../../assets/images/right.png';


const CreationSummary = (props) => {
    let vector = "";
    let images = [];
    let creationImages = null;
    let keyWords = null;
    let reactSwipeEl;

    switch(props.creation.vector){
        case('virus'):
            vector = "images/virus.png";
            images = [
                    {src:props.creation.images.image1.link,alt:props.creation.images.image1.alt,explanation:props.creation.images.image1.explanation},
                    {src:props.creation.images.image2.link,alt:props.creation.images.image2.alt,explanation:props.creation.images.image2.explanation},
                    {src:props.creation.images.image3.link,alt:props.creation.images.image3.alt,explanation:props.creation.images.image3.explanation}
                    ];
            break;
        case('tax'):
            vector = "images/tax.png";
            images = [
                {src:props.creation.images.image1.link,alt:props.creation.images.image1.alt,explanation:props.creation.images.image1.explanation},
                {src:props.creation.images.image2.link,alt:props.creation.images.image2.alt,explanation:props.creation.images.image2.explanation},
                {src:props.creation.images.image3.link,alt:props.creation.images.image3.alt,explanation:props.creation.images.image3.explanation},
                {src:props.creation.images.image4.link,alt:props.creation.images.image4.alt,explanation:props.creation.images.image4.explanation},
                {src:props.creation.images.image5.link,alt:props.creation.images.image5.alt,explanation:props.creation.images.image5.explanation},
                {src:props.creation.images.image6.link,alt:props.creation.images.image6.alt,explanation:props.creation.images.image6.explanation}
                ];
            break;
        case('nerd'):
            vector = "images/nerd.png";
            images = [
                {src:props.creation.images.image1.link,alt:props.creation.images.image1.alt,explanation:""}
                ];
            break;
        case('shout'):
            vector = "images/shout.png";
            images = [
                {src:props.creation.images.image1.link,alt:props.creation.images.image1.alt,explanation:""}
                ];
            break;
        default:
            vector = "";
    }

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
                                return <circle key={el} cx={circlesOneImage[el].cxEl} cy="8" r="5" fill={circlesOneImage[el].colorCircleEl}/>
                        })}</svg>;
              
            circlesAll.push(circleSvg);
    }

    if(images.length >= 1){
        let i = 0;
        let picture;
        creationImages = Object.keys(images).map(el => {
            picture = <picture key={el}>
                <img className="CreationImg" key={el} alt={images[el].alt} src={images[el].src}/>
                <p className="ImgExplanation">{images[el].explanation}</p>
                    { images.length > 1 ? circlesAll[i] : null}
                </picture>;
                i++;
                return picture;
            })
    }

    keyWords = Object.keys(props.creation.keywords).map( el => {
        return <p key={el}>{ props.creation.keywords[el]}</p>
    });
    return(
            <div className="CreationSummary"> 
            <button className="CloseBtn" onClick={props.close}>Close</button>
                    <img className="Vector" alt="vector for creation" src={vector}/>
                    <h1>{props.creation.titel}</h1>
                    <ReactSwipe
                        className="carousel"
                        swipeOptions={{ continuous: true }}
                        ref={el => (reactSwipeEl = el)}
                    >
                            {creationImages}
                    </ReactSwipe>
                    { images.length > 1 ?<button className="NextBtn" onClick={() => reactSwipeEl.next()}>
                    <    img src={RightBtn_img} alt="go to next "/>   
                    </button> : null }
                    { images.length > 1 ?<button className="PreviousBtn" onClick={() => reactSwipeEl.prev()}>
                        <img src={LeftBtn_img} alt="go to previous"/>
                    </button> : null }
                    <p>{props.creation.explanation}</p>
                    <h4 className="TechTitle">Techniques / Programs</h4>
                    <div className="KeyWords">
                        {keyWords}
                    </div>
                    <button className="CloseLastBtn" onClick={props.close}>Close</button>
            </div>
    );
};

export default CreationSummary;