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
  replyNotFound: Array<string | undefined>;
}

export default function QuoteLink({
  index,
  replyId,
  handleReplyHover,
  handleReplyUnhover,
  scrollToReply,
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
          className="font-bold text-xs text-blue-900 underline cursor-pointer hover:text-blue-300"
          onMouseEnter={(e) => handleReplyHover(e, replyId)}
          onMouseLeave={handleReplyUnhover}
          onClick={() => {
            if (typeof replyId === "string") {
              scrollToReply(replyId);
            }
          }}
        >
          {`@${replyId}`}
        </span>
      )}
      {missingReply && (
        <div>
          <span
            key={`${index}`}
            className="font-bold text-xs  text-red-900 underline cursor-pointer hover:text-red-300"
          >
            {`${replyId}`}
          </span>
          <span className="font-bold text-red-900">{` (not found)`}</span>
          <br />
        </div>
      )}
    </>
  );
}
