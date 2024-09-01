import Home from "./components/home/home";
import Header from "./components/layout/header/header";
import Aboutme from "./components/section/Aboutme";
import Expertise from "./components/section/Expertise";
import Portfolio from "./components/section/Portfolio";
import Testimonial from "./components/section/Testimonial";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Expertise />
      <Aboutme />
      <Portfolio />
      <Testimonial />
    </>
  );
}

export default App;
