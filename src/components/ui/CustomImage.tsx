function CustomImage({ imgurl, doted }: { imgurl: string; doted: boolean }) {
  return (
    <div className="relative flex items-center justify-center  pt-8 rounded-2xl">
      <div className="absolute top-8 left-0 w-28 h-28 bg-fuchsia-700 rounded-2xl transform -translate-y-4 -translate-x-4  shadow-lg"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-fuchsia-500 rounded-2xl transform translate-y-4 translate-x-4  shadow-lg"></div>
      {doted && (
        <div className="absolute top-0 right-0 -mt-2 -mr-2 w-6 h-6 bg-blue-300 rounded-full"></div>
      )}
      <div className="relative">
        <img
          src={imgurl}
          alt="empowering header"
          className="rounded-2xl w-screen h-80 object-cover"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="bg-white p-3 rounded-full shadow-md hover:scale-110 transition-all delay-150">
          <svg
            height="18px"
            width="18px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 210 210"
            fill="rgb(162 28 175)"
          >
            <path d="M179.07,105L30.93,210V0L179.07,105z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default CustomImage;
