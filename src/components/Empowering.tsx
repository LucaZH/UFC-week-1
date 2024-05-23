import CustomImage from "./ui/CustomImage";
import HText from "./ui/HText";

function Empowering() {
  return (
    <div className="md:flex gap-20 lg:flex">
      <div className="">
        <p className="absolute bg-fuchsia-500 blur-2xl w-20 h-30 animate-pulse delay-100 transition-all">
          |
        </p>
        <HText text="Empowering innovaion, one drone at time" />
        <p className="text-justify text-gray-500 text-lg mt-6 mb-6">
          "Empowering innovation, one drone at time" means that tougth our
          drones, we strive to the driver progress and creativity in various
          industries and applications.
        </p>
        <a href="#" className="text-fuchsia-600 underline mb-20">
          Learn more
        </a>
      </div>
      <div className="w-10/12">
        <CustomImage imgurl="/img/0218232_header_900.png" doted={true} />
      </div>
    </div>
  );
}
export default Empowering;
