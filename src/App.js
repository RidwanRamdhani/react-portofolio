import Navbar from "../src/scenes/Navbar"
import DotGroup from "../src/scenes/DotGroup"
import Landing from "../src/scenes/Landing";
import MySkills from "../src/scenes/MySkills";
import Projects from "../src/scenes/Projects";
import Testimonials from "../src/scenes/Testimonials";
import Contact from "../src/scenes/Contact";
import Footer from "./scenes/Footer";  
import { useEffect, useState } from "react";
import LineGradient from "../src/components/LineGradient";
import useMediaQuery from "../src/hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width : 1060px)");

  // Test

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app- bg-deep-blue">
      <Navbar
        
       isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        { isAboveMediumScreens && ( 
          <DotGroup 
          selectedPage = {selectedPage} 
          setSelectedPage = {setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Testimonials />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
