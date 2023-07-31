import HorizontalRule from "../HorizontalRule";
import ReplyForm from "./ReplyForm";

interface ComponentReplyForm {
  fetchThread: () => Promise<void>;
  startReplyToggle: boolean;
  setStartReplyToggle: React.Dispatch<React.SetStateAction<boolean>>;
  commentArea: string;
  setCommentArea: React.Dispatch<React.SetStateAction<string>>;
}

export default function ReplyButton({
  fetchThread,
  startReplyToggle,
  setStartReplyToggle,
  commentArea,
  setCommentArea,
}: ComponentReplyForm) {
  function handleClickNewThread() {
    setStartReplyToggle((prevStartReplyToggle) => !prevStartReplyToggle);
  }
  return (
    <>
      {!startReplyToggle && (
        <button
          className=" m-auto p-1 rounded-md hover:bg-slate-500"
          onClick={handleClickNewThread}
        >
          Post a {""}
          <span className="text-lg underline underline-offset-2">Reply</span>!
        </button>
      )}
      {startReplyToggle && (
        <ReplyForm
          fetchThread={fetchThread}
          commentArea={commentArea}
          setCommentArea={setCommentArea}
        />
      )}
      <HorizontalRule />
    </>
  );
}
