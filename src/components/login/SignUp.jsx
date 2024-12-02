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
        <input
          type="text"
          placeholder="Full Name"
          style={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          required
        />
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
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    margin: '0 0 10px',
    color: '#333',
    textAlign:"center"
  },
subtitle : {
    fontSize: '18px',
    marginBottom: '20px',
    textAlign: 'center',
    fontWeight:"bolder",
    background: 'linear-gradient(90deg, rgba(35,26,46,1) 20%, rgba(84,37,128,1) 30%, rgba(135,48,215,1) 100%)',
    WebkitBackgroundClip: 'text', // For Safari and Chrome
    backgroundClip: 'text', // Standard property
    color: 'transparent', // Makes the text itself transparent so the gradient shows
  },
  
  form: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
  },
  terms: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '15px',
    textAlign: 'left',
  },
  link: {
    color: '#5b34d7',
    textDecoration: 'none',
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
    fontSize: '16px',
    color: '#666',
    marginTop: '15px',
  },
};

export default SignUp;


