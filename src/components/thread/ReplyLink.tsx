import { useState, useEffect } from "react";

interface ReplyLinkProps {
  index: number;
  replyId: string | undefined;
  handleReplyUnhover: () => void;
  scrollToReply: (replyId: string) => void;
  handleReplyHover: (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    replyId: string | undefined
  ) => void;
  match: string | undefined;
  replyNotFound: Array<string | undefined>;
}

export default function ReplyLink({
  index,
  replyId,
  handleReplyHover,
  handleReplyUnhover,
  scrollToReply,
  match,
  replyNotFound,
}: ReplyLinkProps) {
  const [missingReply, setMissingReply] = useState(false);

  // Utiliser useEffect pour effectuer la vérification une fois lors du rendu initial
  useEffect(() => {
    if (replyNotFound.length > 0 && replyId) {
      setMissingReply(replyNotFound.includes(replyId));
    }
  }, [replyId, replyNotFound]);
  return (
    <>
      {!missingReply && (
        <span
          key={`${index}`}
          className="font-bold text-blue-900 underline cursor-pointer hover:text-blue-300"
          onMouseEnter={(e) => handleReplyHover(e, replyId)}
          onMouseLeave={handleReplyUnhover}
          onClick={() => {
            if (typeof replyId === "string") {
              scrollToReply(replyId);
            }
          }}
        >
          {`${match}`}
        </span>
      )}
      {missingReply && (
        <div>
          <span
            key={`${index}`}
            className="font-bold text-red-900 underline cursor-pointer"
          >
            {`${match}`}
          </span>
          <span className="font-bold text-red-900">{` (not found)`}</span>
          <br />
        </div>
      )}
    </>
  );
}
