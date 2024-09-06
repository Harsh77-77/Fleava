import Header from "./Components/Header"
import Intro from "./Components/Intro";
import ScrollingImage from "./Components/ScrollingImage";
import Expertice from "./Components/Expertice";
import Industry from "./Components/Industry";
import Img from "./Components/Img";
import Feature from "./Components/Feature";
import Talk from "./Components/Talk";
import LocomotiveScroll from "locomotive-scroll"

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div>
        <div className="bg-black ">
        <Header/>
        <Intro/>
        <ScrollingImage/>
        <Expertice/>
        </div>
        <div className="bg-[#a1b0a9]"><Industry/></div>
        <Img/>
        <Feature/>
        <Talk/>
      </div>
    </>
  )
}

export default App
