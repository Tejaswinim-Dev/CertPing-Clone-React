import  { useState, } from 'react';
import axios from 'axios';
import './Performance.css'
import ResponseTimeDisplay from '../custom/responceTimeDisplay';


export function Performance() {
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState(null);



  const apiEndpoint = `https://certping.com/api/check-website?url=${url}`;


  const getDetails = () => {
    axios.get(`${apiEndpoint}`)
      .then((response) => {
        console.log(response.data)
        setResponse(response.data);
      })
      .catch((err) => {
        console.error("Can't fetch the API: " + err);
        setResponse(null); // Reset response if the API fetch fails
      });
}
  

  return(
    <div style={{ textAlign: 'center', padding: '100px',width:"80%",margin:"10px auto"}} id="check">
      <h2  className="performance-h2" style={{fontWeight:"bold",fontSize:"48px"}}>Check your Website Performance</h2>
      <p style={{color:"rgb(114,114,120)",width:"60%",margin:"20px auto"}}>Stay worry-free with the simplest monitoring service ever. Get instant alerts when your site goes down or your SSL certificate expires. No fuss, just peace of mind</p>
      <div style={{border:"2px solid rgba(0,0,0,0.2)",borderRadius:"30px" ,margin:" 10px auto",padding:"10px",width:"95%",display:"flex",justifyContent:"space-between",alignItems:"center",height:"70px"}}>
        <div style={{margin:"2px"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-4 top-1/2 transform -translate-y-1/2 text-primary/60 h-6 w-6 m-2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
      <input
        type="text"
        onKeyDown={(e)=>{if(e.key==="Enter"){
            getDetails()
        }}}
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)} 
        style={{border:"none",margin:"5px",textDecoration:"none",width:"710px",outline:"none"}}
        // Update the state as the user types
      />
      </div>

      <div>
      <button onClick={getDetails}  style={{ marginLeft: '20px',margin:"0px",border:"2px solid rgba(0,0,0,0.01)",borderRadius:"30px",backgroundColor:"black",color:"white",padding:"7px 20px" }}>
      

      Check Now
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(255,255,255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-5 w-5 m-2 "><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
    </button>
      </div>
      </div>

      {response && (
        <div className="website-data" style={{border:"2px solid rgba(0,0,0,0.2)",margin:"30px",padding:"35px",borderRadius:"20px"}}>

          {/* //Sub div-1 */}
          <div style={{ display: 'flex', justifyContent: 'space-between',margin:"10px",height:"45px" }}>
          
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-globe h-5 w-5 text-dark m-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
              <a href={response.certificate.url} style={{ textDecoration: 'none' }}>
                {response.certificate.url}
              </a>
            </div>
            <button style={{padding:"5px auto",borderRadius:"20px",border:'1px solid rgba(0,0,0,0.1)',backgroundColor:"white"}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-share2 h-4 w-4 mr-2 m-2"
              >
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
              </svg>
              Share
            </button>
          </div>

          {/* //Sub-div2 */}
          <div style={{display:"flex",justifyContent:"flex-start",margin:"10px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(114,114,123)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-4 w-4 m-2 ">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span style={{padding:"7px"}}>{response.timestamp}</span>
          
          </div> 
        {/* //sub-div3 */}
      <div style={{display:"flex",justifyContent:"space-between",margin:"10px"}}>
            <div style={{display:"flex",border:"1px solid rgba(0,0,0,0.1)",backgroundColor:"white",justifyContent:"space-between",alignItems:"center",width:"420px",borderRadius:"25px",height:"57.6px",padding:"12px"}}>
                  <div style={{display:"flex,"}}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wifi h-5 w-5 mb-2 me-2 text-success-500"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
                    <span>Website Status</span>
                  </div>
                  <div>
                    {response.certificate.isValid==="true"?(
                    <h6>Online</h6>):(
                    <span>Offline</span>
                    )
                    }
                  </div>
          </div>

      
            <div style={{display:"flex",border:"1px solid rgba(0,0,0,0.1)",backgroundColor:"white",justifyContent:"space-between",width:"420px",borderRadius:"25px",height:"57.6px",padding:"15px"}}>
                  <div style={{display:"flex"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock h-5 w-5 mb-2 me-2 text-success-500"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                      <span>SSL Certificate</span>
                  </div>
                <div>
                    {response?.certificate?.sslCertStatus ? (
                    <h6>{response.certificate.sslCertStatus}</h6>
                    ) : (
                    <h6>SSL Status Unavailable</h6>
                    )}

              </div>
              </div>
            </div>
            {/* //sub-div4 */}
            <ResponseTimeDisplay responseTime={response.uptime.responseTime.total} />
           


               {/* //sub-div5 */}
               <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px",margin:"10px" }}>
  {/* Redirect Count */}
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"30px",padding:"3px 12px"}}>
    <span style={{padding:"10px"}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgb(114,114,123)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-share2 h-5 w-5 text-gray-500 m-1 me-2"
      >
        <circle cx="18" cy="5" r="3"></circle>
        <circle cx="6" cy="12" r="3"></circle>
        <circle cx="18" cy="19" r="3"></circle>
        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
      </svg>
      Redirect Count
    </span>
    <span style={{color:"rgb(114,114,123)"}}>{response.uptime.redirectCount}</span>
  </div>

  {/* SSL Expiry */}
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"30px",padding:"3px 12px" }}>
  <span style={{border:"1px solid rgab(0,0,0,0.1)",borderRadius:"20px",padding:"10px"}}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(114,114,123)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-triangle-alert h-5 w-5 text-gray-500 m-1 me-2"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
      <path d="M12 9v4"></path>
      <path d="M12 17h.01"></path>
    </svg>
    SSL Expiry
  </span>
  <span style={{color:"rgb(114,114,123)"}}>{response.certificate.sslExpirationDate}</span>
</div>


  {/* Status Code */}
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"30px",padding:"3px 12px"}}>
    <span style={{border:"1px solid rgab(0,0,0,0.1)",borderRadius:"20px",padding:"10px"}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgb(114,114,123)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-satellite-dish h-5 w-5 text-gray-500 m-1 me-2"
      >
        <path d="M4 10a7.31 7.31 0 0 0 10 10Z"></path>
        <path d="m9 15 3-3"></path>
        <path d="M17 13a6 6 0 0 0-6-6"></path>
        <path d="M21 13A10 10 0 0 0 11 3"></path>
      </svg>
      Status Code
    </span>
    <span style={{color:"green"}}>{response.certificate.uptimeStatus}</span>
  </div>

  {/* SSL Provider */}
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"30px",padding:"3px 12px"}}>
    <span style={{border:"1px solid rgab(0,0,0,0.1)",borderRadius:"20px",padding:"10px"}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgb(114,114,123)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-lock h-5 w-5 text-gray-500 m-1 me-2"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
      SSL Provider
    </span>
    <span className='blurred-text'>Vercel</span>
  </div>

  {/* TLS Version */}
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"30px",padding:"3px 12px"}}>
    <span style={{border:"1px solid rgab(0,0,0,0.1)",borderRadius:"20px",padding:"10px"}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgb(114,114,123)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-lock h-5 w-5 text-gray-500 m-1 me-2"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
      TLS Version
    </span>
    <span className='blurred-text'>12.3</span>
  </div>

  {/* Strong Cipher */}
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"30px",padding:"3px 12px"}}>
    <span style={{border:"1px solid rgab(0,0,0,0.1)",borderRadius:"20px",padding:"10px"}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgb(114,114,123)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-shield h-5 w-5 text-gray-500 m-1 me-2"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
      </svg>
      Strong Cipher
    </span>
    <span className='blurred-text'>4</span>
  </div>

  {/* Extended Validation */}
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"30px",padding:"3px 12px"}}>
    <span style={{border:"1px solid rgab(0,0,0,0.1)",borderRadius:"20px",padding:"10px"}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgb(114,114,123)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-circle-check-big h-5 w-5 text-gray-500 m-1 me-2"
      >
        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
        <path d="m9 11 3 3L22 4"></path>
      </svg>
      Extended Validation
    </span>
    <span className='blurred-text'>1384</span>
  </div>

  {/* Self-Signed */}
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"30px",padding:"3px 12px"}}>
    <span style={{border:"1px solid rgab(0,0,0,0.1)",borderRadius:"20px",padding:"10px"}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgb(114,114,123)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-scroll-text h-5 w-5 text-gray-500 m-1 me-2"
      >
        <path d="M15 12h-5"></path>
        <path d="M15 8h-5"></path>
        <path d="M19 17V5a2 2 0 0 0-2-2H4"></path>
        <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path>
      </svg>
      Self-Signed
    </span>
    <span className='blurred-text'>36</span>
  </div>
</div>

<div style={{backgroundColor:"black",color:"white",textAlign:"center",padding:"30px",borderRadius:"30px"}}>
  <h3 style={{fontWeight:"bold",fontSize:"24px"}}>Unlock the Full Report and Stay Ahead.</h3>
  <p style={{fontSize:"16px",padding:"10px",width:"75%",marginLeft:"100px"}}>Get detailed insights, real-time downtime alerts, SSL expiration reminders, and seamless app integrations like Slack and more</p>
  <button style={{borderRadius:"20px",padding:"8px 24px",border:"none",fontSize:"14px"}}>Start For Free 
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4 m-1 me-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
  </button>
</div>
            </div>
        
            )}
     

     

    </div>

  );
}

export default Performance;





