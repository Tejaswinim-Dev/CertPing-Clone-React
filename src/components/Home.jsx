import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import CardMain from "./cards/CardMain";
import Graph from "./graph/Graph";
import Management from "./management/Management";
import MainPricing from "./pricing/MainPricing";
import Solution from "./solution/Solution";
import TestimonialMain from "./testimonial/testimonialmain/TestimonialMain";
import Footer from "./footer/Footer";
import Stats from "./stats-cards/Stats";
import Performance from "./performance/Performance";

function Home(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Stats/>
      <CardMain/>
      <Graph/>
      <Management/>
      <Performance/>
      <MainPricing/>
      <Solution/>
      <TestimonialMain/>
      <Footer/>
    </div>
  )
}

export default Home;