import NewItem from "../types/NewItem";
import HText from "./ui/HText";
import NewsCard from "./ui/NewsCard";

const News: NewItem[] = [
  {
    author: "Admin",
    label: "Developer",
    date: "05 december 2023",
    title: "Drone 5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi odio iste ad obcaecati provident sed esse, asperiores sit dolorum perspiciatis hic doloremque est deleniti modi maxime, ab, eos ullam",
    url: "#",
    imgUrl: "/img/capadrone.webp",
  },
  {
    author: "Admin",
    label: "Developer",
    date: "05 december 2023",
    title: "Drone 5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi odio iste ad obcaecati provident sed esse, asperiores sit dolorum perspiciatis hic doloremque est deleniti modi maxime, ab, eos ullam",
    url: "#",
    imgUrl: "/img/capadrone.webp",
  },
];
function BlogNew() {
  return (
    <section>
      <div className="text-center mb-16 space-y-2">
        <HText text="Blog and News" />
        <p className="text-gray-400">Lastest new </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {News.map((item) => (
          <NewsCard
            imgUrl={item.imgUrl}
            author={item.author}
            date={item.date}
            label={item.label}
            title={item.title}
            desc={item.desc}
            url={item.url}
          />
        ))}
      </div>
    </section>
  );
}
export default BlogNew;
