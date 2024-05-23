import NewItem from "../../types/NewItem";

function NewsCard({ author, label, date, title, desc, url, imgUrl }: NewItem) {
  return (
    <div className="space-y-6">
      <img src={imgUrl} alt="Blog" className="rounded-2xl" />
      <div className="space-y-2">
        <p className="text-xl font-medium">
          By {author} - {label} - {date}
        </p>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-xl font-medium">{desc}</p>
        <div className="text-fuchsia-600 text-xl">
          <a href={url}>View Post</a>
        </div>
      </div>
    </div>
  );
}
export default NewsCard;
