import truncateImageLink from "../utils/truncateImageLink";
import dateFormat from "../utils/dateFormat";
import idFormat from "../utils/idFormat";
import config from "../../../env";

interface OpProps {
  id: string;
  opName: string;
  subject: string;
  comment: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  date: string;
}

export default function Op({
  id,
  opName,
  subject,
  comment,
  image,
  imageWidth,
  imageHeight,
  imageSize,
  date,
}: OpProps) {
  const imageUrl = image.substring(7, image.length);
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
        <span>
          {`${imageSize} KB`}, {imageWidth}
        </span>
        x<span>{imageHeight}</span>
        {")"}
      </p>
      <div className="flex items-start mb-2 mr-2 flex-col sm:flex-row sm:gap-1">
        <img
          className=" mx-2 float-left max-w-[12rem] max-h-[12rem] "
          loading="lazy"
          src={`${config.apiBaseUrl}/${imageUrl}`}
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
