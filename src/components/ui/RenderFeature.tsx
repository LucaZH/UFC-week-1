function RenderFeature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="relative p-[1px] rounded-r-3xl bg-gradient-to-r from-white from-30% to-gray-300">
      <div className="rounded-r-3xl bg-white p-5">
        <div className="pl-6 space-y-2">
          <h3 className="text-2xl font-semibold text-zinc-700 before-dot">
            {title}
          </h3>
          <p className="text-gray-600 ml-8">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default RenderFeature;
