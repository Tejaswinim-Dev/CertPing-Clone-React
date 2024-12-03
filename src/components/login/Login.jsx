import React from "react";
import Navbar from "../navbar/Navbar";
import FooterRoute from "../footer/FooterRoute";

const Login = () => {
  return (
   <>
   <Navbar/>
    <div style={styles.container}>
    <h3 style={styles.title}>CertPing</h3>
    <span  style={styles.subtitle}>Monitor Website Uptime & SSL Health</span>
    <form action="" style={styles.form}>
    <label htmlFor="" style={styles.label}>Email</label>
        <div style={{border:"1px solid rgba(0,0,0,0.2)",height:"40px",margin:"5px 0px",borderRadius:"4px", width:"382px",display:"flex",marginBottom:"20px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail transform -translate-y-1/2 text-muted-foreground" style={styles.svg}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
        <input
          type="email"
          style={styles.input}
          required
        />
        </div>
        <label htmlFor="" style={styles.label}>Password</label>
        <div style={{border:"1px solid rgba(0,0,0,0.2)",height:"40px",margin:"5px 0px",borderRadius:"4px", width:"382px",display:"flex",marginBottom:"20px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" style={styles.svg}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        <input
          type="password"
          style={styles.input}
          required
        />
        </div>
        <button type="submit" style={styles.button}>
          Login
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4 ms-3"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </button>
        <p style={styles.login}>
          Don't have an account{' '}
          <a href="/signup" style={styles.link}>
          Sigup?
          </a>
        </p>
        </form>
         
    </div>
    <FooterRoute/>
   </>
  );
};

export default Login;

const styles = {
  container: {
    maxWidth: '480px',
    margin: '50px auto',
    padding: '20px',
  
  },
  title: {
    fontSize: '36px',
    fontWeight: '900',
    margin: '0 0 10px',
    color: '#333',
    textAlign:"center"
  },
subtitle : {
    fontSize: '18px',
    fontWeight:"900",
    background: 'linear-gradient(90deg, rgba(35,26,46,1) 20%, rgba(84,37,128,1) 30%, rgba(135,48,215,1) 100%)',
    WebkitBackgroundClip: 'text', // For Safari and Chrome
    backgroundClip: 'text', // Standard property
    color: 'transparent', // Makes the text itself transparent so the gradient show
    marginLeft:"25px"
  },
  
  form: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: '#fff',
    padding:"30px",
    border:"1px solid rgb(0,0,0,0.3)",
    borderRadius:"20px",
    marginTop:"30px"
  },
  input: {
    fontSize: '14px',
    border: 'none',
    outline: 'none',
   height:"100%",
   marginLeft:"10px",

  },
  label:{
    textAlign:"start",
    fontSize:'14px',
    marginBottom:"3px"


  },
  link: {
    color:'blue',
    textDecoration:"none"
    
  },
  
  svg:{
    marginLeft:"10px",
    marginTop:'8px',
    color:'rgb(114,114,120)'
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '12px 15px',
    fontSize: '14px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
  },
  login: {
    fontSize: '14px',
    color: '#666',
    marginTop: '15px',
  },
};



