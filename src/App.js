import Scroll from "./components/scroll";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import Recommend from "./components/recommend";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import scrollreveal from "scrollreveal";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <>
    <Scroll/>
    <Navbar/>
    <Hero/>
    <Services/>
    <Recommend/>
    <Testimonials/>
    <Footer/>
    </>
  );
}

export default App;
