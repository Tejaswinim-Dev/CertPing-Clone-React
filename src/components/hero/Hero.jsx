import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className='hero'>
            <div className='hero-main'>
                
                <h1>
                    <span style={{color:"black",width:"80%",textAlign:"center",lineHeight:"1"}}>Elevate Your Online Presence with </span>
                    <span className="gradient">Comprehensive Monitoring</span>
                </h1>
                <p>We offer complete SSL/TLS and website monitoring services to ensure your website is always secure, reliable, and performing at its best and stay ahead by keeping your website safe and running smoothly, giving you peace of mind.</p>
                </div>
                <Link to={'/signup'}><button className='login'>Start for Free 
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                    </svg> 
                </button></Link>
                <button className='demo'>Book a Demo 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                    <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                    </svg>
                </button>
              <div className='hero-img'>
                <img src="https://certping.com/_next/image?url=%2Fcertping_hero.png&w=1920&q=75" alt="" />
              </div>
        </div>
    )
}

export default Hero
