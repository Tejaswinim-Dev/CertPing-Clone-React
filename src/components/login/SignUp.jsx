import React from 'react';
import Navbar from '../navbar/Navbar';
import FooterRoute from '../footer/FooterRoute';
'./Login.css'


const SignUp = () => {
  return (
   <>
   <Navbar/>
      <div style={styles.container}>
      <h1 style={styles.title}>CertPing</h1>
      <p style={styles.subtitle}>Monitor Website Uptime & SSL Health</p>
      <form style={styles.form}>
        <label htmlFor="" style={styles.label}>Full Name</label>
        <div style={{border:"1px solid rgba(0,0,0,0.2)",height:"40px",margin:"5px 0px",borderRadius:"4px", width:"382px",display:"flex",marginBottom:"20px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user transform -translate-y-1/2 text-muted-foreground" style={styles.svg}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <input
          type="text"
          style={styles.input}
          required
        />
        </div>
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
        <p style={styles.terms}>
          By continuing, you agree to CertPing's{' '}
          <a href="/terms" style={styles.link}>
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" style={styles.link}>
            Privacy Policy
          </a>.
        </p>
        <button type="submit" style={styles.button}>
          Create account 
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4 ms-3"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </button>
        <p style={styles.login}>
          Already have an account?{' '}
          <a href="/login" style={styles.link}>
            Log in
          </a>
        </p>
      </form>
    </div>
    <FooterRoute/>
   </>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
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
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight:"900",
    background: 'linear-gradient(90deg, rgba(35,26,46,1) 20%, rgba(84,37,128,1) 30%, rgba(135,48,215,1) 100%)',
    WebkitBackgroundClip: 'text', // For Safari and Chrome
    backgroundClip: 'text', // Standard property
    color: 'transparent', // Makes the text itself transparent so the gradient shows
    width:'100%'
  },
  
  form: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    padding:"30px",
    border:"1px solid rgba(0,0,0,0.3)",
    borderRadius:"20px"
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
  terms: {
    fontSize: '14px',
    marginBottom: '15px',
    textAlign: 'left',
    color:"rgb(114,114,125)"
    
  },
  link: {
    color:"blue",
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

export default SignUp;


