import imgTemplate from "../../assets/images/banner/banner.png";

interface ReplyProps {
  hasImage: boolean;
  comment: string;
}

export default function Reply({ hasImage, comment }: ReplyProps) {
  return (
    <>
      {hasImage && (
        <div className="flex flex-row">
          <p className="mx-2 ">{">>"}</p>
          <div className="bg-gray-500 p-1 rounded-sm mb-2 mr-2">
            <div className="flex flex-row gap-1 mx-2">
              <p className=" font-bold">Anonymous</p>
              <p>10/10/2011</p>
              <p>
                No.<span>46846848</span>
              </p>
            </div>
            <p className="mx-2">
              File:{" "}
              <a className="text-blue-900 underline">Fjfzefoezfhosf.jpg</a>
              {" ("}
              <span>84 KB</span>,<span>824</span>x<span>742</span>
              {")"}
            </p>
            <img
              className="mx-2 float-left  max-w-40 max-h-40"
              loading="lazy"
              src={imgTemplate}
            />
            <p className="m-4 break-all w-auto  sm:min-w-[500px]">{comment}</p>
          </div>
        </div>
      )}

      {!hasImage && (
        <div className="flex flex-row">
          <p className="mx-2">{">>"}</p>
          <div className="bg-gray-500 p-1 rounded-sm mb-2 mr-2">
            <div className="flex flex-row gap-1 mx-2">
              <p className=" font-bold">Anonymous</p>
              <p>10/10/2011</p>
              <p>
                No.<span>46846848</span>
              </p>
            </div>

            <p className="m-4 break-all">{comment}</p>
          </div>
        </div>
      )}
    </>
  );
}
