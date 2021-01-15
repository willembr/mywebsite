import React from 'react';
import './PageIntroduce.css';

const PageIntroduce = (props) =>{
        let titlePageClasses = ["BouncePage","NonActive"];
        let lineClasses = ["HoldTheLine"];
        const white = "rgb(255,255,255)";
        const gray = "rgb(114,115,116)";
        const black = "rgb(50,50,50)";
        let strokeColor = "";

        if(props.show){
            switch(props.id){
                case("home"): titlePageClasses = ["BouncePage","ColorGray","Active"];
                              lineClasses = ["HoldTheLine", "Active"];
                              strokeColor = gray;
                              break;
                case("skills"): titlePageClasses = ["BouncePage","ColorWhite","FurtherActive"];
                                lineClasses = ["HoldTheLine", "Active"];
                                strokeColor = white;
                                break;
                case("creations"): titlePageClasses = ["BouncePage","ColorGray","SlowActive"];
                                   lineClasses = ["HoldTheLine", "Active"];
                                   strokeColor = gray;
                                   break;
                case("passions"): titlePageClasses = ["BouncePage","ColorWhite","Active"];
                                  lineClasses = ["HoldTheLine", "Active"];
                                  strokeColor = white;
                                  break;
                case("contact"): titlePageClasses = ["BouncePage","ColorBlack","Active"];
                                 lineClasses = ["HoldTheLine", "Active"];
                                 strokeColor = black;
                                 break;
                default:         titlePageClasses = ["BouncePage","ColorBlack","Active"];
                                 lineClasses = ["HoldTheLine", "Active"];
                                 strokeColor = black;
                                 break;
            }
        }
        return(
            <div className="PageIntroduce" id={"PI_" + props.id}>
            <svg className={lineClasses.join(' ')} height="50" width="20">
                    <line x1="0" y1="0" x2="0" y2="50" style={{stroke:strokeColor,strokeWidth:'4'}} />
            </svg>
            {props.id === "home" && props.phone ? null : <h1 className={titlePageClasses.join(' ')}>{props.id}</h1>}
            </div>
        );
    };

export default PageIntroduce;