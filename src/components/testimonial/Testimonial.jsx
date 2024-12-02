import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./Testimonial.css"; // Add your own CSS file for customization

const testimonials = [
    {
        initials: "AJ",
        name: "Alex Johnson",
        role: "CTO, TechCorp",
        image:"https://i.pravatar.cc/150?img=1",
        feedback: "CertPing has been a game-changer for our team. The real-time alerts and comprehensive monitoring have saved us countless hours and potential downtime."
    },
    {
        initials: "SL",
        name: "Sarah Lee",
        role: "DevOps Lead, StartupX",
        image:"https://i.pravatar.cc/150?img=2",
        feedback: "I can't imagine managing our websites without CertPing. The intuitive dashboard and detailed reports make my job so much easier."
    },
    {
        initials: "MC",
        name: "Michael Chen",
        role: "IT Manager, Global Retail",
       image:"https://i.pravatar.cc/150?img=3",
        feedback: "The peace of mind that comes with using CertPing is invaluable. Their support team is also top-notch, always ready to help when we need it."
    },
    {
        initials: "ER",
        name: "Emily Rodriguez",
        role: "Founder, TechStartup",
        image:"https://i.pravatar.cc/150?img=4",
        feedback: "CertPing's proactive monitoring has helped us maintain 99.9% uptime. It's an essential tool for any serious web-based business."
    }
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="marquee-container">
            <div className="marquee">
                {testimonials.map((testimonial, index) => (
                    
                    <div key={index} className="testimonial-card">
                         <p className="feedback">“{testimonial.feedback}”</p>
                        <div style={{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center"}}>
                        <div style={{display:"flex"}}>
                            <img  className="testimonial-img" src={testimonial.image} alt="" />
                            <div style={{display:"flex",flexDirection:"column",marginLeft:"10px",justifyContent:"center"}}>
                                <h3 className="names">{testimonial.name}</h3>
                                <p className="role">{testimonial.role}</p>
                            </div>
                            </div>
                            
                           <div>
                           <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote h-6 w-6 text-grey opacity-50 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></span>
                           </div>
                        </div>
                       
                    </div>
                ))}
                {/* Duplicate testimonials to ensure continuous scrolling */}
                {testimonials.map((testimonial, index) => (
                    <div key={`duplicate-${index}`} className="testimonial-card">
                        <p className="feedback">“{testimonial.feedback}”</p>
                        <div style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
                            <div style={{display:"flex"}}>
                            <p className="initials">{testimonial.initials}</p>
                           
                            <div style={{display:"flex",flexDirection:"column",marginLeft:"10px",justifyContent:"center"}}>
                                <h3 className="names">{testimonial.name}</h3>
                                <p className="role">{testimonial.role}</p>
                            </div>
                            </div>
                           <div>
                           <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote h-6 w-6 text-grey opacity-50 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg></span>
                           </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
