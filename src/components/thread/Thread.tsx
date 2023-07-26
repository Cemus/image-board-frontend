import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Op from "./Op";
import Reply from "./Reply";

interface ThreadProps {
  _id: string;
  opName: string;
  subject: string;
  comment: string;
  image: string;
  createdAt: string;
}
export default function Thread() {
  const [thread, setThread] = useState<ThreadProps | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchThread = async () => {
      const response = await fetch(`/api/threads/${id}`);
      const json = await response.json();

      if (response.ok) {
        setThread(json);
      }
    };
    fetchThread();
  }, []);

  return (
    <>
      {thread ? (
        <div className="flex flex-col items-start">
          <Op
            id={thread._id}
            opName={thread.opName}
            subject={thread.subject}
            comment={thread.comment}
            image={thread.image}
            date={thread.createdAt}
          />
          <Reply
            hasImage={true}
            comment={
              "blablabblablabblablablablablablablablalablablablabblablablablablablablabblablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablablablablablablablalablablablabblablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablablablablablablablalablablablabblablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablablablablablablablalablablablabblablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablablablablablablablalablablablabblablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablablablablablablablalablablablabblablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablablablablablablablalablablablabblablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablablablablablablablalablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablabblablablablablablablablalablablablablablablablablablalabla"
            }
          />
          <Reply
            hasImage={false}
            comment={"blablabblablablablablablablablalabla"}
          />
          <Reply
            hasImage={true}
            comment={"blablabblablablablablablablablalabla"}
          />
        </div>
      ) : (
        <div>
          <p>Couldn't charge the page...</p>
        </div>
      )}
    </>
  );
}
