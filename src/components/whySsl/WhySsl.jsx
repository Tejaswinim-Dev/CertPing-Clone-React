import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import FooterRoute from "../footer/FooterRoute";

const liStyle = {
    padding: '5px 0px'
}

export function WhySsl() {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const getContentStyle = (index) => ({
        maxHeight: activeIndex === index ? "200px" : "0",
        opacity: activeIndex === index ? "1" : "0",
        overflow: "hidden",
        transition: "max-height 0.5s ease, opacity 0.5s ease",
        padding: activeIndex === index ? "15px" : "0 15px",
    });
    
    

    const headerStyle = {
        background: "#ffffff",
        border: "none",
        width: "100%",
        textAlign: "left",
        padding: "15px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "background 0.3s ease",
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between'

    };

    

    const ulStyle = {
        listStyle: "disc",
        paddingLeft: "20px",
    };

    const liStyle = {
        marginBottom: "5px",
        transition: "text-decoration 0.3s ease",
        cursor: "pointer",
    };

    return (
        <>
        <Navbar/>
        <div style={{ padding: '0px 380px' }}>
            <div style={{ fontWeight: 'bold', fontSize: '30px', paddingTop: '10px' }}>
                The Critical Importance of SSL Certificates and HTTPS in Web Security
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '25px' }}>
                <div style={{ display: 'flex', marginRight: '10px', padding: '0px 10px', justifyContent: "center", justifyItems: 'center', alignItems: 'center', fontSize: '10px', fontWeight: 'bold', backgroundColor: 'rgb(0 0 0 / 5%)', borderRadius: '30px', height: 'max-content' }}>
                    <span>Web Security</span>
                </div>
                <div style={{ display: 'flex', marginRight: '10px', padding: '0px 10px', justifyContent: "center", justifyItems: 'center', alignItems: 'center', fontSize: '10px', fontWeight: 'bold', backgroundColor: 'rgb(0 0 0 / 5%)', borderRadius: '30px', height: 'max-content' }}>
                    <span>
                        SSL</span></div>
                <div style={{ display: 'flex', marginRight: '10px', padding: '0px 10px', justifyContent: "center", justifyItems: 'center', alignItems: 'center', fontSize: '10px', fontWeight: 'bold', backgroundColor: 'rgb(0 0 0 / 5%)', borderRadius: '30px', height: 'max-content' }}>
                    <span>HTTPS</span></div>
            </div>
            <div style={{ marginTop: '25px', fontSize: '1.08rem', color: 'hsl(240deg 3.83% 46.08%)' }}>
                <span>In the ever-evolving digital landscape, ensuring the security of your website is not just important—it's critical. SSL certificates and HTTPS play a pivotal role in protecting your users' data, building trust, and maintaining your online reputation. This comprehensive guide explores why they're essential and how CertPing can help you stay secure in an increasingly threatening cyber environment.</span>
            </div>
            <div style={{ fontWeight: 'bold', fontSize: '27px', paddingTop: '10px' }}>
                Understanding HTTP vs HTTPS      </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '10px' }}>
                To grasp the importance of HTTPS and SSL certificates, we first need to understand the difference between HTTP and HTTPS.
            </div>
            <div style={{ marginTop: '25px', display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '50%', marginRight: '20px', border: 'black solid 0.5px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '15px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(239 68 68/var(--tw-text-opacity,1))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x mr-2 text-red-500"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
                        <div style={{ fontWeight: '580', fontSize: '1.5rem', paddingLeft: '10px' }}>
                            <span>HTTP (Hypertext Transfer Protocol)</span>
                        </div>

                    </div>
                    <div>
                        <ul>
                            <li>Data is sent in plaintext</li>
                            <li>Vulnerable to eavesdropping and man-in-the-middle attacks</li>
                            <li>No data integrity checks</li>
                            <li>No authentication of the website's identity</li>
                        </ul>
                    </div>
                </div>
                <div style={{ width: '50%', marginLeft: '20px', border: 'black solid 0.5px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '15px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(34 197 93)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big mr-2 text-green-500"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div style={{ fontWeight: '580', fontSize: '1.5rem', paddingLeft: '10px' }}>
                            <span>HTTP (Hypertext Transfer Protocol)</span>
                        </div>

                    </div>
                    <div>
                        <ul>
                            <li>Data is encrypted in transit</li>
                            <li>Protects against eavesdropping and tampering</li>
                            <li>Ensures data integrity</li>
                            <li>Authenticates the website's identity</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="video-container">
                <video
                    preload="none"
                    autoPlay
                    muted
                    width='100%'
                    loop
                    className="rounded-lg mb-4 w-full"
                >
                    <source src="https://certping.com/animations-ssl/http-https.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '10px' }}>
                As illustrated above, HTTPS provides a secure connection, protecting sensitive information from potential eavesdroppers or attackers. This is achieved through the use of SSL/TLS protocols and certificates.
            </div>
            <div style={{ fontWeight: 'bold', fontSize: '27px', marginTop: '30px' }}>
                The Role of SSL Certificates
            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '10px' }}>
                SSL (Secure Sockets Layer) certificates are small data files that digitally bind a cryptographic key to an organization's details. When installed on a web server, it activates the padlock and the https protocol, allowing secure connections from a web server to a browser.
            </div>
            <div style={{ marginTop: '25px', display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '33.33%', height: 'max-content', marginRight: '20px', border: 'black solid 0.5px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '15px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield mr-2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                        <div style={{ fontWeight: '580', fontSize: '1.5rem', paddingLeft: '10px' }}>
                            <span>Encryption</span>
                        </div>

                    </div>
                    <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', padding: '15px' }}>
                        <span>SSL certificates encrypt data in transit, safeguarding sensitive information like login credentials, payment details, and personal data from interception.</span>
                    </div>
                </div>
                <div style={{ width: '33.33%', marginLeft: '20px', border: 'black solid 0.5px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '15px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock mr-2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        <div style={{ fontWeight: '580', fontSize: '1.5rem', paddingLeft: '10px' }}>
                            <span>Authentication</span>
                        </div>

                    </div>
                    <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', padding: '15px' }}>
                        <span>
                            SSL certificates verify your website's identity, assuring visitors they're connecting to the legitimate site and not a malicious impersonator.
                        </span>
                    </div>
                </div>
                <div style={{ width: '33.33%', marginLeft: '20px', border: 'black solid 0.5px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '15px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big mr-2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                        <div style={{ fontWeight: '580', fontSize: '1.5rem', paddingLeft: '10px' }}>
                            <span>Trust</span>
                        </div>

                    </div>
                    <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', padding: '15px' }}>
                        <span>
                            Websites with valid SSL certificates display the padlock icon in the browser, instilling confidence in visitors and improving overall user trust.
                        </span>
                    </div>
                </div>
            </div>
            <div style={{ fontWeight: 'bold', fontSize: '27px', marginTop: '30px' }}>
                SSL Certificate Expiration: A Hidden Danger
            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '10px' }}>
                Even if you've implemented SSL, the job isn't done. SSL certificates have expiration dates, and allowing them to expire can be just as dangerous as not having one at all.
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '25px', width: '100%' }}>
                <div style={{ width: '0.5%', height: 'auto', backgroundColor: '#ffae22', color: '#ffae22' }}>-</div>
                <div style={{ width: '99.5%', height: '100%', backgroundColor: '#fef9c3' }}>
                    <div style={{ fontWeight: 'bold', color: '#a16206', fontSize: '0.85rem', padding: '10px' }}>
                        Risks of Expired SSL Certificates:
                    </div>
                    <div style={{ fontWeight: 'lighter', color: '#a16206', fontSize: '0.85rem', padding: '10px' }}>
                        <ul>
                            <li>Site outages and downtime</li>
                            <li>Loss of customer trust</li>
                            <li>Decreased customer retention</li>
                            <li>Potential security vulnerabilities</li>
                            <li>Negative impact on SEO rankings</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '25px' }}>
                Even if you've implemented SSL, the job isn't done. SSL certificates have expiration dates, and allowing them to expire can be just as dangerous as not having one at all.
            </div>
            <div style={{ fontWeight: 'bold', fontSize: '27px', marginTop: '30px' }}>
                The Role of DNS in Web Security
            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '25px' }}>
                Understanding DNS (Domain Name System) is crucial for comprehending web security. DNS translates human-readable domain names into IP addresses, forming the backbone of internet navigation.
            </div>
            <div className="video-container">
                <video
                    preload="none"
                    autoPlay
                    muted
                    width='100%'
                    loop
                    className="rounded-lg mb-4 w-full"
                >
                    <source src="https://certping.com/animations-ssl/ssl-striping.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '25px' }}>
                The animation above illustrates the DNS resolution process. Securing this process is vital for preventing DNS-based attacks and ensuring users reach your legitimate website. SSL certificates play a role here too, as they help verify that users are connecting to the correct server when they visit your domain.
            </div>
            <div style={{ fontWeight: 'bold', fontSize: '27px', marginTop: '30px' }}>
                How CertPing Keeps You Secure
            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '25px' }}>
                CertPing offers comprehensive monitoring of your website's SSL certificate status, ensuring you're always protected:
            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '25px' }}>
                <ul>
                    <li>Site outages and downtime</li>
                    <li>Loss of customer trust</li>
                    <li>Decreased customer retention</li>
                    <li>Potential security vulnerabilities</li>
                    <li>Negative impact on SEO rankings</li>
                </ul>
            </div>
            <div style={{ backgroundColor: '#18181a', color: 'white', borderRadius: '10px' }}>
                <div style={{ padding: '15px', display: 'flex', flexDirection: 'row', alignItems: "center", color: "white" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock mr-2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <div style={{ fontWeight: '580', fontSize: '1.5rem', paddingLeft: '10px' }}>
                        <span>Authentication</span>
                    </div>
                </div>
                <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', padding: '15px' }}>
                    With CertPing, you'll never have to worry about unexpected SSL certificate expirations or security vulnerabilities. Our proactive monitoring ensures your website stays secure 24/7, giving you peace of mind and allowing you to focus on your core business.
                </div>
                <a href="">
                    <button style={{ margin: '15px', padding: '5px', backgroundColor: 'white', border: 'none', borderRadius: '10px' }}>
                        <span style={{ fontWeight: '100', fontSize: '12px', padding: '0px 10px' }}>Get Started with CertPing</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </button>
                </a>
            </div>
            <div style={{ fontWeight: 'bold', fontSize: '27px', marginTop: '30px' }}>
                Best Practices for SSL and HTTPS Implementation
            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '25px' }}>
                To maximize the security benefits of SSL certificates and HTTPS, follow these best practices:
            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '25px' }}>
                <ol>
                    <li style={liStyle}>Use strong SSL/TLS protocols (TLS 1.2 or higher)
                    </li>
                    <li style={liStyle}>Implement HSTS (HTTP Strict Transport Security) to force HTTPS connections
                    </li>
                    <li style={liStyle}>Regularly audit your SSL configuration for vulnerabilities
                    </li>
                    <li style={liStyle}>Keep your SSL certificates up to date and renew them before expiration
                    </li>
                    <li style={liStyle}>Use a reputable Certificate Authority (CA) for your SSL certificates
                    </li>
                    <li style={liStyle}>Implement proper redirect rules to ensure all HTTP traffic is redirected to HTTPS
                    </li>
                    <li style={liStyle}>Regularly scan your website for mixed content issues
                    </li>
                    <li style={liStyle}>Consider using OCSP stapling to improve SSL/TLS handshake performance
                    </li>
                    <li style={liStyle}>Implement Content Security Policy (CSP) headers to prevent XSS attacks
                    </li>
                </ol>
            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '25px' }}>
                By following these practices and using a monitoring service like CertPing, you can ensure that your website remains secure and trustworthy for your visitors.
            </div>
            <div style={{ fontWeight: 'bold', fontSize: '27px', marginTop: '30px' }}>
                The Future of Web Security: Beyond SSL
            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '25px' }}>
                While SSL certificates and HTTPS are crucial for current web security, the landscape is constantly evolving. Here are some emerging trends and technologies to keep an eye on:
            </div>

            <div style={{ marginTop: '25px', display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '50%', height: 'auto', marginRight: '20px', border: 'black solid 0.5px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '15px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                        <div style={{ fontWeight: '580', fontSize: '1.5rem', paddingLeft: '10px' }}>
                            <span>Certificate Transparency
                            </span>
                        </div>

                    </div>
                    <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', padding: '15px' }}>
                        <span>Certificate Transparency is an open framework for monitoring and auditing SSL certificates. It helps detect mistakenly issued or malicious certificates quickly.

                        </span>          </div>
                </div>
                <div style={{ width: '50%', height: 'auto', marginLeft: '20px', border: 'black solid 0.5px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '15px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                        <div style={{ fontWeight: '580', fontSize: '1.5rem', paddingLeft: '10px' }}>
                            <span>DANE (DNS-based Authentication of Named Entities)
                            </span>
                        </div>

                    </div>
                    <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', padding: '15px' }}>
                        <span>
                            DANE allows the association of SSL certificates directly with DNS names, providing an additional layer of security against certain types of attacks.</span>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '25px', display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '50%', marginRight: '20px', height: 'auto', border: 'black solid 0.5px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '15px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                        <div style={{ fontWeight: '580', fontSize: '1.5rem', paddingLeft: '10px' }}>
                            <span>Post-Quantum Cryptography
                            </span>
                        </div>

                    </div>
                    <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', padding: '15px' }}>
                        <span>
                            With the advent of quantum computing, researchers are developing new cryptographic algorithms that can withstand attacks from quantum computers.
                        </span>
                    </div>
                </div>
                <div style={{ width: '50%', marginLeft: '20px', border: 'black solid 0.5px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '15px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                        <div style={{ fontWeight: '580', fontSize: '1.5rem', paddingLeft: '10px' }}>
                            <span>Automated Certificate Management
                            </span>
                        </div>

                    </div>
                    <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', padding: '15px' }}>
                        <span>
                            Services like Let's Encrypt have popularized automated certificate issuance and renewal. This trend is likely to continue, making SSL more accessible and easier to manage.
                        </span>
                    </div>
                </div>
            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '25px' }}>
                As these technologies develop, CertPing will continue to evolve its services to ensure your website remains at the forefront of web security.
            </div>
            <div style={{ fontWeight: 'bold', fontSize: '27px', marginTop: '30px' }}>
                SSL Certificate Rotation: A Critical Security Practice

            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '25px' }}>
                Certificate rotation, the practice of replacing existing certificates with new ones, is an important aspect of maintaining robust web security. Here's why it matters:
            </div>





            <div
      style={{
        borderBottom: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: "none",
        width: "100%",
        margin: "20px auto",
      }}
    >
      <div style={{ borderBottom: "1px solid #ddd" }}>
        <button
          style={headerStyle}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = "underline";
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = "none";
          }}
          onClick={() => toggleAccordion(0)}
        >
          <span>Domain Validation (DV) Certificates</span>
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
            className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
            style={{
              transform: activeIndex === 0 ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>

        <div style={getContentStyle(0)}>
          <p>
            Domain Validation certificates are the most basic type of SSL certificate. They only verify that the
            applicant has control over the domain. These are quick to obtain and ideal for blogs or informational
            websites.
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}>Fastest issuance time</li>
            <li style={liStyle}>Lowest level of validation</li>
            <li style={liStyle}>Suitable for non-commercial websites</li>
          </ul>
        </div>
      </div>

      <div style={{ borderBottom: "1px solid #ddd" }}>
        <button
          style={headerStyle}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = "underline";
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = "none";
          }}
          onClick={() => toggleAccordion(1)}
        >
          Organization Validation (OV) Certificates
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
            className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
            style={{
              transform: activeIndex === 1 ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        <div style={getContentStyle(1)}>
          <p>
            Organization Validation certificates verify the organization's identity in addition to domain ownership.
            These are suitable for commercial websites and provide a higher level of trust.
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}>Moderate validation process</li>
            <li style={liStyle}>Verifies organization details</li>
            <li style={liStyle}>Ideal for e-commerce and business websites</li>
          </ul>
        </div>
      </div>

      <div>
        <button
          style={headerStyle}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = "underline";
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = "none";
          }}
          onClick={() => toggleAccordion(2)}
        >
          Extended Validation (EV) Certificates
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
            className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"
            style={{
              transform: activeIndex === 2 ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
        <div style={getContentStyle(2)}>
          <p>
            Extended Validation certificates offer the highest level of validation and trust. They require a thorough
            vetting of the organization and are ideal for financial institutions or large e-commerce sites.
          </p>
          <ul style={ulStyle}>
            <li style={liStyle}>Rigorous validation process</li>
            <li style={liStyle}>Highest level of trust</li>
            <li style={liStyle}>
              Displays organization name in browser address bar (in some browsers)
            </li>
          </ul>
        </div>
      </div>
    </div>




            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '25px' }}>
                By incorporating regular certificate rotation into your security practices and leveraging CertPing's monitoring capabilities, you can significantly enhance your website's security posture.
            </div>
            <div style={{ fontWeight: 'bold', fontSize: '27px', marginTop: '30px' }}>
                The SEO Benefits of SSL and HTTPS
            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '25px' }}>
                Beyond security, implementing SSL and HTTPS can have significant benefits for your website's search engine optimization (SEO). Here's how:
            </div>
            <div style={{ marginTop: '25px', display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '50%', height: 'max-content', marginRight: '20px', border: 'black solid 0.5px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '15px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                        <div style={{ fontWeight: '580', fontSize: '1.5rem', paddingLeft: '10px' }}>
                            <span>Google Ranking Factor</span>
                        </div>

                    </div>
                    <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', padding: '15px' }}>
                        <span>Google has confirmed that HTTPS is a ranking signal. While its impact may be small, it can be the tiebreaker between two equal sites.</span>
                    </div>
                </div>
                <div style={{ width: '50%', marginLeft: '20px', border: 'black solid 0.5px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '15px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                        <div style={{ fontWeight: '580', fontSize: '1.5rem', paddingLeft: '10px' }}>
                            <span>Improved User Experience</span>
                        </div>
                    </div>
                    <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', padding: '15px' }}>
                        <span>
                            HTTPS sites load faster and provide a better user experience, which indirectly benefits SEO as user experience is a crucial ranking factor.
                        </span>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '25px', display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '50%', height: 'max-content', marginRight: '20px', border: 'black solid 0.5px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '15px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                        <div style={{ fontWeight: '580', fontSize: '1.5rem', paddingLeft: '10px' }}>
                            <span>Increased Trust
                            </span>
                        </div>

                    </div>
                    <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', padding: '15px' }}>
                        <span>Users are more likely to trust and engage with secure sites, leading to lower bounce rates and higher dwell times - both positive signals for search engines.</span>          </div>
                </div>
                <div style={{ width: '50%', marginLeft: '20px', border: 'black solid 0.5px', borderRadius: '8px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '15px', display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                        <div style={{ fontWeight: '580', fontSize: '1.5rem', paddingLeft: '10px' }}>
                            <span>Referral Data Preservation
                            </span>
                        </div>

                    </div>
                    <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', padding: '15px' }}>
                        <span>
                            HTTPS to HTTPS referrals preserve referral data in analytics, providing more accurate insights for SEO strategies.
                        </span>
                    </div>
                </div>
            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '25px' }}>
                By ensuring your site is always served over HTTPS with a valid SSL certificate, you're not only securing your users' data but also potentially boosting your search engine rankings.
            </div>
            <div style={{ fontWeight: 'bold', fontSize: '27px', marginTop: '30px' }}>
                Conclusion: Secure Your Digital Future with CertPing
            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '25px' }}>
                In today's digital landscape, SSL certificates and HTTPS are not just security features; they're essential components of a trustworthy and professional online presence. From protecting sensitive data and building user trust to improving SEO and preparing for future security challenges, the benefits are clear and significant.
            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', paddingTop: '25px' }}>
                However, implementing SSL and maintaining its effectiveness is an ongoing process. It requires vigilance, regular updates, and a proactive approach to security. This is where CertPing shines, offering:
            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem', padding: '25px 0px' }}>
                <ul>
                    <li>Continuous monitoring of your SSL certificates</li>
                    <li>Real-time alerts for impending expirations</li>
                    <li>Insights into your SSL configuration and potential vulnerabilities</li>
                    <li>Support for businesses of all sizes, from solo entrepreneurs to large enterprises</li>
                    <li>Easy integration with your existing security workflows
                    </li>
                </ul>
            </div>
            <div style={{ fontWeight: 'lighter', fontSize: '0.85rem' }}>
                Don't leave your web security to chance. With cyber threats evolving constantly, staying on top of your website's security is more important than ever. Let CertPing be your partner in maintaining a secure, trustworthy, and high-performing online presence.
            </div>
            <a href="">
                <button style={{ margin: '25px 0px', padding: '10px 20px', color: 'white', backgroundColor: 'black', border: 'none', borderRadius: '10px' }}>
                    <span style={{ fontWeight: '100', fontSize: '12px', padding: '0px 10px' }}>Get Started with CertPing</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
            </a>
        </div>
        <FooterRoute/>
        </>
    );
}

export default WhySsl;