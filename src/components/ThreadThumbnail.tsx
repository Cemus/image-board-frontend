import { useNavigate } from "react-router-dom";
import config from "../../env";

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
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/thread/${id}`);
  }
  const imageUrl = image.substring(7, image.length);
  return (
    <div className="flex flex-col items-center gap-1 p-2">
      <img
        onClick={handleClick}
        className="max-w-[80%] max-h-[80%]  cursor-pointer rounded-sm"
        loading="lazy"
        src={`${config.apiBaseUrl}/${imageUrl}`}
        alt={`thumbnail-${id}`}
      />

      <div className=" w-3/4 overflow-hidden">
        <h3 className=" text-overflow-ellipsis line-clamp-3 break-words text-center font-bold text-lg">
          {subject}
        </h3>
        <p className=" text-overflow-ellipsis line-clamp-3 break-words text-center text-md">
          {comment}
        </p>
      </div>
    </div>
  );
}
