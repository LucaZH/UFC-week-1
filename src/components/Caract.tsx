import CustomImage from "./ui/CustomImage";
import HText from "./ui/HText";
import RenderFeature from "./ui/RenderFreature";

function Caract() {
  const features = [
    {
      title: "Build Quality",
      description:
        "High-Quality Drones Are Usually Made With Robust Materials Such As Carbon Fiber, Magnesium Alloy",
    },
    {
      title: "Flight Performance",
      description:
        "Group Your Contacts By Location, Age, And Almost Any Behavior With Advanced Segmentation Tools",
    },
    {
      title: "Camera Quality",
      description:
        "Factors Such As The Sensor Size, Megapixels, Image Stabilization, And Adjustable Settings Like Aperture And Shutter Speed",
    },
    {
      title: "Battery Life And Charging Time",
      description:
        "High-Quality Drones Typically Have Longer Flight Times, Allowing You To Enjoy Extended Aerial",
    },
  ];

  return (
    <div className="md:flex gap-24 mt-20">
      <div className="flex flex-col w-3/4 gap-5">
        <HText text="These Are Often Considered For Prone Product Quality " />
        <p className="text-gray-500 text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
          atque veritatis, consequatur inventore, ex nemo explicabo sed
          voluptate quia cum laboriosam iure id error obcaecati alias, possimus
          nesciunt minima quas?
        </p>
        <CustomImage
          imgurl="/img/examen-theorique-telepilote.jpg"
          doted={false}
        />
      </div>
      <div className="space-y-6 mt-20 md:mt-0 lg:mt-0">
        {features.map((feature) => (
          <RenderFeature
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Caract;
