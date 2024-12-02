import React from 'react'
import './Graph.css'
import AlternateCharts from './MyChart/AlternativeCharts'

function Graph() {
  return (
    <div className='graph-main'>
      <div className='graph-main1'>
        <h2>Powerful Insights at Your Fingertips</h2>
        <p>Our advanced monitoring system provides real-time insights and proactive alerts to keep your websites running smoothly. Visualize your website's performance with our intuitive dashboard.</p>
        <div className='graph-main11'>
            <span><svg className="w-2 h-2 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" height="15px" width="15px"></path></svg>Real-time uptime monitoring</span><br />
            <span><svg className="w-2 h-2 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" height="15px" width="15px"></path></svg> SSL certificate expiration alerts</span><br />
            <span><svg className="w-2 h-2 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"height="15px" width="15px"></path></svg>Performance metrics tracking</span><br />
            <span> <svg className="w-2 h-2 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"height="15px" width="15px"></path></svg>Custom alert thresholds</span><br />
            <span><svg className="w-2 h-2 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"height="15px" width="15px"></path></svg>Multi-location checking</span><br />
            <button>Explore Dashboard Features</button>
        </div>
     </div>
      <div className='graph-main2'>
        <div>
            <h5>Performance Overview</h5>
            <p>Monitor your website's uptime and response time</p>

        </div>
        <div>
           <AlternateCharts/>
        </div>
      </div>
    </div>
  )
}

export default Graph
