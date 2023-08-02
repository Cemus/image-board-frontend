import Header from "../Header";
import NewThread from "../post/NewThreadButton";
import Board from "../Board";
import { Helmet } from "react-helmet-async";

export default function Home() {
  window.scrollTo({ top: 0 });
  return (
    <>
      <Helmet>
        <title>Image-Board - Share your visual content.</title>
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
      <div className="flex flex-col w-full h-screen gap-4 bg-gray-900 text-white">
        <Header />
        <NewThread />
        <div className="flex-grow">
          <Board />
        </div>
      </div>
    </>
  );
}
