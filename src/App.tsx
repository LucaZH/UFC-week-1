import Branding from "./components/Branding";
import Caract from "./components/Caract";
import Empowering from "./components/Empowering";
import Features from "./components/Features";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Product from "./components/Product";

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-violet-300 to-pink-200 p-10 pt-5 transition-opacity md:p-20 md:pt-5">
        <NavBar />
        <Hero />
      </div>
      <Branding />
      <div className="flex flex-col p-10 gap-16 md:p-20 md:pt-10">
        <Features />
        <Empowering />
        <Caract />
        <Product />
      </div>
    </>
  );
}
export default App;
