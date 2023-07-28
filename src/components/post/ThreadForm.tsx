import { useState } from "react";
import { useNavigate } from "react-router";

interface ThreadFormProps {
  opName: string;
  subject: string;
  comment: string;
  image: File | null;
}

export default function NewThreadForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ThreadFormProps>({
    opName: "",
    subject: "",
    comment: "",
    image: null,
  });

  const formReset = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      subject: "",
      comment: "",
      image: null,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files && files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataToSend = new FormData();
    dataToSend.append("opName", formData.opName);
    dataToSend.append("subject", formData.subject);
    dataToSend.append("comment", formData.comment);
    if (formData.image !== null) {
      dataToSend.append("image", formData.image);
    }
    fetch(`/api/threads/`, {
      method: "POST",
      body: dataToSend,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error sending the thread.");
        }
        return response.json();
      })
      .then((data) => {
        formReset();
        navigate(`/thread/${data._id}`);
      })
      .catch((error) => {
        console.error("Error sending the thread:", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="grid grid-cols-2 grid-rows gap-4 w-1/2 self-center "
    >
      <div>
        <label htmlFor="opName">Name</label>
        <input
          className="p-1 border border-black w-full text-black"
          onChange={handleChange}
          value={formData.opName}
          type="text"
          id="opName"
          name="opName"
          placeholder="Anonymous"
        />
      </div>

      <div className="col-span-2">
        <label htmlFor="subject">Subject</label>
        <input
          className="p-1 border border-black w-full text-black"
          onChange={handleChange}
          value={formData.subject}
          maxLength={128}
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
          onChange={handleChange}
          value={formData.comment}
          id="comment"
          name="comment"
        />
      </div>
      <div className="col-span-2">
        <label htmlFor="file">Add a file ?</label>
        <input
          className="w-full text-white file:border-2  file:text-white file:cursor-pointer file:bg-indigo-500 file:rounded-md file:border-white file:hover:bg-indigo-600  file:font-semibold file:py-1 file:px-2 "
          onChange={handleChange}
          type="file"
          id="image"
          name="image"
          accept=".jpg, .png, .jpeg, .gif"
        />
      </div>

      <div className="flex justify-center w-full col-span-2">
        {formData.image ? (
          <button
            type="submit"
            className=" border-2 w-1/2 cursor-pointer bg-indigo-500 text-white rounded-md border-white hover:bg-indigo-600  font-semibold py-2 px-4 transform transition-transform hover:translate-y-1 hover:scale-105"
          >
            POST!
          </button>
        ) : (
          <p className="font-bold text-red-600">
            (You need to provide an image to post a new thread)
          </p>
        )}
      </div>
    </form>
  );
}
