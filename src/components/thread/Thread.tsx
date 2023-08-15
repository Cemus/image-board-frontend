import { useRef, useState } from "react";
import Op from "./Op";
import Reply from "./Reply";
import ReplyForm from "../post/ReplyForm";
import ReplyHovered from "./ReplyHovered";

interface ThreadProps {
  thread: {
    _id: string;
    formatedId: string;
    opName: string;
    subject: string;
    comment: string;
    image: string;
    imageWidth: number;
    imageHeight: number;
    imageSize: number;
    directReplies: Array<string | undefined>;
    replies: Array<{
      _id: string;
      formatedId: string;
      name: string;
      comment: string;
      image: string;
      imageWidth: number;
      imageHeight: number;
      imageSize: number;
      createdAt: string;
      directReplies: Array<string | undefined>;
    }>;
    createdAt: string;
  } | null;
  setStartReplyToggle: React.Dispatch<React.SetStateAction<boolean>>;
  commentArea: string;
  setCommentArea: React.Dispatch<React.SetStateAction<string>>;
  fetchThread: () => Promise<void>;
  isReplyFormHovered: boolean;
  setIsReplyFormHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Thread({
  thread,
  setStartReplyToggle,
  fetchThread,
  setCommentArea,
  commentArea,
  isReplyFormHovered,
  setIsReplyFormHovered,
}: ThreadProps) {
  const replyRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [replyNotFound, setReplyNotFound] = useState<string[]>([]);

  function scrollToReply(replyId: string) {
    let found = false;
    for (const key in replyRefs.current) {
      if (key === replyId) {
        const replyRef = replyRefs.current[key];
        if (replyRef) {
          replyRef.scrollIntoView({ behavior: "smooth" });
          found = true;
          break;
        }
      }
    }
    if (found === false) {
      if (!replyNotFound.includes(replyId)) {
        setReplyNotFound((prevReplyNotFound) => [
          ...prevReplyNotFound,
          replyId,
        ]);
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
          <div
            ref={(element) => (replyRefs.current[thread.formatedId] = element)}
          >
            <Op
              id={thread._id}
              formatedId={thread.formatedId}
              opName={thread.opName}
              subject={thread.subject}
              comment={thread.comment}
              image={thread.image}
              imageWidth={thread.imageWidth}
              imageHeight={thread.imageHeight}
              imageSize={thread.imageSize}
              date={thread.createdAt}
              directReplies={thread.directReplies}
              setStartReplyToggle={setStartReplyToggle}
              commentArea={commentArea}
              setCommentArea={setCommentArea}
              scrollToReply={scrollToReply}
              handleReplyHover={handleReplyHover}
              handleReplyUnhover={handleReplyUnhover}
              setIsReplyFormHovered={setIsReplyFormHovered}
              replyNotFound={replyNotFound}
            />
          </div>
          {thread.replies.map((reply, index) => (
            <div
              ref={(element) => (replyRefs.current[reply.formatedId] = element)}
              key={index}
            >
              <Reply
                key={reply._id}
                id={reply._id}
                formatedId={reply.formatedId}
                name={reply.name}
                comment={reply.comment}
                image={reply.image}
                imageWidth={reply.imageWidth}
                imageHeight={reply.imageHeight}
                imageSize={reply.imageSize}
                date={reply.createdAt}
                directReplies={reply.directReplies}
                setStartReplyToggle={setStartReplyToggle}
                commentArea={commentArea}
                setCommentArea={setCommentArea}
                scrollToReply={scrollToReply}
                handleReplyHover={handleReplyHover}
                handleReplyUnhover={handleReplyUnhover}
                setIsReplyFormHovered={setIsReplyFormHovered}
                replyNotFound={replyNotFound}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-10 mt-[-20%]">
          <div className=" w-12 h-12 border-t-4 border-grey-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}
      {isReplyFormHovered && (
        <div className="fixed top-20 right-0 bg-gray-700 p-4 rounded-xl mr-2 -z-1">
          <div className="flex flex-col">
            {isReplyFormHovered && (
              <button
                type="button"
                onClick={() => setIsReplyFormHovered(false)}
                className=" font-bold px-8 py-1 border-2 border-red-500 bg-red-500 self-end hover:bg-red-600  hover:border-white"
              >
                X
              </button>
            )}
            <div className="inline-flex items-center justify-center">
              <ReplyForm
                fetchThread={fetchThread}
                setCommentArea={setCommentArea}
                commentArea={commentArea}
              />
            </div>
          </div>
        </div>
      )}
      {isReplyHovered && (
        <div className="hidden md:fixed md:block top-0 right-0 max-w-[50%] z-10">
          {(() => {
            let hoveredReply;
            hoveredReply = thread?.replies.find(
              (reply) => reply.formatedId === replyHoveredId
            );
            if (!hoveredReply) {
              thread?.formatedId === replyHoveredId
                ? (hoveredReply = thread)
                : (hoveredReply = null);
            }
            if (hoveredReply) {
              const replyHoveredName =
                "name" in hoveredReply
                  ? hoveredReply.name
                  : hoveredReply.opName;
              return (
                <ReplyHovered
                  key={hoveredReply._id}
                  id={hoveredReply._id}
                  formatedId={hoveredReply.formatedId}
                  name={replyHoveredName}
                  comment={hoveredReply.comment}
                  image={hoveredReply.image}
                  imageWidth={hoveredReply.imageWidth}
                  imageHeight={hoveredReply.imageHeight}
                  imageSize={hoveredReply.imageSize}
                  date={hoveredReply.createdAt}
                  replyNotFound={replyNotFound}
                />
              );
            }
            return null;
          })()}
        </div>
      )}
    </>
  );
}
