import truncateImageLink from "../utils/truncateImageLink";
import dateFormat from "../utils/dateFormat";
import idFormat from "../utils/idFormat";

interface OpProps {
  id: string;
  opName: string;
  subject: string;
  comment: string;
  image: string;
  date: string;
}

export default function Op({
  id,
  opName,
  subject,
  comment,
  image,
  date,
}: OpProps) {
  return (
    <div className="flex flex-col m-2 items-start ">
      <div className="flex flex-row gap-1">
        <p className=" font-bold">{opName}</p>
        <p>{dateFormat(date)}</p>
        <p>
          No.{" "}
          <span className="text-green-500 font-semibold">{idFormat(id)}</span>
        </p>
      </div>
      <p>
        File:{" "}
        <a className="text-blue-900 underline">{truncateImageLink(image)}</a>
        {" ("}
        <span>84 KB</span>,<span>824</span>x<span>742</span>
        {")"}
      </p>
      <div className="flex items-start mb-2 mr-2 flex-col sm:flex-row sm:gap-1">
        <img
          className=" mx-2 float-left max-w-40 max-h-40 "
          loading="lazy"
          src={image}
        />
        <div className="flex flex-col gap-1">
          <p className="font-bold">{subject}</p>
          <br />
          <p className="break-words">{comment}</p>
        </div>
      </div>
    </div>
  );
}
