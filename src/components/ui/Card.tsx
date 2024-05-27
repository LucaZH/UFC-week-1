function Card({
  imgUrl,
  title,
  desc,
  border,
}: {
  imgUrl: string;
  title: string;
  desc: string;
  border: string;
}) {
  return (
    <div className="hover:scale-105 transition-all mb-16 md:mb-0">
      <img
        src={imgUrl}
        alt="Card img"
        className={border + " h-[28rem] w-full object-cover mb-6"}
      />
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl">{title}</h3>
          <p className="text-gray-500 text-lg">{desc}</p>
        </div>
        <a href="#">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer bg-pink-50 rounded-full"
          >
            <path
              d="M9.5 7L14.5 12L9.5 17"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
export default Card;
