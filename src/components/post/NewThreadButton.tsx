import { useState } from "react";
import NewThreadForm from "./NewThreadForm";
import HorizontalRule from "../HorizontalRule";

export default function NewThreadButton() {
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
          Start a {""}
          <span className="text-lg underline underline-offset-2">
            New Thread
          </span>
          !
        </button>
      )}
      {startThreadToggle && <NewThreadForm />}
      <HorizontalRule />
    </>
  );
}
