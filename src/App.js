import "./App.css";
import Header from "./Components/Header/Header.jsx"
import Hero from "./Components/Hero/Hero"
import Slider from "./Components/Slider/Slider"
import Virtual from "./Components/Virtual/Virtual"
import Product from "./Components/Product/Product"
function App() {
  return (
    <div className="App">
       <Header/>
       <Hero/>
       <Slider/> 
       <Virtual/>
       <Product/>
    </div>
  );
}

export default App;
