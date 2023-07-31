import { useRef, useState } from "react";
import Op from "./Op";
import Reply from "./Reply";
import idFormat from "../utils/idFormat";

interface ThreadProps {
  thread: {
    _id: string;
    opName: string;
    subject: string;
    comment: string;
    image: string;
    imageWidth: number;
    imageHeight: number;
    imageSize: number;
    replies: Array<{
      _id: string;
      name: string;
      comment: string;
      image: string;
      imageWidth: number;
      imageHeight: number;
      imageSize: number;
      createdAt: string;
    }>;
    createdAt: string;
  } | null;
  setStartReplyToggle: React.Dispatch<React.SetStateAction<boolean>>;
  commentArea: string;
  setCommentArea: React.Dispatch<React.SetStateAction<string>>;
}

export default function Thread({
  thread,
  setStartReplyToggle,
  setCommentArea,
  commentArea,
}: ThreadProps) {
  const replyRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  function scrollToReply(replyId: string) {
    for (const key in replyRefs.current) {
      if (idFormat(key) === replyId) {
        const replyRef = replyRefs.current[key];
        if (replyRef) {
          replyRef.scrollIntoView({ behavior: "smooth" });
          break;
        }
      }
    }
  }
  const [isReplyHovered, setIsReplyHovered] = useState(false);
  const [replyHoveredId, setReplyHoveredId] = useState<string | null>(null);
  function handleReplyHover(
    _e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    replyId: string | undefined
  ) {
    if (replyId) {
      setReplyHoveredId(replyId);
      setIsReplyHovered(true);
    }
  }
  function handleReplyUnhover() {
    setIsReplyHovered(false);
  }
  return (
    <>
      {thread ? (
        <div className="flex-col items-start self-start w-full h-full">
          <Op
            id={thread._id}
            opName={thread.opName}
            subject={thread.subject}
            comment={thread.comment}
            image={thread.image}
            imageWidth={thread.imageWidth}
            imageHeight={thread.imageHeight}
            imageSize={thread.imageSize}
            date={thread.createdAt}
            setStartReplyToggle={setStartReplyToggle}
            commentArea={commentArea}
            setCommentArea={setCommentArea}
          />
          {thread.replies.map((reply, index) => (
            <div
              ref={(element) => (replyRefs.current[reply._id] = element)}
              key={index}
            >
              <Reply
                key={reply._id}
                id={reply._id}
                name={reply.name}
                comment={reply.comment}
                image={reply.image}
                imageWidth={reply.imageWidth}
                imageHeight={reply.imageHeight}
                imageSize={reply.imageSize}
                date={reply.createdAt}
                setStartReplyToggle={setStartReplyToggle}
                commentArea={commentArea}
                setCommentArea={setCommentArea}
                scrollToReply={scrollToReply}
                handleReplyHover={handleReplyHover}
                handleReplyUnhover={handleReplyUnhover}
              />
            </div>
          ))}
          {isReplyHovered && (
            <div className="hidden md:fixed md:block top-0 right-0 max-w-[50%]">
              {(() => {
                const hoveredReply = thread?.replies.find(
                  (reply) => idFormat(reply._id) === replyHoveredId
                );
                if (hoveredReply) {
                  return (
                    <Reply
                      key={hoveredReply._id}
                      id={hoveredReply._id}
                      name={hoveredReply.name}
                      comment={hoveredReply.comment}
                      image={hoveredReply.image}
                      imageWidth={hoveredReply.imageWidth}
                      imageHeight={hoveredReply.imageHeight}
                      imageSize={hoveredReply.imageSize}
                      date={hoveredReply.createdAt}
                      setStartReplyToggle={setStartReplyToggle}
                      commentArea={commentArea}
                      setCommentArea={setCommentArea}
                      scrollToReply={scrollToReply}
                      handleReplyHover={handleReplyHover}
                      handleReplyUnhover={handleReplyUnhover}
                    />
                  );
                }
                return null;
              })()}
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-10 mt-[-20%]">
          <div className=" w-12 h-12 border-t-4 border-grey-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
}
