import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import config from "../../../backConfig";

interface ReplyFormProps {
  name: string;
  comment: string;
  image: File | null;
}

interface ComponentReplyForm {
  fetchThread: () => Promise<void>;
  setCommentArea: React.Dispatch<React.SetStateAction<string>>;
  commentArea: string;
}

export default function ReplyForm({
  fetchThread,
  commentArea,
  setCommentArea,
}: ComponentReplyForm) {
  const { id } = useParams();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const [formData, setFormData] = useState<ReplyFormProps>({
    name: "",
    comment: "",
    image: null,
  });
  const formReset = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      comment: "",
      image: null,
    }));
    setCommentArea("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files && files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      if (e.target.name === "comment") {
        setCommentArea(value);
      } else {
        setFormData({ ...formData, [name]: value });
      }
    }
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      comment: commentArea,
    }));
  }, [commentArea]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataToSend = new FormData();
    if (formData.name !== "") {
      dataToSend.append("name", formData.name);
    }
    dataToSend.append("comment", formData.comment);
    if (formData.image !== null) {
      dataToSend.append("image", formData.image);
    }

    fetch(`${config.apiBaseUrl}/api/threads/${id}`, {
      method: "PATCH",
      body: dataToSend,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response not ok");
        }
        return response.json();
      })
      .then(() => {
        formReset();
        fetchThread().then(() => {
          setTimeout(() => {
            scrollToBottom();
          }, 100);
        });
      })
      .catch((error) => {
        console.error("Error sending the reply:", error);
      });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="grid grid-cols-2 grid-rows gap-4 self-center "
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
          <label htmlFor="comment">Comment</label>
          <textarea
            onChange={handleChange}
            value={commentArea}
            required
            className="p-1 border border-black h-16 w-full text-black"
            id="comment"
            name="comment"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="file">Add a file ?</label>
          <input
            ref={fileInputRef}
            onChange={handleChange}
            className="w-full text-white file:border-2  file:text-white file:cursor-pointer file:bg-indigo-500 file:rounded-md file:border-white file:hover:bg-indigo-600  file:font-semibold file:py-1 file:px-2 "
            type="file"
            id="image"
            name="image"
            accept=".jpg, .png, .jpeg, .gif"
          />
        </div>
        <div className="flex justify-center w-full col-span-2">
          {formData.comment ? (
            <button
              type="submit"
              className=" border-2 w-1/2 cursor-pointer bg-indigo-500 text-white rounded-md border-white hover:bg-indigo-600  font-semibold py-2 px-4 transform transition-transform hover:translate-y-1 hover:scale-105"
            >
              POST!
            </button>
          ) : (
            <p className="font-bold text-red-600">
              (You need write a comment to post a new reply)
            </p>
          )}
        </div>
      </form>
    </>
  );
}
