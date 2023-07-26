import { format, parseISO } from "date-fns";

interface OpProps {
  id: string;
  opName: string;
  subject: string;
  comment: string;
  image: string;
  date: string;
}

export default function Op({
  id,
  opName,
  subject,
  comment,
  image,
  date,
}: OpProps) {
  function handleImageLength(image: string): string {
    if (image.length < 20) {
      return image;
    } else {
      const imageFirstPart = image.substring(0, 10);
      const imageLastPart = image.substring(image.length - 10, image.length);
      const imageTruncate = `${imageFirstPart}(...)${imageLastPart}`;
      return imageTruncate;
    }
  }

  function handleIdFormat(id: string): string {
    const idNumber = id.replace(/\D/g, "");
    return idNumber.substring(0, 8);
  }
  function formatDate(date: string): string {
    const dateISO = parseISO(date);

    const dateMDY = format(dateISO, "MM/dd/yy");
    const dateDay = format(dateISO, "E");
    const dateHour = format(dateISO, "kk:mm");

    const dateResult = `${dateMDY} (${dateDay}) ${dateHour}`;
    return dateResult;
  }
  return (
    <div className="flex flex-col m-2 items-start ">
      <div className="flex flex-row gap-1">
        <p className=" font-bold">{opName}</p>
        <p>{formatDate(date)}</p>
        <p>
          No.{" "}
          <span className="text-green-500 font-semibold">
            {handleIdFormat(id)}
          </span>
        </p>
      </div>
      <p>
        File:{" "}
        <a className="text-blue-900 underline">{handleImageLength(image)}</a>
        {" ("}
        <span>84 KB</span>,<span>824</span>x<span>742</span>
        {")"}
      </p>
      <div className="flex items-start mb-2 mr-2 flex-col sm:flex-row sm:gap-1">
        <img
          className=" mx-2 float-left max-w-40 max-h-40 "
          loading="lazy"
          src={image}
        />
        <div className="flex flex-col gap-1">
          <p className="font-bold">{subject}</p>
          <br />
          <p className="break-words">{comment}</p>
        </div>
      </div>
    </div>
  );
}
