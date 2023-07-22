import Header from "./Header";
import NewThread from "./NewThread";
import Board from "./Board";

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full gap-4">
      <Header />
      <NewThread />
      <Board />
    </div>
  );
}
