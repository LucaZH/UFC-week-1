function RenderFeature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="relative p-4 border-t border-r border-b border-gray-200 rounded-r-3xl">
      <div className="pl-6 space-y-2">
        <li className="text-5xl font-semibold text-fuchsia-600">
          <h3 className="text-2xl text-zinc-700">{title}</h3>
        </li>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
export default RenderFeature;
