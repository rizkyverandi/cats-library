const Card = ({
  imgUrl = "https://picsum.photos/300/300",
  desc,
}: {
  imgUrl?: string;
  desc?: string;
}) => {
  return (
    <figure className="max-w-[300px] bg-[#3b3b3b] rounded-lg shadow-md">
      <img
        src={imgUrl || ""}
        alt=""
        fetchPriority="high"
        className="rounded-lg max-w-[300px] aspect-[4/3] object-cover"
      />
      <figcaption className="text-white p-4">{desc}</figcaption>
    </figure>
  );
};

export default Card;
