import React from 'react';
import './Home.css';

import FrontC_img from '../../../../assets/images/front.png';
import FrontNB_img from '../../../../assets/images/moi_nb.png';



const Home = (props) => {
    return(
        <div className="Home">
            <div className="HomePlayGround">
                <div className="Grid-item">
                    <div className="Who">  
                    <h1>Willem <em>Brants</em></h1>
                    <h4>Web application developer</h4> 
                    </div>
                </div>
                <div className="Grid-item">
                </div>
                <div className="Grid-item" >
                    <img alt="mijn foto" className="FrontImg" src={FrontC_img}/>
                    <img alt="mijn foto zonder achtergrond" className="FrontNB" src={FrontNB_img}/>
                </div>
                <div className="Grid-item">
                </div>
                <div className="Grid-item">
                    <div className="Interests">
                        <h1><em>#REACT</em> #JAVASCRIPT #HTML</h1>
                        <h2>#CSS #JQUERY #PHP #NODE.JS</h2>
                        <h3>#GITHUB #NETLIFY #CODEPEN</h3>
                        <h4>#PHOTOSHOP #ILLUSTRATOR</h4>
                        <h5>#ANIMATE #AFTEREFFECTS</h5>
                    </div>
                </div>
            <div className="Grid-item"></div>
            </div>
        </div> 
    );
};

export default Home;
