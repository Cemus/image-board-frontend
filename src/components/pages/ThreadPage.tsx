import Header from "../Header";
import ReplyButton from "../post/ReplyButton";
import Thread from "../thread/Thread";

export default function ThreadPage() {
  window.scrollTo({ top: 0 });
  return (
    <div className="flex flex-col gap-4 w-full min-h-screen h-full bg-gray-900 text-white">
      <Header />
      <ReplyButton />
      <div className="flex-grow">
        <Thread />
      </div>
    </div>
  );
}
