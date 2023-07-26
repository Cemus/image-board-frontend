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
  console.log(image);
  return (
    <div className="flex flex-col items-center gap-1 max-w-full p-4">
      <Link to={`/thread/${id}`}>
        <img
          className="w-full cursor-pointer rounded-sm"
          loading="lazy"
          src={image}
          alt={`thumbnail-${id}`}
        />
      </Link>
      {/*       <p>{`R : ${responseCount} | I : ${imageCount}`}</p> */}
      <div className=" w-3/4 overflow-hidden">
        <p className=" text-overflow-ellipsis line-clamp-3 break-words text-center font-bold">
          {subject}
        </p>
        <p className=" text-overflow-ellipsis line-clamp-3 break-words text-center">
          {comment}
        </p>
      </div>
    </div>
  );
}
