import React,{Component} from 'react';
import Section from '../Section/Section';
import Auxial from '../../hoc/Auxial/Auxial';
import ContactData from '../ContactData/ContactData';
import ReactFullpage from '@fullpage/react-fullpage';
import Axios from 'axios';
import Modal from '../../Components/UI/Modal/Modal';
import CreationSummary from '../../Components/UI/CreationSummary/CreationSummary';
import PageIntroduce from '../../Components/Navigation/PageIntroduce/PageIntroduce';
import Toolbar from '../../Components/Navigation/Toolbar/toolbar';



class Playground extends Component{
    state = {
      creations:null,
      creationClicked: null,
      showModal:false,
      modalClosed : false,
      sectionActive:{
          home:false,
          skills:false,
          creations:false,
          passions:false,
          contact:false
      },
      creationsActive:false,
      intervals:[]
    }

    componentDidMount(){
      if(this.state.creations === null){
          Axios.get('https://creations-wb.firebaseio.com/creations.json')
                  .then(response => {
                      this.setState({
                          creations:response.data
                      });
                  })
                  .catch(error => {
                      console.log(error);
                  });
                  window.addEventListener('touchmove', () => {this.fullInViewportHandler();});
                  window.addEventListener('touchstart', () => {this.fullInViewportHandler();});
                  window.addEventListener('load', () => {this.fullInViewportHandler();});
                  window.addEventListener('wheel', () => {this.fullInViewportHandler();});
                  window.addEventListener('scroll', () => {this.fullInViewportHandler();});
                  const navigationItems = document.querySelectorAll('.NavigationItem');
                  for(let i = 0; i < navigationItems.length;i++){
                    navigationItems[i].addEventListener('click', () => {this.fullInViewportHandler();});
                    navigationItems[i].addEventListener('hover', () => {this.fullInViewportHandler();});
                  }
                  this.fullInViewportHandler();
      }

     }

    componentDidUpdate(){
      if(this.state.sectionActive['creations'] && !this.state.creationsActive)
      {
            this.creationAnimationHandler();
            this.setState({
              creationsActive:true
            });
      }
      else{
        if(this.state.intervals.length > 0 && !this.state.sectionActive['creations']){
          this.resetCreationsHandler();
        }
      }
    }

    resetCreationsHandler(){
     // CLEAR INTERVALS
     for(let i = 0; i < this.state.intervals.length; i++){
        clearInterval(this.state.intervals[i]);
     }
     // RESET CREATIONTITLECONTAINER AND CREATIONTITLE
     document.querySelector('.CreationTitle').classList.remove('Show');
     document.querySelector('.CreationTitleContainer').classList.remove('Show');

     // RESET ALL CREATIONDESKTOPTITLES
     const overlays = document.querySelectorAll('.Overlay');
     for(let i = 0; i < overlays.length; i++){
      this.ballAnimationHandler(overlays[i],'translateX(0)',100,0,'forwards');
     }

     // RESET STARTINGBALL
     const ball = document.querySelector('.StartingBall');
     ball.classList.remove('Show');
     ball.style.top= "30px";

     // RESET ALL THE OTHER BALLS
     const balls = document.querySelectorAll('.MovingBall');
     const ballsGray = document.querySelectorAll('.BigBallGray');
     for(let i = 0; i < balls.length; i++){
      this.ballAnimationHandler(balls[i],'scale(1)',100,0,'forwards');
      this.ballAnimationHandler(ballsGray[i],'scale(1)',100,0,'forwards');
     }

     // RESET STATE
     this.setState({
       intervals : [],
       creationsActive:false
     });
    }

    creationAnimationHandler(){
            // TIMEOUT TO MAKE SURE ELEMENTS ARE CREATED
            let creations,balls,ballsGray,timeInterval;
            let creationsOverlay = [];
            let allIntervals = [];
            let creationsData;
            document.querySelector('.CreationTitleContainer').classList.add('Show');
                  setTimeout(() => {
                          creationsData = Object.keys(this.state.creations).map( el => {
                                return this.state.creations[el];
                              });
                          creations = document.querySelectorAll('.Creation');
                          balls = document.querySelectorAll('.MovingBall');
                          ballsGray = document.querySelectorAll('.BigBallGray');
                          creationsOverlay = document.querySelectorAll('.Overlay');
                          timeInterval = creations.length * 4000;
                   },1000);
            
                   setTimeout(() => {
                    creationsOverlay.length > 0 ? this.dropTheBall(creations[0],balls[0],ballsGray[0],creationsOverlay[0]) 
                                                : this.dropTheBall(creations[0],balls[0],ballsGray[0]); 
                    },1500);

                  setTimeout(() => {
                          for(let i = 0; i < creationsData.length; i++){
                                    let delay = i * 4000;
                                    allIntervals.push(this.setTextCreationHandler(creationsData[i].titel,delay,timeInterval));
                              }
                              
                  },3500);

                  setTimeout(() => {
                    document.querySelector('.StartingBall').classList.remove('Show');
                          for(let i = 1; i <= creations.length; i++)
                              {
                                  let lastEl = i - 1;
                                  let newEl = i;
                                  let intervalsCreation = [];
                                      if(i === creations.length){
                                              newEl = 0;
                                        }
                                  let delay = lastEl * 4000;
                                  
                                  intervalsCreation = creationsOverlay.length > 0 ? 
                                                      this.moveTheBallHandler(creations[lastEl],
                                                                              creations[newEl],
                                                                              balls[lastEl],
                                                                              balls[newEl],
                                                                              ballsGray[newEl],
                                                                              timeInterval,
                                                                              delay,
                                                                              intervalsCreation,
                                                                              creationsOverlay[newEl]
                                                                              )
                                                      : 

                                                      this.moveTheBallHandler(creations[lastEl],
                                                        creations[newEl],
                                                        balls[lastEl],
                                                        balls[newEl],
                                                        ballsGray[newEl],
                                                        timeInterval,
                                                        delay,
                                                        intervalsCreation,
                                                        );
                                  intervalsCreation.forEach(element => {
                                          allIntervals.push(element);
                                  });
                              }
                          this.setState({
                                 intervals:allIntervals
                              });
                  },6500);
          
      }

    setTextCreationHandler(creationTitle,delay,timeInterval){
              document.querySelector('.CreationTitle').classList.add('Show');
                      setTimeout(() => {
                              document.querySelector('.CreationTitle').innerHTML = creationTitle;
                                        },delay);

              const interval = setInterval( () => {
                      setTimeout(() => {
                                  document.querySelector('.CreationTitle').innerHTML = creationTitle;
                                        },delay);
                                                  },timeInterval);

              return interval;
    }

    dropTheBall(firstCreation,blackBall,grayBall,creationOverlay = "default"){
      const ball = document.querySelector('.StartingBall');
      const ballGB = ball.getBoundingClientRect();
      const firstCreationGB = firstCreation.getBoundingClientRect();

      const middlePointX = (( firstCreationGB.left + ( ( firstCreationGB.right - firstCreationGB.left) / 2)) - ( ballGB.width / 2) );
      const middlePointY = (( firstCreationGB.top + ( ( firstCreationGB.bottom - firstCreationGB.top) / 2)) - (ballGB.height / 2) );
      
      ball.style.left = middlePointX + "px";
      let ballPosY = ballGB.top;

      ball.classList.add('Show');

      let ballPlay = setInterval( () => {
          if(Math.trunc(ballPosY) === Math.trunc(middlePointY)){
            clearInterval(ballPlay);
          }
          else{
            ballPosY++;
            if(Math.trunc(ballPosY) === (Math.trunc(firstCreationGB.top) - 50)){
              this.ballAnimationHandler(blackBall,'scale(4.4)',1000,0,'forwards');
              this.ballAnimationHandler(blackBall,'scale(1)',1000,0 + 3000,'forwards');
              this.ballAnimationHandler(grayBall,'scale(4.8)',2000,0,'forwards');
              this.ballAnimationHandler(grayBall,'scale(1)',2000,0 + 3000,'forwards',"ease-in");
              if(creationOverlay !== "default")
                            {
                                if(creationOverlay.classList.contains('Right')){
                                      this.ballAnimationHandler(creationOverlay,'translateX(300px)',1000,800,'forwards');
                                }
                                else{
                                      this.ballAnimationHandler(creationOverlay,'translateX(-300px)',1000,800,'forwards');
                                }
                                this.ballAnimationHandler(creationOverlay,'translateX(0px)',1000,2300,'forwards');
                            }
            }
            ball.style.top = ballPosY + "px";
          }
      },5);

      

    }


    moveTheBallHandler(oldCreation,newCreation,ball,ballBig,ballGray,timeInterval,delay,intervals,creationOverlay="default"){
      const oldCreationGB = oldCreation.getBoundingClientRect();
      const newCreationGB = newCreation.getBoundingClientRect();
      const ballGB = ball.getBoundingClientRect();

      const oldMiddelPointX = (( oldCreationGB.left + ( ( oldCreationGB.right - oldCreationGB.left) / 2)) - ( ballGB.width / 2) );
      const oldMiddelPointY = (( oldCreationGB.top + ( ( oldCreationGB.bottom - oldCreationGB.top) / 2)) - (ballGB.height / 2) );

      const newMiddelPointX = (( newCreationGB.left + ( ( newCreationGB.right - newCreationGB.left) / 2)) - ( ballGB.width / 2) ) ;
      const newMiddelPointY = (( newCreationGB.top + ( ( newCreationGB.bottom - newCreationGB.top) / 2)) - (ballGB.height / 2) ) ;

      let moveX,moveY = 0;

        if(oldMiddelPointX < newMiddelPointX){
              moveX = (newMiddelPointX - oldMiddelPointX) + "px";
        }
        else{
          moveX = "-" + (oldMiddelPointX - newMiddelPointX) + "px"; 
        }
            
        if(oldMiddelPointY < newMiddelPointY){
              moveY = (newMiddelPointY - oldMiddelPointY) + "px";
        }
        else{
          moveY = "-" + (oldMiddelPointY - newMiddelPointY) + "px";
        }

        this.ballAnimationHandler(ball,'translate(' + moveX + ',' + moveY + ')',1000,delay);
        this.ballAnimationHandler(ballBig,'scale(4.4)',1000,delay,'forwards');
        this.ballAnimationHandler(ballBig,'scale(1)',1000,delay + 3500,'forwards');
        this.ballAnimationHandler(ballGray,'scale(4.8)',2000,delay,'forwards');
        this.ballAnimationHandler(ballGray,'scale(1)',2000,delay + 3500,'forwards',"ease-in");

        if(creationOverlay !== "default")
        {
          if(creationOverlay.classList.contains('Right')){
          this.ballAnimationHandler(creationOverlay,'translateX(300px)',1000,delay + 600,'forwards');
          }
          else{
          this.ballAnimationHandler(creationOverlay,'translateX(-300px)',1000,delay + 600,'forwards');
          }
          this.ballAnimationHandler(creationOverlay,'translateX(0px)',1000,delay + 2800,'forwards');
        } 
        
       intervals.push(setInterval(()=> {
              this.ballAnimationHandler(ball,'translate(' + moveX + ',' + moveY + ')',1000,delay);
            },timeInterval));

        intervals.push(setInterval(()=> {
               this.ballAnimationHandler(ballBig,'scale(4.4)',1000,delay,'forwards');
               this.ballAnimationHandler(ballBig,'scale(1)',500,delay + 3500,'forwards');
               this.ballAnimationHandler(ballGray,'scale(4.8)',1000,delay,'forwards');
               this.ballAnimationHandler(ballGray,'scale(1)',500,delay + 3500,'forwards',"ease-in");
               if(creationOverlay !== "default")
                    {
                      if(creationOverlay.classList.contains('Right')){
                            this.ballAnimationHandler(creationOverlay,'translateX(300px)',1000,delay + 600,'forwards');
                      }
                      else{
                            this.ballAnimationHandler(creationOverlay,'translateX(-300px)',1000,delay + 600,'forwards');
                      }
                            this.ballAnimationHandler(creationOverlay,'translateX(0px)',1000,delay + 2800,'forwards');
                      }
                },timeInterval)); 
       return intervals;         

    }

    ballAnimationHandler(aniElement,aniTransform,aniDuration,aniDelay,aniFill="none",aniEase="ease"){
      aniElement.animate([
        {},
        {transform:aniTransform}
      ],{
        duration:aniDuration,
        delay:aniDelay,
        fill:aniFill,
        easing:aniEase
      });
    }

    creationClickedHandler = (creation) => {
      let creationUpdate;
      Object.keys(this.state.creations).map( el => {
       if(this.state.creations[el].vector === creation){
           creationUpdate = this.state.creations[el];
        }
        return creationUpdate;
      })

      this.setState({
          creationClicked:creationUpdate,
          showModal:true,
          modalClosed:false
      });

    }

    creationCloseHandler = () => {
      this.setState({
          creationClicked:null,
          showModal:false,
          modalClosed:true
      })
    }


    fullInViewportHandler = () => {
      if(window.innerWidth > 800){
      if(document.querySelector('.ToolbarFixed').classList.contains('Show')){
        document.querySelector('.ToolbarFixed').classList.remove('Show');
      }
      if(!document.querySelector('.ToolbarFixed').classList.contains('Show')){
        setTimeout(() => {
          document.querySelector('.ToolbarFixed').classList.add('Show');
          },1000);
      }
      }
      setTimeout(() => {
      let sectionActive = false;
      const updatedSectionActive = { ...this.state.sectionActive}
            Object.keys(updatedSectionActive).map( section => {
                 sectionActive = this.isInViewportHandler(section);
                 if(sectionActive){
                      updatedSectionActive[section] = true;
                   }
                   else {
                     updatedSectionActive[section] = false;
                   }
                   return updatedSectionActive[section];
      })
      this.setState({
        sectionActive:updatedSectionActive
      });

      return true;
      },1000);
    }

    isInViewportHandler(element){
      const cap_element = element.charAt(0).toUpperCase() + element.slice(1);
      const lowestParent = document.querySelector('#' + cap_element).parentNode;
      const highestParent = lowestParent.parentNode;
      if(highestParent.classList.contains('active')){
        return true;
      }
      else{
        return false;
      }

      }

    render(){ 
        let phone = false;
            if(window.innerWidth < 500)
                {
                    phone = true;
                }
        return(
          <Auxial>
                 {this.state.creationClicked ? <Modal>
                        <CreationSummary
                          creation = {this.state.creationClicked}
                          close = {this.creationCloseHandler}
                          />
                  </Modal> : null}
                   {/* SET THE FIXED MENU FOR DESKTOP */}
                  {!phone ? <Toolbar sections = {this.state.sectionActive} /> : null}
            <ReactFullpage
              licenseKey={"F42B47A5-44464A06-9D26B93F-24469918"}
              touchSensitivity={15}
              bigSectionsDestination={"top"}
              anchors={["an_Home","an_Skills","an_Creations","an_Passions","an_Contact"]}
              menu= {'.NavigationItems'}
              slidesNavigation={true}
                  render={({ state = this.state, fullpageApi }) => {
                          function go4it() {fullpageApi.setAllowScrolling(false); }
                          function scrollAgain() {fullpageApi.setAllowScrolling(true); }

                          if(this.state.showModal){
                                  document.getElementById('onScroll').click();
                          }
                          if(this.state.modalClosed){
                            document.getElementById('scrollAgain').click();
                          }
                  return (
                    
                      <div id="fullpage-wrapper" onScroll={this.fullInViewportHandler}>
                          <div className="section">
                                <button style={{display:"none"}} id="onScroll" onClick={() => go4it()}></button>
                                <button style={{display:"none"}} id="scrollAgain" onClick={() => scrollAgain()}></button>
                                <PageIntroduce
                                    id = "home"
                                    show = {this.state.sectionActive["home"]}
                                    phone = {phone}
                                    />
                                <Section id="Home" />
                          </div>
                           <div className="section">
                                <PageIntroduce
                                    id = "skills"
                                    show = {this.state.sectionActive["skills"]}
                                    />
                                <Section id="Skills" skillsActive={this.state.sectionActive["skills"]} />
                          </div>
                          <div className="section" style={{backgroundColor:"#FFE09C"}}>
                                <PageIntroduce
                                    id="creations"
                                    show = {this.state.sectionActive["creations"]}
                                    />
                                <Section 
                                    id="Creations" 
                                    creations = {this.state.creations}
                                    clicked = { this.creationClickedHandler}
                                 />
                          </div>
                          <div className="section" style={{backgroundColor:'#E98E7D'}}>
                                  <PageIntroduce
                                    id="passions"
                                    show = {this.state.sectionActive["passions"]}
                                  />
                                  <Section id="Passions"/>
                          </div>
                          <div className="section">
                            { !phone ? <PageIntroduce
                                    id="contact"
                                    show = {this.state.sectionActive["contact"]}
                                  /> : null }
                                  <ContactData/> 
                          </div>
                      </div>
                        );
                                                         }}
              />
          </Auxial>
              );
           }
};
    export default Playground;
