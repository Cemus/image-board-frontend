import imgTemplate from "../assets/images/banner/banner.png";

export default function Thread() {
  const responseText =
    "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW Salut je m'en lave les mains, la nuit je mens puis voilà quoi.  Puis je me lève le matin pour enfin apprendre. Quand tout à coup, me voilà levé, enfin éveillé les yeux plein de lumière aux tendres firmaments je me lasse de tout sans rompre sommeil puisque la vie est tendre aux confins de l'univers où j'entends les harpes des dieux desquels j'attends le Signe qui enfin me donnera un but loué de tous les anges qui peuplent les cieux. Salut je m'en lave les mains, la nuit je mens puis voilà quoi. Puis je me lève le matin pour enfin apprendre. Quand tout à coup, me voilà levé, enfin éveillé les yeux plein de lumière aux tendres firmaments je me lasse de tout sans rompre sommeil puisque la vie est tendre aux confins de l'univers où j'entends les harpes des dieux desquels j'attends le Signe qui enfin me donnera un but loué de tous les anges qui peuplent les cieux. Salut je m'en lave les mains, la nuit je mens puis voilà quoi. Puis je me lève le matin pour enfin apprendre. Quand tout à coup, me voilà levé, enfin éveillé les yeux plein de lumière aux tendres firmaments je me lasse de tout sans rompre sommeil puisque la vie est tendre aux confins de l'univers où j'entends les harpes des dieux desquels j'attends le Signe qui enfin me donnera un but loué de tous les anges qui peuplent les cieux. Salut je m'en lave les mains, la nuit je mens puis voilà quoi. Puis je me lève le matin pour enfin apprendre. Quand tout à coup, me voilà levé, enfin éveillé les yeux plein de lumière aux tendres firmaments je me lasse de tout sans rompre sommeil puisque la vie est tendre aux confins de l'univers où j'entends les harpes des dieux desquels j'attends le Signe qui enfin me donnera un but loué de tous les anges qui peuplent les cieux";

  return (
    <div className="flex flex-col gap-1">
      <div className="mx-2">
        <p>
          File: <a className="text-blue-900 underline">Fjfzefoezfhosf.jpg</a>
          {" ("}
          <span>84 KB</span>,<span>824</span>x<span>742</span>
          {")"}
        </p>
        <div className="flex flex-row gap-5">
          <img className="my-2" src={imgTemplate} />
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-1">
              <p className=" font-bold">Anonymous</p>
              <p>10/10/2011</p>
              <p>
                No.<span>46846848</span>
              </p>
            </div>
            <p className=" break-words">Blabla blablabla blablabla blabla</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <p className=" mx-2 ">{">>"}</p>
        <div className="bg-gray-500 p-1 rounded-sm">
          <div className="flex flex-row gap-1">
            <p className=" font-bold">Anonymous</p>
            <p>10/10/2011</p>
            <p>
              No.<span>46846848</span>
            </p>
          </div>
          <p>
            File:<a className="text-blue-900">Fjfzefoezfhosf.jpg</a>
            {"("}
            <span>84 KB</span>,<span>824</span>x<span>742</span>
            {")"}
          </p>
          <div className="flex flex-row flex-wrap gap-4 items-start mx-4 ">
            <img className="max-w-40 max-h-40 " src={imgTemplate} />
            <p className="break-all">{responseText}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <p className=" mx-2 ">{">>"}</p>
        <div className="bg-gray-500 p-1 rounded-sm">
          <div className="flex flex-row gap-1 p-1">
            <p className=" font-bold">Anonymous</p>
            <p>10/10/2011</p>
            <p>
              No.<span>46846848</span>
            </p>
          </div>

          <div className="flex flex-row items-center">
            <p className=" break-words inline-block w-full p-2 mx-4">
              Blabla blablabla blablabla blablabla blablabla blablabla blablabla
              blablblablablaabla blablabla blabla
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <p className=" mx-2 ">{">>"}</p>
        <div className="bg-gray-500 p-1 rounded-sm">
          <div className="flex flex-row gap-1 p-1">
            <p className=" font-bold">Anonymous</p>
            <p>10/10/2011</p>
            <p>
              No.<span>46846848</span>
            </p>
          </div>

          <div className="flex flex-row items-center">
            <p className=" break-all inline-block w-full p-2 mx-4">
              blablblablablablablablablablablablablablaabla Blabla blablabla
              blablblablablablablablablablablablablablaabla blabla
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <p className=" mx-2 ">{">>"}</p>
        <div className="bg-gray-500 p-1 rounded-sm">
          <div className="flex flex-row gap-1 p-1">
            <p className=" font-bold">Anonymous</p>
            <p>10/10/2011</p>
            <p>
              No.<span>46846848</span>
            </p>
          </div>

          <div className="flex flex-row items-center">
            <p className="break-all inline-block w-full p-2 mx-4">
              Blabla blablabla blablabla blabla
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
