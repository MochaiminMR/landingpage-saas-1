
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/components/style/style.css";
import { Hero } from "./components/Fagment/Hero/Hero";
import { Mockup } from "./components/Fagment/Mockup/Mockup";
import { Info } from "./components/Fagment/Info/Info";
import { InfoSc } from "./components/Fagment/Info/InfoSc";
import { InfoTr } from "./components/Fagment/Info/InfoTr";
import Testimoni from "./components/Fagment/Testimoni/Testimoni";
import { Foot } from "./components/Element/Footer/Foot";

function App() {
  

  return (
    <div className="w-auto ">
      
        <Hero></Hero>
        <Mockup></Mockup>
        <Info></Info>
    <InfoSc></InfoSc>
    <InfoTr></InfoTr>
        <Testimoni></Testimoni>
        <Foot></Foot>

    </div>
  );
}

export default App
