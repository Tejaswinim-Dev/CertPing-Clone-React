import './PricingCards.css'

function PricingCards({isYearly}) {

  const prices = {
    starter: isYearly ? 96 : 9.99,
    professional: isYearly ? 192 : 19.99,
    advanced: isYearly ? 480 : 49.99,
  };

  const billingText = isYearly ? '/year' : '/month';
  return (
    <div >
      <div className='pricingcard'>
      {/* //pricingcard-1 */}
      <div className='pricingcard-1'>
        <h5>Free Plan</h5>
        <p>Small businesses,developers</p>
        <div>
        <h2>Free</h2>
        <span style={{color:"rgb(114,114,123)"}} >5-minute intervals</span>
        
        <div className='cards-points'>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              Monitor up to 3 websites</span><br />
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              Email notification</span><br />
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              Basic uptime monitoring</span><br />
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              Public and Private Dashboards</span><br />
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              SSL expiry alerts</span><br />
        </div>
        </div>
        <button className='pricingcard-button' style={{marginTop:"120px"}}>Start for Free</button>
      </div>

      <div className='pricingcard-2'>
        <h5>Starter Plan</h5>
        <p>Freelancers,small teams</p>
        <div>
       <h2> ${prices.starter} <sub style={{ fontSize: '14px', color: 'rgb(114,114,123)' }}>{billingText}</sub></h2>
        <span style={{color:"rgb(114,114,123)"}} >1-minute intervals</span>
        <div className='cards-points'>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              10 monitors</span><br />
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              API acess for custom notification</span><br />
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              Alert via email & Slack</span><br />
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              Multi-user access</span><br />
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              Public and Private Dashboards</span><br />
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              SSL expiry alerts</span><br />
        </div>
       </div>
        <button className='pricingcard-button'style={{marginTop:"90px"}}>Start Monitoring Now</button>
      </div>

      <div className='pricingcard-3'>
        <span style={{backgroundColor:"rgba(0,0,0,0.9)",borderRadius:"10px",color:"white",padding:"7px",fontSize:"12px",fontWeight:"bold"}}>Most Popular</span>
        <h5 style={{marginTop:"10px"}}>Professional Plan</h5>
        <p>SMEs,fast-growing startups</p>
        <div>
        <h2>
            ${prices.professional} <sub style={{ fontSize: '14px', color: 'rgb(114,114,123)' }}>{billingText}</sub>
          </h2>
        <span style={{color:"rgb(114,114,123)"}}>5-minute intervals</span>
        <div className='cards-points'>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              50 monitors</span><br />
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              App integration for alerts</span><br />
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              Multi-user access</span><br />
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              Public and Private Dashboards</span><br />
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              Bulk imports your domian from domian providers</span><br />
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              SSL expiry alerts</span><br />
        </div>
       </div>
        <button className='pricingcard-button3'>Start Monitoring Now</button>
      </div>

      <div className='pricingcard-4'>
        <h5>Advanced Plan</h5>
        <p>Agencies,enterprises with high demands</p>
        <div>
        <h2>
            ${prices.advanced} <sub style={{ fontSize: '14px', color: 'rgb(114,114,123)' }}>{billingText}</sub>
          </h2>
        <span style={{color:"rgb(114,114,123)"}} >30-second intervals</span>
        <div className='cards-points'>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              150 monitors</span><br />
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>Anomaly detection</span><br />
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              Multi-user access</span><br />
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              Public and Private Dashboards</span><br />
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              SSL expiry alerts</span><br />
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              Bulk imports your domian from domian providers</span><br />
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check h-5 w-5 text-dark mr-2 flex-shrink-0 m-1"><path d="M20 6 9 17l-5-5"></path></svg>
              Priority support</span><br />
            
        </div>
       </div>
        <button className='pricingcard-button'>Start Monitoring Now</button>
      </div>
      </div>
    </div>
  )
}

export default PricingCards
