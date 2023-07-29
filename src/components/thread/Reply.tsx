import truncateImageLink from "../utils/truncateImageLink";
import dateFormat from "../utils/dateFormat";
import idFormat from "../utils/idFormat";
import config from "../../../env";

interface ReplyProps {
  id: string;
  name: string;
  comment: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  date: string;
}
export default function Reply({
  id,
  name,
  comment,
  image,
  imageWidth,
  imageHeight,
  imageSize,
  date,
}: ReplyProps) {
  function hasImage(image: string): boolean {
    if (image) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      {hasImage(image) && (
        <div className="flex flex-row">
          <p className="mx-2 ">{">>"}</p>
          <div className="bg-gray-500 p-1 rounded-sm mb-2 mr-2">
            <div className="flex flex-row gap-1 mx-2">
              <p className=" font-bold">{name}</p>
              <p>{dateFormat(date)}</p>
              <p>
                No. <span>{idFormat(id)}</span>
              </p>
            </div>
            <p className="mx-2">
              File:{" "}
              <a className="text-blue-900 underline">
                {truncateImageLink(image)}
              </a>
              {" ("}
              <span>
                {`${imageSize} KB`}, {imageWidth}
              </span>
              x<span>{imageHeight}</span>
              {")"}
            </p>
            <img
              className="mx-2 float-left  max-w-40 max-h-40"
              loading="lazy"
              src={`${config.apiBaseUrl}/${image.substring(7, image.length)}`}
            />
            <p className="m-4 break-all w-auto  sm:min-w-[500px]">{comment}</p>
          </div>
        </div>
      )}

      {!hasImage(image) && (
        <div className="flex flex-row">
          <p className="mx-2">{">>"}</p>
          <div className="bg-gray-500 p-1 rounded-sm mb-2 mr-2">
            <div className="flex flex-row gap-1 mx-2">
              <p className=" font-bold">{name}</p>
              <p>{dateFormat(date)}</p>
              <p>
                No. <span>{idFormat(id)}</span>
              </p>
            </div>

            <p className="m-4 break-all">{comment}</p>
          </div>
        </div>
      )}
    </>
  );
}
