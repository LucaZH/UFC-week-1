import { useState } from "react";
import TestmonialItem from "../types/TestmonialItem";
import HText from "./ui/HText";
import TestmonialCad from "./ui/TestmonialCard";

const initialTestmonialItems: TestmonialItem[] = [
  {
    active: false,
    author: "Luca",
    testmonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eveniet molestias aliquam vel eos, sapiente accusamus numquam esse dicta minus sunt in quam. Hic necessitatibus vitae at, mollitia nostrum eveniet.",
    imgUrl: "/img/167.jpg",
    job: "UX/UI Designer",
  },
  {
    active: true,
    author: "Luca",
    testmonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eveniet molestias aliquam vel eos, sapiente accusamus numquam esse dicta minus sunt in quam. Hic necessitatibus vitae at, mollitia nostrum eveniet.",
    imgUrl: "/img/167.jpg",
    job: "UX/UI Designer",
  },
  {
    active: false,
    author: "Luca",
    testmonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eveniet molestias aliquam vel eos, sapiente accusamus numquam esse dicta minus sunt in quam. Hic necessitatibus vitae at, mollitia nostrum eveniet.",
    imgUrl: "/img/capadrone.webp",
    job: "UX/UI Designer",
  },
];
function Testmonial() {
  const [TestmonialItems, setTestmonialItems] = useState(
    initialTestmonialItems
  );

  const handleCardClick = (index: number) => {
    const newTestmonialItems = TestmonialItems.map((item, i) => ({
      ...item,
      active: i === index,
    }));

    setTestmonialItems(newTestmonialItems);
  };
  return (
    <section className="flex flex-col gap-14 mb-10">
      <div className="flex flex-col text-center">
        <HText text="Testmonial" />
        <p className="text-gray-400">What people say</p>
      </div>
      <div className="flex w-full overflow-hidden gap-8 overflow-x-scroll no-scrollbar">
        {TestmonialItems.map((item: TestmonialItem, index: number) => (
          <TestmonialCad
            key={index}
            active={item.active}
            author={item.author}
            imgUrl={item.imgUrl}
            job={item.job}
            testmonial={item.testmonial}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <div className="bg-gray-200 w-4 h-4 rounded-full"></div>
        <div className="bg-fuchsia-700 w-4 h-4 rounded-full"></div>
        <div className="bg-gray-200 w-4 h-4 rounded-full"></div>
      </div>
    </section>
  );
}
export default Testmonial;
