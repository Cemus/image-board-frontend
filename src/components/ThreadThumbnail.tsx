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
    <div className="flex flex-col items-center gap-1 max-w-full">
      <Link to={`/thread/${id}`}>
        <img
          className="w-full cursor-pointer rounded-sm"
          loading="lazy"
          src={img}
          alt={`thumbnail-${id}`}
        />
      </Link>
      {/*       <p>{`R : ${responseCount} | I : ${imageCount}`}</p> */}
      <div className=" w-3/4 overflow-hidden">
        <p className=" text-overflow-ellipsis line-clamp-3 break-words text-center">
          {subject}
        </p>
      </div>
    </div>
  );
}
