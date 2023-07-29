import Op from "./Op";
import Reply from "./Reply";

interface ThreadProps {
  thread: {
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
  } | null;
}

export default function Thread({ thread }: ThreadProps) {
  return (
    <>
      {thread ? (
        <div className="flex-col items-start self-start w-full h-full">
          <Op
            id={thread._id}
            opName={thread.opName}
            subject={thread.subject}
            comment={thread.comment}
            image={thread.image}
            imageWidth={thread.imageWidth}
            imageHeight={thread.imageHeight}
            imageSize={thread.imageSize}
            date={thread.createdAt}
          />
          {thread.replies.map((reply) => (
            <Reply
              key={reply._id}
              id={reply._id}
              name={reply.name}
              comment={reply.comment}
              image={reply.image}
              imageWidth={reply.imageWidth}
              imageHeight={reply.imageHeight}
              imageSize={reply.imageSize}
              date={reply.createdAt}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-10 mt-[-20%]">
          <div className=" w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
}
