import truncateImageLink from "../utils/truncateImageLink";
import dateFormat from "../utils/dateFormat";
import config from "../../../env";
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
export default function Reply({
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

  function getReplyIdFromMatch(atUserId: string): string | undefined {
    const regex = /(\d{8})/g;
    const match = atUserId.match(regex);
    return match ? match[0] : undefined;
  }

  function makeClickableComment(comment: string) {
    const regex = /@(\d{8})/g;
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
            <p className="mx-2">
              File:{" "}
              <p className="text-blue-900 underline :hover cursor-pointer">
                {truncateImageLink(image)}
              </p>
              {" ("}
              <span>
                {`${imageSize} KB`}, {imageWidth}
              </span>
              x<span>{imageHeight}</span>
              {")"}
            </p>
          </div>

          <img
            className="mx-2 float-left  max-w-40 max-h-40 :hover cursor-pointer"
            loading="lazy"
            src={`${config.apiBaseUrl}/${image.substring(7, image.length)}`}
          />
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
