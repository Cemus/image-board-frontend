import { useState } from "react";
import HorizontalRule from "../HorizontalRule";
import ReplyForm from "./ReplyForm";

interface ComponentReplyForm {
  fetchThread: () => Promise<void>;
}

export default function ReplyButton({ fetchThread }: ComponentReplyForm) {
  const [startThreadToggle, setStartThreadToggle] = useState(false);
  function handleClickNewThread() {
    setStartThreadToggle((prevStartThreadToggle) => !prevStartThreadToggle);
  }
  return (
    <>
      {!startThreadToggle && (
        <button
          className=" m-auto p-1 rounded-md hover:bg-slate-500"
          onClick={handleClickNewThread}
        >
          Post a {""}
          <span className="text-lg underline underline-offset-2">Reply</span>!
        </button>
      )}
      {startThreadToggle && <ReplyForm fetchThread={fetchThread} />}
      <HorizontalRule />
    </>
  );
}
