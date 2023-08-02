import { useState } from "react";
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
  setStartReplyToggle: React.Dispatch<React.SetStateAction<boolean>>;
  commentArea: string;
  setCommentArea: React.Dispatch<React.SetStateAction<string>>;
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
  setStartReplyToggle,
  commentArea,
  setCommentArea,
}: OpProps) {
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
      setCommentArea(`@${idFormat(id)}(OP) `);
    } else {
      setCommentArea(
        (prevCommentArea) => `${prevCommentArea}\n@${idFormat(id)} `
      );
    }
  };
  return (
    <div className="flex flex-col m-2 items-start ">
      <div className="flex flex-row gap-1">
        <p className=" font-bold">{opName}</p>
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
      <p>
        File:{" "}
        <a
          href={`${config.apiBaseUrl}/${image.substring(7, image.length)}`}
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
      <div className="flex flex-wrap mb-2 mr-2 flex-col sm:flex-row sm:gap-1 md:items-start">
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
        {isImageHovered && !isImageClicked && (
          <img
            className="hidden md:fixed  md:block top-0 right-0 max-w-[50%]"
            loading="lazy"
            src={`${config.apiBaseUrl}/${image.substring(7, image.length)}`}
            alt={`image-${id}`}
          />
        )}
        <div className="flex flex-col gap-1 ml-2 md:ml-0 sm:ml-2">
          <p className="font-bold">{subject}</p>
          <br />
          <p className="break-words">{comment}</p>
        </div>
      </div>
    </div>
  );
}
