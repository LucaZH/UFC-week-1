import TestmonialItem from "../../types/TestmonialItem";

interface TestmonialCardProps extends TestmonialItem {
  onClick: () => void;
}

function TestmonialCad({
  active,
  imgUrl,
  testmonial,
  author,
  job,
  onClick,
}: TestmonialCardProps) {
  return (
    <div
      className={`min-w-[86%] bg-pink-50 p-6 rounded-xl md:flex gap-10 md:min-w-[50%] lg:min-w-[50%] ${
        active
          ? "opacity-100 transition-all delay-100 ease-in duration-100"
          : "opacity-30"
      }`}
      onClick={onClick}
    >
      <img
        src={imgUrl}
        alt="Tesmonial image"
        className="w-96 mb-8 h-80 rounded-xl object-cover md:w-60 md:mb-0"
      />
      <div className="flex flex-col justify-center">
        <p className="text-xl font-extralight mb-4">{testmonial}</p>
        <h3 className="text-lg font-semibold">{author}</h3>
        <span className="text-gray-400">{job}</span>
      </div>
    </div>
  );
}
export default TestmonialCad;
