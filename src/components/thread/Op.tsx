import imgTemplate from "../../assets/images/banner/banner.png";

interface OpProps {
  comment: string;
}

export default function Op({ comment }: OpProps) {
  return (
    <div className="flex flex-col m-2 items-start ">
      <p>
        File: <a className="text-blue-900 underline">Fjfzefoezfhosf.jpg</a>
        {" ("}
        <span>84 KB</span>,<span>824</span>x<span>742</span>
        {")"}
      </p>
      <div className="flex items-center mb-2 mr-2 flex-col sm:flex-row sm:gap-1">
        <img
          className=" mx-2 float-left max-w-40 max-h-40 "
          loading="lazy"
          src={imgTemplate}
        />
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-1">
            <p className=" font-bold">Anonymous</p>
            <p>10/10/2011</p>
            <p>
              No.<span>46846848</span>
            </p>
          </div>
          <p className="break-words">{comment}</p>
        </div>
      </div>
    </div>
  );
}
