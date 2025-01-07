import React from 'react';
import './Management.css';
import ManagementCardsList from './Management/ManagementCards';
import Certping from '../../assets/Hero/certping_dash_2.webp'

function Management() {
  return (
    <div className="management-container">
      <div className="management-content">
        <h1 className="management-title">Centralized Website Monitoring Management</h1>
        <p className="management-description">Manage all your websites' monitoring effortlessly from our intuitive web interface. Stay on top of your entire web infrastructure with just a few clicks.</p>
        <div>
          <ManagementCardsList />
          <button>Explore the Dashboard</button>
        </div>
      </div>
      <div className='management-image'>
       <img src={Certping} alt="" />
       <p>Our intuitive dashboard provides both overview and detailed insights into your website's performance and security.</p>
      </div>
    </div>
  );
}

export default Management;

