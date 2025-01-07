import React from 'react';
import Stack from "../../../assets/CardsImg/Stack.svg"
import Teams from "../../../assets/CardsImg/Teams.svg"
import Notification from "../../../assets/CardsImg/Notification.svg"
import Security from "../../../assets/CardsImg/Security.svg"
import './ManagementCards.css'


function ManagementCards(props) {
  return (
    <div className='cards'>
      <div>
        <img src={props.img} alt="" />
        </div>
        <div className='cards-content'>
        <h5>{props.h5}</h5>        
        <p>{props.p}</p>
        </div>
    </div>
  );
}

function ManagementCardsList() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 2fr))", // Dynamic grid based on screen width
      gap: "20px", // Add space between cards
      margin:"20px"

    }}>
      <ManagementCards img={Stack} h5="Unified Dashboard" p="Manage all your websites from a single, intuitive interface." />
      <ManagementCards img={Teams} h5="Team Collaboration" p="Invite team members and assign roles for efficient management."/>
      <ManagementCards img={Notification} h5="Custom Alerts." p="Set up personalized notifications for critical events" />
      <ManagementCards img={Security} h5="Security Monitoring" p="Keep track of SSL certificates and security vulnerabilities." />    
         
    </div>
  );
}

export default ManagementCardsList;