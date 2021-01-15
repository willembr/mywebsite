import React from 'react';
import './Passions.css';
import Passion from './Passion/Passion';
import ReactSwipe from  'react-swipe';
import PasLeft_img from '../../../../assets/images/pas-left.png';
import PasRight_img from '../../../../assets/images/pas-right.png';

const PASSIONS = [
    {id:1, title:"Daughter", image: "images/hannelore.png", alt:"The best daughter ever",quote:"Maybe the best thing I ever created!"},
    {id:2, title:"Mountainbike", image: "images/mtb2.png", alt:"Biking in the wind", quote:"To Me It Doesn’t Matter Whether It’s Raining Or The Sun Is Shining Or Whatever. As Long As I’m Riding A Bike I Know I’m The Luckiest Guy In The World"},
    {id:3, title:"Building web applications", image: "images/pc2.png", alt:"Design and creating is what I love",quote:"You might not think that programmers are artists, but programming is an extremly creative profession. It's logic-based creativity"},
    // {id:4, title:"Photography", image: "", alt:"Shooting and portrait"},
    // {id:5, title:"Fitness", image: "", alt:"Fitness"}
]

const Passions = (props) => {
    let reactSwipeEl;
    // To adapt the number of passions we need to know how many there are
    const allPassionsLength = PASSIONS.length;
    const allPassions = PASSIONS.map( el => {
        return <div key = {el.id}>
            <Passion
                       id = {el.id}
                    title = {el.title}
                    image = {el.image}
                    alt = {el.alt}
                    quote = {el.quote}
                    count = {allPassionsLength}
                    />
                </div>
    })
    return(
        <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: true }}
        ref={el => (reactSwipeEl = el)}
      >
          {allPassions}
      </ReactSwipe>
       <button className="PasNextBtn" onClick={() => reactSwipeEl.next()}>
                    <    img src={PasRight_img} alt="go to next "/>   
                    </button>
      <button className="PasPreviousBtn" onClick={() => reactSwipeEl.prev()}>
                        <img src={PasLeft_img} alt="go to previous"/>
                    </button>
    </div>
    );
}

export default Passions;

