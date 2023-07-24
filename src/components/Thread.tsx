import imgTemplate from "../assets/images/banner/banner.png";

export default function Thread() {
  const responseText =
    "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW Salut je m'en lave les mains, la nuit je mens puis voilà quoi.  Puis je me lève le matin pour enfin apprendre. Quand tout à coup, me voilà levé, enfin éveillé les yeux plein de lumière aux tendres firmaments je me lasse de tout sans rompre sommeil puisque la vie est tendre aux confins de l'univers où j'entends les harpes des dieux desquels j'attends le Signe qui enfin me donnera un but loué de tous les anges qui peuplent les cieux. Salut je m'en lave les mains, la nuit je mens puis voilà quoi. Puis je me lève le matin pour enfin apprendre. Quand tout à coup, me voilà levé, enfin éveillé les yeux plein de lumière aux tendres firmaments je me lasse de tout sans rompre sommeil puisque la vie est tendre aux confins de l'univers où j'entends les harpes des dieux desquels j'attends le Signe qui enfin me donnera un but loué de tous les anges qui peuplent les cieux. Salut je m'en lave les mains, la nuit je mens puis voilà quoi. Puis je me lève le matin pour enfin apprendre. Quand tout à coup, me voilà levé, enfin éveillé les yeux plein de lumière aux tendres firmaments je me lasse de tout sans rompre sommeil puisque la vie est tendre aux confins de l'univers où j'entends les harpes des dieux desquels j'attends le Signe qui enfin me donnera un but loué de tous les anges qui peuplent les cieux. Salut je m'en lave les mains, la nuit je mens puis voilà quoi. Puis je me lève le matin pour enfin apprendre. Quand tout à coup, me voilà levé, enfin éveillé les yeux plein de lumière aux tendres firmaments je me lasse de tout sans rompre sommeil puisque la vie est tendre aux confins de l'univers où j'entends les harpes des dieux desquels j'attends le Signe qui enfin me donnera un but loué de tous les anges qui peuplent les cieux";

  return (
    <div className="flex flex-col gap-2 max-[400px]:items-center">
      <div className="m-2">
        <p>
          File: <a className="text-blue-900 underline">Fjfzefoezfhosf.jpg</a>
          {" ("}
          <span>84 KB</span>,<span>824</span>x<span>742</span>
          {")"}
        </p>
        <div className="flex  items-center sm:gap-2 min-sm:gap-1 max-sm:flex-col max-md:flex-row">
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
            <p className="break-words">
              Blabla blablabla blablabla blabla blabla blabla blabla blabla
              blabla blabla blabla blabla blabla blabla blabla blabla blabla
              blabla blabla blabla blabla blabla blabla blabla blabla blabla
              blabla blabla blabla blabla blabla blabla blabla blabla blabla
              blablablabla
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        <p className=" mx-2 ">{">>"}</p>
        <div className="bg-gray-500 p-1 rounded-sm mr-2 ">
          <div className="flex flex-row gap-1">
            <p className=" font-bold">Anonymous</p>
            <p>10/10/2011</p>
            <p>
              No.<span>46846848</span>
            </p>
          </div>
          <p>
            File:<a className="text-blue-900 underline">Fjfzefoezfhosf.jpg</a>
            {"("}
            <span>84 KB</span>,<span>824</span>x<span>742</span>
            {")"}
          </p>

          <img
            className="mx-2 float-left  max-w-40 max-h-40 "
            loading="lazy"
            src={imgTemplate}
          />
          <p className="m-4 break-all">{responseText}</p>
        </div>
      </div>

      <div className="flex flex-row">
        <p className=" mx-2 ">{">>"}</p>
        <div className="bg-gray-500 p-1 rounded-sm mr-2">
          <div className="flex flex-row gap-1 mx-2">
            <p className=" font-bold">Anonymous</p>
            <p>10/10/2011</p>
            <p>
              No.<span>46846848</span>
            </p>
          </div>

          <p className="m-4 break-all">Bla bla ? blablablabla</p>
        </div>
      </div>

      <div className="flex flex-row">
        <p className=" mx-2 ">{">>"}</p>
        <div className="bg-gray-500 p-1 rounded-sm mr-2">
          <div className="flex flex-row gap-1 mx-2">
            <p className=" font-bold">Anonymous</p>
            <p>10/10/2011</p>
            <p>
              No.<span>46846848</span>
            </p>
          </div>

          <p className="m-4 break-all">Blablablabla {":)"}</p>
        </div>
      </div>
    </div>
  );
}
