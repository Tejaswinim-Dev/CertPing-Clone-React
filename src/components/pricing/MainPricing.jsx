import { useState } from 'react';
import PricingCards from './pricingcards/PricingCards';

function MainPricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div id="pricing">
      <h1 style={{ textAlign: 'center', fontSize: '48px', fontWeight: 'bold' }}>
        Simple, Transparent Pricing
      </h1>
      <p style={{ textAlign: 'center', color: 'rgb(114,114,123)' }}>
        Choose the plan that fits your needs.
      </p>

      {/* Toggle Buttons */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button
          onClick={() => setIsYearly(false)}
          style={{
            padding: '6px 10px',
            backgroundColor: isYearly ? '#f0f0f0' : 'black',
            color: isYearly ? '#000' : 'white',
            border: 'none',
            borderRadius: '20px',
            marginRight: '10px',
            cursor: 'pointer',

          }}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsYearly(true)}
          style={{
            padding: '6px 10px',
            backgroundColor: isYearly ? 'black' : '#f0f0f0',
            color: isYearly ? '#fff' : '#000',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
          }}
        >
          Yearly
          <span style={{padding:"5px 10px",fontSize:"12px",backgroundColor:"white",borderRadius:"20px",color:"black",marginLeft:"9px",fontWeight:"bold"}}>Save 20%</span>
        </button>
      </div>

      {/* Pricing Cards */}
      <PricingCards isYearly={isYearly} />
    </div>
  );
}

export default MainPricing;

