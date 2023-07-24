import ThreadThumbnail from "./ThreadThumbnail";

export default function Board() {
  function rdmImage() {
    return Math.floor(Math.random() * (999 - 1) + 1);
  }
  function rdmSize() {
    return Math.floor(Math.random() * (500 - 200) + 200);
  }
  function rdmString() {
    let finalString: string = "";
    const rdmNumber: number = Math.floor(Math.random() * (100 - 4) + 4);
    for (let i = 0; i < rdmNumber; i++) {
      finalString = finalString + "a";
    }
    return finalString;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center bg-gray-900">
      <ThreadThumbnail
        id={0}
        img={`https://picsum.photos/${rdmSize()}/${rdmSize()}?${rdmImage()}`}
        subject={rdmString()}
      />
      <ThreadThumbnail
        id={0}
        img={`https://picsum.photos/${rdmSize()}/${rdmSize()}?${rdmImage()}`}
        subject={rdmString()}
      />
      <ThreadThumbnail
        id={0}
        img={`https://picsum.photos/${rdmSize()}/${rdmSize()}?${rdmImage()}`}
        subject={rdmString()}
      />
      <ThreadThumbnail
        id={0}
        img={`https://picsum.photos/${rdmSize()}/${rdmSize()}?${rdmImage()}`}
        subject={rdmString()}
      />
      <ThreadThumbnail
        id={0}
        img={`https://picsum.photos/${rdmSize()}/${rdmSize()}?${rdmImage()}`}
        subject={rdmString()}
      />
      <ThreadThumbnail
        id={0}
        img={`https://picsum.photos/${rdmSize()}/${rdmSize()}?${rdmImage()}`}
        subject={rdmString()}
      />
      <ThreadThumbnail
        id={0}
        img={`https://picsum.photos/${rdmSize()}/${rdmSize()}?${rdmImage()}`}
        subject={rdmString()}
      />
      <ThreadThumbnail
        id={0}
        img={`https://picsum.photos/${rdmSize()}/${rdmSize()}?${rdmImage()}`}
        subject={rdmString()}
      />
      <ThreadThumbnail
        id={0}
        img={`https://picsum.photos/${rdmSize()}/${rdmSize()}?${rdmImage()}`}
        subject={rdmString()}
      />
      <ThreadThumbnail
        id={0}
        img={`https://picsum.photos/${rdmSize()}/${rdmSize()}?${rdmImage()}`}
        subject={rdmString()}
      />
      <ThreadThumbnail
        id={0}
        img={`https://picsum.photos/${rdmSize()}/${rdmSize()}?${rdmImage()}`}
        subject={rdmString()}
      />
    </div>
  );
}
