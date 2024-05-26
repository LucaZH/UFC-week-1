import BlogNew from "./components/BlogNew";
import Branding from "./components/Branding";
import Caract from "./components/Caract";
import Empowering from "./components/Empowering";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import Testmonial from "./components/Testmonial";

function App() {
  return (
    <>
      <div className="mt-16 bg-[url('/img/hero-bg.png')] bg-no-repeat bg-cover p-10 pt-5 pb-0 md:p-20 md:pt-5">
        <NavBar />
        <Hero />
        <Branding />
      </div>
      <div className="flex flex-col p-10 gap-16 md:p-20 md:pt-10">
        <Features />
        <Empowering />
        <Caract />
        <Product />
      </div>
      <Testmonial />
      <div className="flex flex-col p-10 gap-16 md:p-20 md:pt-10">
        <BlogNew />
      </div>
      <Footer />
    </>
  );
}
export default App;
