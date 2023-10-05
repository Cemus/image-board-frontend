import { useState } from "react";
import truncateImageLink from "../utils/truncateImageLink";
import dateFormat from "../utils/dateFormat";
import config from "../../../backConfig";
import ReplyLink from "./ReplyLink";
import QuoteLink from "./QuoteLink";

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
  directReplies: Array<string | undefined>;
  setStartReplyToggle: React.Dispatch<React.SetStateAction<boolean>>;
  commentArea: string;
  setCommentArea: React.Dispatch<React.SetStateAction<string>>;
  scrollToReply: (replyId: string) => void;
  handleReplyHover: (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    replyId: string | undefined
  ) => void;
  setIsReplyFormHovered: React.Dispatch<React.SetStateAction<boolean>>;
  handleReplyUnhover: () => void;
  replyNotFound: Array<string | undefined>;
}
export default function Reply({
  id,
  formatedId,
  name,
  comment,
  image,
  imageWidth,
  imageHeight,
  imageSize,
  date,
  directReplies,
  setStartReplyToggle,
  commentArea,
  setCommentArea,
  scrollToReply,
  handleReplyHover,
  handleReplyUnhover,
  setIsReplyFormHovered,
  replyNotFound,
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
    setStartReplyToggle(true);
    setIsReplyFormHovered(true);
    if (commentArea === "") {
      setCommentArea(`@${formatedId}\n`);
    } else {
      setCommentArea((prevCommentArea) => `${prevCommentArea}@${formatedId}\n`);
    }
  };
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
        <ReplyLink
          key={index}
          scrollToReply={scrollToReply}
          handleReplyHover={handleReplyHover}
          handleReplyUnhover={handleReplyUnhover}
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
                <span
                  onClick={handleReplyInForm}
                  className=":hover cursor-pointer hover:text-blue-800"
                >
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
            {!isImageClicked && (
              <img
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleImageClick}
                className="mx-2 float-left  max-w-40 max-h-40 :hover cursor-pointer"
                loading="lazy"
                src={`${config.apiBaseUrl}/${image.substring(7, image.length)}`}
                alt={`image-${id}`}
              />
            )}
            {isImageClicked && (
              <img
                onClick={handleImageClick}
                className="mx-2 float-left  max-w-[80%] :hover cursor-pointer"
                src={`${config.apiBaseUrl}/${image.substring(7, image.length)}`}
                alt={`image-${id}`}
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
              alt={`image-${id}`}
            />
          )}
        </div>
      )}

      {!hasImage(image) && (
        <div className="flex flex-row">
          <p className="mx-2">{">>"}</p>
          <div className="bg-gray-500 p-1 rounded-sm mb-2 mr-2">
            <div className="flex flex-row flex-wrap gap-1 mx-2">
              <p className=" font-bold">{name}</p>
              <p>{dateFormat(date)}</p>
              <p>
                No.{" "}
                <span
                  onClick={handleReplyInForm}
                  className=":hover cursor-pointer hover:text-blue-800"
                >
                  {formatedId}
                </span>
              </p>
              {directReplies.length > 0 && (
                <div className="flex flex-row flex-wrap gap-1">
                  {directReplies.map((reply, index) => (
                    <QuoteLink
                      key={index}
                      scrollToReply={scrollToReply}
                      handleReplyHover={handleReplyHover}
                      handleReplyUnhover={handleReplyUnhover}
                      replyId={reply}
                      index={index}
                      replyNotFound={replyNotFound}
                    />
                  ))}
                </div>
              )}
            </div>
            <p className="m-4 break-all">{makeClickableComment(comment)}</p>
          </div>
        </div>
      )}
    </>
  );
}
