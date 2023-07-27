import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import ReplyButton from "../post/ReplyButton";
import Thread from "../thread/Thread";

interface ThreadProps {
  _id: string;
  opName: string;
  subject: string;
  comment: string;
  image: string;
  replies: Array<{
    _id: string;
    name: string;
    comment: string;
    image: string;
    createdAt: string;
  }>;
  createdAt: string;
}

export default function ThreadPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const [thread, setThread] = useState<ThreadProps | null>(null); // Fix the type here
  const { id } = useParams();

  const fetchThread = async () => {
    const response = await fetch(`/api/threads/${id}`);
    const json = await response.json();

    if (response.ok) {
      setThread(json);
      console.log("TEST");
    }
  };

  useEffect(() => {
    fetchThread();
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full min-h-screen h-full bg-gray-900 text-white">
      <Header />
      <ReplyButton fetchThread={fetchThread} />
      <div className="flex flex-grow  justify-center items-center">
        <Thread thread={thread} />
      </div>
    </div>
  );
}
