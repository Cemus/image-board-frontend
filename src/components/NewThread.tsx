import { useState } from "react";
import NewThreadForm from "./NewThreadForm";

export default function NewThread() {
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
          Start a{" "}
          <span className="text-lg underline underline-offset-2">
            New Thread
          </span>
          !
        </button>
      )}
      {startThreadToggle && <NewThreadForm />}
      <hr className="bg-gray-200 h-0.5 w-3/4 mx-auto" />
    </>
  );
}
