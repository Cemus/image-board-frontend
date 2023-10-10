import config from "../../backConfig";
import { Link } from "react-router-dom";

interface ThreadProps {
  id: string;
  subject: string;
  comment: string;
  image: string;
}

export default function ThreadThumbnail({
  id,
  subject,
  comment,
  image,
}: ThreadProps) {
  const imageUrl = `${config.apiBaseUrl}/api/threads/images/${image}`;
  return (
    <div className="flex flex-col items-center gap-1 p-2">
      <Link className="flex items-center justify-center" to={`/thread/${id}`}>
        <img
          className=" cursor-pointer rounded-sm max-h-96"
          loading="lazy"
          src={imageUrl}
          alt={`thumbnail-${id}`}
        />
      </Link>
      <div className=" w-3/4 overflow-hidden">
        <h2 className=" text-overflow-ellipsis line-clamp-3 break-words text-center font-bold text-lg">
          {subject}
        </h2>
        <p className=" text-overflow-ellipsis line-clamp-3 break-words text-center text-md">
          {comment}
        </p>
      </div>
    </div>
  );
}
