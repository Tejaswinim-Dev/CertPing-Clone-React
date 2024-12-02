import React from 'react'
import CardsList from './Cards'

function CardMain() {
  return (
    <div style={{marginTop:"30px", display:"flex",flexDirection:"column",alignItems:"center"}} id="features" >
      <h2 style={{fontSize:"48px",fontWeight:"bold"}}>Elevate Your Web Presence with CertPing</h2>
      <p style={{fontSize:"20px",width:"672px",color:"rgb(114,114,123)",textAlign:"center"}}>Discover how our powerful features ensure your websites stay secure, reliable, and high-performing.</p>
      <CardsList/>
      
    </div>
  )
}

export default CardMain
