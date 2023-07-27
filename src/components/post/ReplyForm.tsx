import { useState, useRef } from "react";

import { useParams } from "react-router-dom";

interface ReplyFormProps {
  name: string;
  comment: string;
  image: string;
}

interface ComponentReplyForm {
  fetchThread: () => Promise<void>;
}

export default function ReplyForm({ fetchThread }: ComponentReplyForm) {
  const { id } = useParams();
  const threadRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    // Fait défiler vers le bas de l'élément du fil de discussion
    threadRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  const [formData, setFormData] = useState<ReplyFormProps>({
    name: "",
    comment: "",
    image: "",
  });

  const formReset = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      comment: "",
      image: "",
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataToSend = {
      name: formData.name,
      comment: formData.comment,
      image: formData.image,
    };

    fetch(`/api/threads/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        formReset();
        fetchThread().then(() => {
          scrollToBottom();
        });
      })
      .catch((error) => {
        console.error("Error sending the comment:", error);
      });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 grid-rows gap-4 w-1/2 self-center "
    >
      <div>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          value={formData.name}
          className="p-1 border border-black w-full text-black"
          type="text"
          id="name"
          name="name"
          placeholder="Anonymous"
        />
      </div>

      <div className="col-span-2">
        <label className="" htmlFor="comment">
          Comment
        </label>
        <textarea
          onChange={handleChange}
          value={formData.comment}
          className="p-1 border border-black h-16 w-full text-black"
          id="comment"
          name="comment"
        />
      </div>
      <div className="col-span-2">
        <label htmlFor="file">Add a file ?</label>
        <input
          onChange={handleChange}
          value={formData.image}
          className="w-full text-white file:border-2  file:text-white file:cursor-pointer file:bg-indigo-500 file:rounded-md file:border-white file:hover:bg-indigo-600  file:font-semibold file:py-1 file:px-2 "
          type="file"
          id="fileInput"
          name="file"
          accept=".jpg, .png, .jpeg, .gif"
        />
      </div>
      <div className="flex justify-center w-full col-span-2">
        <button
          type="submit"
          className=" border-2 w-1/2 cursor-pointer bg-indigo-500 text-white rounded-md border-white hover:bg-indigo-600  font-semibold py-2 px-4 transform transition-transform hover:translate-y-1 hover:scale-105"
        >
          POST!
        </button>
      </div>
    </form>
  );
}
