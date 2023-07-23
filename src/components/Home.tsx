import Header from "./Header";
import NewThread from "./NewThread";
import Board from "./Board";

export default function Home() {
  window.scrollTo({ top: 0 });
  return (
    <div className="flex flex-col w-full gap-4 bg-gray-900 text-white">
      <Header />
      <NewThread />
      <Board />
    </div>
  );
}
