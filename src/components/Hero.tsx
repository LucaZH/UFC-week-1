import Btn from "./ui/Btn";
import "../assets/styles/play.sass";
function Hero() {
  return (
    <section className="md:flex h-full mt-20 mb-10">
      <div className="flex flex-col content-center gap-8">
        <h1 className="text-white text-4xl font-extrabold w-4/5 md:text-7xl">
          The Best View In The World From Your Site
        </h1>
        <p className="text-white w-4/5">
          Provides you the lastest online learning system and material that help
          your knowledge growing
        </p>
        <div className="flex items-center gap-6">
          <Btn text="Get Started" active={false} />
          <a href="#" className="flex items-center gap-2">
            <span className="play-btn"></span>
            <p className="text-white underline">Watch Video</p>
          </a>
        </div>
      </div>
      <img
        src="/img/Phantom 4 pro.webp"
        alt="Phantom 4 pro"
        className="w-auto h-96 scale-125"
      />
    </section>
  );
}
export default Hero;
