import ProductItems from "../types/ProductItems";
import Card from "./ui/Card";
import HText from "./ui/HText";

const Products: ProductItems[] = [
  {
    imgUrl:
      "/img/drone-s-eye-view-capturing-world-from-ai-generated_201606-7055.avif",
    title: "DJI Mavic 2 Pro",
    desc: "Known for its excellent camera quality.",
    border: "rounded-tr-[5rem]",
  },
  {
    imgUrl: "/img/167.jpg",
    title: "DJI Phantom 4 Pro",
    desc: "Powerful camera with a 1-inch CMOS.",
    border: "rounded-tl-[5rem]",
  },
  {
    imgUrl: "/img/images-13.jpg",
    title: "JI Mini 2",
    desc: "Popular for its ease of use and portability.",
    border: "rounded-br-[5rem]",
  },
  {
    imgUrl: "/img/yuneec-typhoon.jpg",
    title: "Yuneec Thyphon",
    desc: "360-degree rotating camera.",
    border: "rounded-br-[5rem]",
  },
];

function Product() {
  return (
    <section className="flex flex-col gap-16">
      <div className="flex flex-col items-center">
        <HText text="Our Products" />
        <p>Elevate Your Creativity Where Imagination Take Fight</p>
      </div>
      <div className="md:grid grid-cols-2 gap-20">
        {Products.map((item) => (
          <Card
            title={item.title}
            desc={item.desc}
            imgUrl={item.imgUrl}
            border={item.border}
          />
        ))}
      </div>
    </section>
  );
}
export default Product;
