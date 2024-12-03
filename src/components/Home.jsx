import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import CardMain from "./cards/CardMain";
import Graph from "./graph/Graph";
import Management from "./management/Management";
import MainPricing from "./pricing/MainPricing";
import Solution from "./solution/Solution";
import TestimonialMain from "./testimonial/testimonialmain/TestimonialMain";
import Footer from "./footer/Footer";
import Stats from "./monitor-cards/Stats";
import Performance from "./performance/performance";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import 'normalize.css';


function Home(){
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return(
    <div>
      <Navbar/>
      <Hero/>
      <Stats/>
      <div id="features">
      <CardMain/>
      </div>
      <Graph/>
      <Management/>
      <div id="check">
      <Performance/>
      </div>
      <div id="pricing">
      <MainPricing/>
      </div>
      <Solution/>
      <TestimonialMain/>
      <Footer/>
    </div>
  )
}

export default Home;