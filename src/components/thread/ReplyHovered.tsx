import truncateImageLink from "../utils/truncateImageLink";
import dateFormat from "../utils/dateFormat";
import config from "../../../backConfig";
import ReplyLinkHovered from "./ReplyLinkHovered";

interface ReplyProps {
  id: string;
  formatedId: string;
  name: string;
  comment: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  date: string;
  replyNotFound: Array<string | undefined>;
}
export default function ReplyHovered({
  id,
  formatedId,
  name,
  comment,
  image,
  imageWidth,
  imageHeight,
  imageSize,
  date,
  replyNotFound,
}: ReplyProps) {
  function hasImage(image: string): boolean {
    if (image) {
      return true;
    } else {
      return false;
    }
  }
  const imageUrl = `${config.apiBaseUrl}/api/threads/images/${image}`;
  function getReplyIdFromMatch(atUserId: string): string | undefined {
    const regex = /(\d{8})(\(OP\))?/g;
    const match = atUserId.match(regex);
    return match ? match[0] : undefined;
  }

  function makeClickableComment(comment: string) {
    const regex = /@(\d{8})(\(OP\))?/g;
    const matches = Array.from(comment.matchAll(regex));
    let lastIndex = 0;
    const result = [];

    for (const match of matches) {
      const index = match.index !== undefined ? match.index : 0;
      const replyId = getReplyIdFromMatch(match[1]);

      result.push(
        <span key={`${comment}${lastIndex}`}>
          {comment.substring(lastIndex, index)}
        </span>
      );
      result.push(
        <ReplyLinkHovered
          key={index}
          match={match[0]}
          replyId={replyId}
          index={index}
          replyNotFound={replyNotFound}
        />
      );

      lastIndex = index + match[0].length;
    }
    result.push(
      <span key={`${comment}${lastIndex}`}>{comment.substring(lastIndex)}</span>
    );
    return result;
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
                No.{" "}
                <span className=":hover cursor-pointer hover:text-blue-800">
                  {formatedId}
                </span>
                <span className=":hover cursor-pointer hover:text-blue-800">
                  {}
                </span>
              </p>
            </div>
            <p className="mx-2">
              File:{" "}
              <a
                href={`${config.apiBaseUrl}/${image.substring(
                  7,
                  image.length
                )}`}
                target="_blank"
                className="text-blue-900 underline :hover cursor-pointer"
              >
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
              className="mx-2 float-left  max-w-40 max-h-40 :hover cursor-pointer"
              loading="lazy"
              src={imageUrl}
              alt={`image-${id}`}
            />
            <p className="m-4 break-all w-auto  sm:min-w-[500px]">
              {makeClickableComment(comment)}
            </p>
          </div>
        </div>
      )}

      {!hasImage(image) && (
        <div className="flex flex-row">
          <p className="mx-2">{">>"}</p>
          <div className="bg-gray-500 p-1 rounded-sm mr-2">
            <div className="flex flex-row gap-1 mx-2">
              <p className=" font-bold">{name}</p>
              <p>{dateFormat(date)}</p>
              <p>
                No.{" "}
                <span className=":hover cursor-pointer hover:text-blue-800">
                  {formatedId}
                </span>
              </p>
            </div>
            <p className="m-4 break-all">{makeClickableComment(comment)}</p>
          </div>
        </div>
      )}
    </>
  );
}
