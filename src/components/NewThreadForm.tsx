export default function NewThreadForm() {
  return (
    <form className="grid grid-cols-2 grid-rows 3 gap-4 w-1/2 self-center">
      <div className="">
        <label htmlFor="name">Name</label>
        <input
          className="border border-black w-full"
          type="text"
          id="name"
          name="name"
          placeholder="Anonymous"
        />
      </div>
      <div className="col-span-2">
        <label htmlFor="subject">Subject</label>
        <input
          className="border border-black w-full"
          type="text"
          id="subject"
          name="subject"
        />
      </div>
      <div className="col-span-2">
        <label htmlFor="comment">Comment</label>
        <input
          className="border border-black h-16 w-full"
          type="text"
          id="comment"
          name="comment"
        />
      </div>
      <div className="col-span-2">
        <label htmlFor="file">Add a file ?</label>
        <input
          className="w-full"
          type="file"
          id="fileInput"
          name="file"
          accept=".jpg, .png, .jpeg, .gif"
        />
      </div>
    </form>
  );
}
