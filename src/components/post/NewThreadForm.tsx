export default function NewThreadForm() {
  return (
    <form className="grid grid-cols-2 grid-rows gap-4 w-1/2 self-center ">
      <div>
        <label htmlFor="name">Name</label>
        <input
          className="p-1 border border-black w-full text-black"
          type="text"
          id="name"
          name="name"
          placeholder="Anonymous"
        />
      </div>

      <div className="col-span-2">
        <label htmlFor="subject">Subject</label>
        <input
          className="p-1 border border-black w-full text-black"
          type="text"
          id="subject"
          name="subject"
        />
      </div>
      <div className="col-span-2">
        <label className="" htmlFor="comment">
          Comment
        </label>
        <textarea
          className="p-1 border border-black h-16 w-full text-black"
          id="comment"
          name="comment"
        />
      </div>
      <div className="col-span-2">
        <label htmlFor="file">Add a file ?</label>
        <input
          className="w-full text-white file:border-2  file:text-white file:cursor-pointer file:bg-indigo-500 file:rounded-md file:border-white file:hover:bg-indigo-600  file:font-semibold file:py-1 file:px-2 "
          type="file"
          id="fileInput"
          name="file"
          accept=".jpg, .png, .jpeg, .gif"
        />
      </div>
      <div className="flex justify-center w-full col-span-2">
        <button className=" border-2 w-1/2 cursor-pointer bg-indigo-500 text-white rounded-md border-white hover:bg-indigo-600  font-semibold py-2 px-4 transform transition-transform hover:translate-y-1 hover:scale-105">
          POST!
        </button>
      </div>
    </form>
  );
}
