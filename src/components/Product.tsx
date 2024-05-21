import ProductItems from "../types/ProductItems";
import Card from "./ui/Card";
import HText from "./ui/HText";

const Products: ProductItems[] = [
  {
    imgUrl: "/img/167.jpg",
    title: "Drone 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisic.",
    border: "rounded-tr-[5rem]",
  },
  {
    imgUrl: "/img/167.jpg",
    title: "Drone 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisic.",
    border: "rounded-tl-[5rem]",
  },
  {
    imgUrl: "/img/167.jpg",
    title: "Drone 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisic.",
    border: "rounded-br-[5rem]",
  },
  {
    imgUrl: "/img/167.jpg",
    title: "Drone 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisic.",
    border: "rounded-br-[5rem]",
  },
];

function Product() {
  return (
    <section className="flex flex-col gap-16">
      <HText text="Our Products" />
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
