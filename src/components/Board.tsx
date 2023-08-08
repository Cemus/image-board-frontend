import { useEffect, useState } from "react";
import ThreadThumbnail from "./ThreadThumbnail";

interface ThreadProps {
  _id: string;
  subject: string;
  comment: string;
  image: string;
}

export default function Board() {
  const [threads, setThreads] = useState<ThreadProps[] | null>(null);
  useEffect(() => {
    const fetchThreads = async () => {
      const response = await fetch("/api/threads");
      const json = await response.json();

      if (response.ok) {
        setThreads(json);
      }
    };
    fetchThreads();
  }, []);
  return (
    <>
      {threads && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 items-start bg-gray-900">
          {threads.map((thread) => (
            <ThreadThumbnail
              key={thread._id}
              id={thread._id}
              subject={thread.subject}
              comment={thread.comment}
              image={thread.image}
            />
          ))}
        </div>
      )}
      {!threads ||
        (threads.length === 0 && (
          <div className="w-full h-full flex justify-center items-center">
            <p className=" text-center">No threads!</p>
          </div>
        ))}
    </>
  );
}
