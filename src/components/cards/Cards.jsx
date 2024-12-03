import React from 'react';
import './Cards.css';
import Api from "../../assets/CardsImg/Api.svg";
import Checks from "../../assets/CardsImg/Checks.svg";
import Graph from '../../assets/CardsImg/Graph.svg';
import Notification from '../../assets/CardsImg/Notification.svg';
import Security from '../../assets/CardsImg/Security.svg';
import Teams from '../../assets/CardsImg/Teams.svg';

function Cards(props) {
  return (
    <div className='card'>
      <div style={{display:"flex",flexDirection:"column",textAlign:"start"}}>
        <img src={props.img} alt="" />
        <h5>{props.h5}</h5>
        </div>
        <div style={{display:"flex",textAlign:"start"}}>
        <p>{props.p}</p>
        </div>
    </div>
  );
}

function CardsList() {
  return (
    <div className="cards-list" >
      <Cards img={Notification} h5="Instant Notifications" p="Get alerted immediately when your SSL certificate becomes invalid or website issues are detected." />
      <Cards img={Api} h5="Full Featured API" p="Add websites, get statistics, and receive webhooks for seamless integration." />    
      <Cards img={Checks} h5="Lightning Fast Checks" p="Rapid SSL and website health checks every 10 seconds for unparalleled reliability." />
      <Cards img={Teams} h5="Team Collaboration" p="Collaborate with your team to manage SSL certificates and website monitoring efficiently." />    
      <Cards img={Security} h5="Advanced Security" p="Protect your websites with our cutting-edge security features and constant vigilance." />    
      <Cards img={Graph} h5="Detailed Analytics" p="Gain valuable insights with our comprehensive analytics and reporting tools." />    
    </div>
  );
}

export default CardsList;




