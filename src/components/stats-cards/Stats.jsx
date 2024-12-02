import React from 'react'
import './Stats.css'

function Stats() {
  return (
    <div style={{margin:"100px",textAlign:"center"}}>
      <h2 style={{textAlign:"center",fontSize:"48px",fontWeight:"bold"}}>Comprehensive Website & SSL Monitoring <p>at</p> </h2>
      <span style={{color:"rgb(66,33,98)",fontSize:"48px",fontWeight:"bold"}}> Your Fingertips</span>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:"60px"}}>
        {/* //card-1 */}
        <div className='stats-card1'>
          <div  className="statscard-main">Websites Monitored<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(93,151,247)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe ml-auto h-5 w-5 text-primary-500 ms-5"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></div>
          <div className="statscard-count">10,000+</div>
          <p>SSL certificates continuously checked</p>
        </div>

          {/* //card-2 */}
          <div className='stats-card1'>
          <div  className="statscard-main">SSL Issues Detected<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(234,179,8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert ml-auto h-5 w-5 text-yellow-500 ms-5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg></div>
          <div className="statscard-count" >500+</div>
          <p>Expired or misconfigured certificates identified</p>
        </div>

          {/* //card-3 */}
          <div className='stats-card1'>
          <div  className="statscard-main" >Alerts Sent<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(168,85,247)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap ml-auto h-5 w-5 text-purple-500 ms-5"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div>
          <div  className="statscard-count" >5,000+</div>
          <p>Timely notifications for certificate problems</p>
        </div>

          {/* //card-4 */}
          <div className='stats-card1'>
          <div className="statscard-main">Uptime Guaranteed<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(34,197,94)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check ml-auto h-5 w-5 text-green-500 ms-5"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
          <div className="statscard-count">99.9%</div>
          <p>Reliable monitoring around the clock</p>
        </div>
        
      </div>
    </div>
  )
}

export default Stats

