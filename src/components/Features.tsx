import HText from "./ui/HText";

function Features() {
  return (
    <section>
      <div className="text-center">
        <HText text="How It Works" />
        <p className="text-gray-500">
          Our drones capture moments with a bird's eye view
        </p>
      </div>
      <div className="mt-16 md:flex md:justify-center gap-20">
        <div className="flex flex-col items-center text-center">
          <img src="/logo.png" alt="" className="mb-10 w-1/4 h-1/3" />
          <h4 className="text-zinc-700 font-semibold text-xl">Propellers</h4>
          <p className="text-gray-500 text-base">
            Generate thust to lift the drone off the ground and control its
            movement in different directions.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src="/img/3d-map-pointer-location-map-icon-white-texture-white-location-pin-navigation-web-location-poi_651618-814.avif"
            alt=""
            className="mb-10 w-1/4 h-1/3"
          />
          <h4 className="text-zinc-700 font-semibold text-xl">GPS</h4>
          <p className="text-gray-500 text-base">
            GPS allows the drone to folow preprogrammed fight pahts or waypoints
            autonomously
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="/logo.png" alt="" className="mb-10 w-1/4 h-1/3" />
          <h4 className="text-zinc-700 font-semibold text-xl">Gyroscope</h4>
          <p className="text-gray-500 text-base">
            The syroscope mesures the drone's angular rate or rotational
            movement around its axes.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Features;
