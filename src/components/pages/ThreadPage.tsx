import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import NewReplyButton from "../post/NewReplyButton";
import Thread from "../thread/Thread";
import { Helmet } from "react-helmet-async";

import config from "../../../backConfig";

interface ThreadProps {
  _id: string;
  formatedId: string;
  opName: string;
  subject: string;
  comment: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  directReplies: Array<string | undefined>;
  replies: Array<{
    _id: string;
    formatedId: string;
    name: string;
    comment: string;
    image: string;
    imageWidth: number;
    imageHeight: number;
    imageSize: number;
    createdAt: string;
    directReplies: Array<string | undefined>;
  }>;
  createdAt: string;
  commentArea: string;
}

export default function ThreadPage() {
  const [isReplyFormHovered, setIsReplyFormHovered] = useState<boolean>(false);
  const [commentArea, setCommentArea] = useState<string>("");
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const [startReplyToggle, setStartReplyToggle] = useState(false);
  const [thread, setThread] = useState<ThreadProps | null>(null);
  const { id } = useParams();

  const fetchThread = async () => {
    const response = await fetch(`${config.apiBaseUrl}/api/threads/${id}`);
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
    <>
      <Helmet>
        <title className="text-overflow-ellipsis">
          {`${thread?.subject} - ${thread?.comment}`}
        </title>
        <meta
          name="description"
          content="My Image-Board is an anonymous image-board platform where users can share and discuss images on various topics. Join the community and explore a diverse range of content from art, memes, photography, and more."
        />
        <meta
          name="keywords"
          content="image-board, image sharing, artistic creations, anonymous, memes, photography, community, art"
        />
        <meta name="author" content="Kévin Lionnet" />
        <meta name="robots" content="index, follow" />
      </Helmet>
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
            isReplyFormHovered={isReplyFormHovered}
            setIsReplyFormHovered={setIsReplyFormHovered}
          />
        </div>
      </div>
    </>
  );
}
