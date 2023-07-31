import { useState } from "react";
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
  setStartReplyToggle: React.Dispatch<React.SetStateAction<boolean>>;
  commentArea: string;
  setCommentArea: React.Dispatch<React.SetStateAction<string>>;
  scrollToReply: (replyId: string) => void;
  handleReplyHover: (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    replyId: string | undefined
  ) => void;

  handleReplyUnhover: () => void;
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
  setStartReplyToggle,
  commentArea,
  setCommentArea,
  scrollToReply,
  handleReplyHover,
  handleReplyUnhover,
}: ReplyProps) {
  function hasImage(image: string): boolean {
    if (image) {
      return true;
    } else {
      return false;
    }
  }
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isImageClicked, setIsImageClicked] = useState(false);
  const handleMouseEnter = () => {
    setIsImageHovered(true);
  };

  const handleMouseLeave = () => {
    setIsImageHovered(false);
  };
  const handleImageClick = () => {
    isImageClicked ? setIsImageClicked(false) : setIsImageClicked(true);
    setIsImageHovered(false);
  };

  const handleReplyInForm = () => {
    window.scrollTo({ top: 0 });
    setStartReplyToggle(true);
    if (commentArea === "") {
      setCommentArea(`@${idFormat(id)} `);
    } else {
      setCommentArea(
        (prevCommentArea) => `${prevCommentArea}\n@${idFormat(id)} `
      );
    }
  };

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
        <span
          key={index}
          className="font-bold text-blue-900 underline cursor-pointer"
          onMouseEnter={(e) => handleReplyHover(e, replyId)}
          onMouseLeave={handleReplyUnhover}
          onClick={() => {
            if (typeof replyId === "string") {
              scrollToReply(replyId);
            }
          }}
        >
          {match[0]}
        </span>
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
                <span
                  onClick={handleReplyInForm}
                  className=":hover cursor-pointer hover:text-blue-800"
                >
                  {idFormat(id)}
                </span>
              </p>
            </div>
            <p className="mx-2">
              File:{" "}
              <a
                onClick={handleImageClick}
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
            {!isImageClicked && (
              <img
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleImageClick}
                className="mx-2 float-left  max-w-40 max-h-40 :hover cursor-pointer"
                loading="lazy"
                src={`${config.apiBaseUrl}/${image.substring(7, image.length)}`}
              />
            )}
            {isImageClicked && (
              <img
                onClick={handleImageClick}
                className="mx-2 float-left  max-w-[80%] :hover cursor-pointer"
                loading="lazy"
                src={`${config.apiBaseUrl}/${image.substring(7, image.length)}`}
              />
            )}
            <p className="m-4 break-all w-auto  sm:min-w-[500px]">
              {makeClickableComment(comment)}
            </p>
          </div>
          {isImageHovered && !isImageClicked && (
            <img
              className="hidden md:fixed  md:block top-0 right-0 max-w-[50%]"
              loading="lazy"
              src={`${config.apiBaseUrl}/${image.substring(7, image.length)}`}
            />
          )}
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
                No.{" "}
                <span
                  onClick={handleReplyInForm}
                  className=":hover cursor-pointer hover:text-blue-800"
                >
                  {idFormat(id)}
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
