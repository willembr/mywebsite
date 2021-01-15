import React from 'react';
import Auxial from '../../../../../hoc/Auxial/Auxial';
import './CurvedText.css';

const CurvedText = (props) => {
    let curvedFullTextClasses = ["CurvedText","Full"];
    let curvedLogicTextClasses = ["CurvedText","Logic"];
    let curvedCreativeTextClasses = ["CurvedText","Creative"];

    if( !props.skills.logicActive){
        curvedFullTextClasses = ["CurvedText","Full","NonActive"];
        curvedCreativeTextClasses = ["CurvedText","Creative","Active"];
    }

    if( !props.skills.creativeActive){
        curvedFullTextClasses = ["CurvedText","Full","NonActive"];
        curvedLogicTextClasses = ["CurvedText","Logic","Active"];
    }

    return(
            <Auxial>

                <svg className={curvedFullTextClasses.join(" ")} viewBox="0 -20 500 90">
                <path id="curveFull" fill="transparent" d="M14.28,15.7c0,0,268.53,119.49,465.7,0"/>
                <text fill="#fff" style={{fontSize:28,textTransform:"uppercase"}} width="380"><textPath xlinkHref="#curveFull">My brain in development mode</textPath></text>
                </svg>

                <svg className={curvedLogicTextClasses.join(" ")} viewBox="-40 -80 500 137">
                <path id="curveLogic" fill="transparent" d="M14.28,15.7c0,0,268.53,119.49,465.7,0"/>
                <text fill="#fff" style={{fontSize:40,textTransform:"uppercase"}} width="380"><textPath xlinkHref="#curveLogic">Logic</textPath></text>
                </svg>

                <svg className={curvedCreativeTextClasses.join(" ")} viewBox="-165 -105 500 170">
                <path id="curveCreative" fill="transparent" d="M144.71,48.13C223,61,308,51,374,4"/>
                <text fill="#fff" style={{width:"100%",fontSize:40,textTransform:"uppercase",textAlign:"right"}} width="380"><textPath xlinkHref="#curveCreative">Creative</textPath></text>
                </svg>

            </Auxial>
    );
};

export default CurvedText;
