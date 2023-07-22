import { useState } from "react";

export default function NewThread() {
  const [startThreadToggle, isStartThreadToggle] = useState(false);
  return (
    <>
      {!startThreadToggle && (
        <button className=" m-auto p-1 rounded-md hover:bg-slate-500">
          Start a new thread!
        </button>
      )}
    </>
  );
}
