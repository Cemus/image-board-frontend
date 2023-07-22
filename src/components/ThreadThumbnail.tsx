import { Link } from "react-router-dom";

interface ThreadThumbnailProps {
  id: number;
  img: string;
  subject: string;
}

export default function ThreadThumbnail({
  id,
  img,
  subject,
}: ThreadThumbnailProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Link to={`/thread/${id}`}>
        <img
          className="max-h-40 cursor-pointer"
          loading="lazy"
          src={img}
          alt={`thumbnail-${id}`}
        />
      </Link>
      {/*       <p>{`R : ${responseCount} | I : ${imageCount}`}</p> */}
      <p className=" w-1/4 h-40 line-clamp-3">{subject}</p>
    </div>
  );
}
