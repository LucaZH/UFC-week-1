import CustomImage from "./ui/CustomImage";
import HText from "./ui/HText";

function Empowering() {
  return (
    <div className="md:flex gap-20 lg:flex">
      <div className="w-auto">
        <HText text="Empowering innovaion, one drone at time" />
        <p className="text-justify text-gray-500 text-lg mt-6 mb-6">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          obcaecati a amet. Tempora ratione perspiciatis tempore laudantium sit,
          dolorem sapiente. Quisquam alias aspernatur inventore aperiam. Laborum
          maiores ad iste cumque."
        </p>
        <a href="#" className="text-fuchsia-600 underline mb-20">
          Learn more
        </a>
      </div>
      <CustomImage imgurl="/img/0218232_header_900.png" doted={true} />
    </div>
  );
}
export default Empowering;
