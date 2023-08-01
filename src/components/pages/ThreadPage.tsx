import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import NewReplyButton from "../post/NewReplyButton";
import Thread from "../thread/Thread";

interface ThreadProps {
  _id: string;
  opName: string;
  subject: string;
  comment: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  replies: Array<{
    _id: string;
    name: string;
    comment: string;
    image: string;
    imageWidth: number;
    imageHeight: number;
    imageSize: number;
    createdAt: string;
  }>;
  createdAt: string;
  commentArea: string;
}

export default function ThreadPage() {
  const [commentArea, setCommentArea] = useState<string>("");
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const [startReplyToggle, setStartReplyToggle] = useState(false);
  const [thread, setThread] = useState<ThreadProps | null>(null); // Fix the type here
  const { id } = useParams();

  const fetchThread = async () => {
    const response = await fetch(`/api/threads/${id}`);
    const json = await response.json();

    if (response.ok) {
      setThread(json);
    }
  };

  useEffect(() => {
    setCommentArea("");
    fetchThread();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full min-h-screen h-full bg-gray-900 text-white">
      <Header />
      <NewReplyButton
        fetchThread={fetchThread}
        startReplyToggle={startReplyToggle}
        setStartReplyToggle={setStartReplyToggle}
        setCommentArea={setCommentArea}
        commentArea={commentArea}
      />
      <div className="flex flex-grow  justify-center items-center">
        <Thread
          thread={thread}
          setStartReplyToggle={setStartReplyToggle}
          setCommentArea={setCommentArea}
          commentArea={commentArea}
          fetchThread={fetchThread}
        />
      </div>
    </div>
  );
}
