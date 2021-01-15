import React from 'react';
import './Passion.css';
import Swipe_img from '../../../../../assets/images/swipe.png';

const Passion = (props) => {
    let circles = [];
    let cx = 8;
    for(let i = 1; i <= props.count; i++){
        let colorCircle = "#fff";
        if(i === props.id)
        {
            colorCircle = "#646464";
        }
        circles.push(<circle key={i} cx={cx} cy="8" r="5" fill={colorCircle}/>);
        cx += 20;
    }

    let PassionCircleClasses = ["PassionCircle"];
    let PassionImgClasses = ["PassionImg"];

    switch(props.title){
        case('Daughter'): 
                PassionImgClasses = ["PassionImg","Daughter"];
                break;
        case('Mountainbike'): 
                PassionImgClasses = ["PassionImg","Mtb"];
                break;
        case('Building web applications'): 
                PassionImgClasses = ["PassionImg","Pc"];
                break;
        default:
                PassionImgClasses = ["PassionImg"];
    }
    
    return (
        <div className="Passion">
                    <img className={PassionImgClasses.join(' ')} alt={props.alt} src={props.image}/>
                    <svg className={PassionCircleClasses.join(' ')} width="220" height="220">
                        <ellipse cx="109.7" cy="112.2" rx="92.7" ry="80.2" fill="#fff"/>
                    </svg>
                    <h4 className="PassionTitle">#{props.title}</h4>
                    <p className="PassionQuote">' {props.quote} '</p>
                <svg className="PassionNav">
                   {circles}
                </svg>
                {props.id === 1 ? <img 
                data-aos="new-animation"
                data-aos-once="true"
                className="SwipeImg" 
                alt="you need to swipe" 
                src={Swipe_img}/> : null }
        </div>
);
    };

export default Passion;
