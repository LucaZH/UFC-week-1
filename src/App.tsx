import Branding from "./components/Branding";
import Features from "./components/Features";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-violet-300 to-pink-200 p-10 pt-5 transition-opacity md:p-20 md:pt-5">
        <NavBar />
        <Hero />
      </div>
      <Branding />
      <div className="p-20 pt-10 md:p-20 md:pt-10">
        <Features />
      </div>
    </>
  );
}
export default App;
