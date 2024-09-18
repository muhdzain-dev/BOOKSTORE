import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link, Navigate, useParams } from "react-router-dom";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    axios.post("http://localhost:5555/books", data).then(() => {
      Navigate("/");
    });
  };

  return (
    <div>
      <input
        type="text"
        className="form-control border-2 border-gray-500 px-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="form-control border-2 border-gray-500 px-4"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        className="form-control border-2 border-gray-500 px-4"
        value={publishYear}
        onChange={(e) => setPublishYear(e.target.value)}
      />
      <button class="rounded-tl-lg " onClick={handleSaveBook}>
        Save Changes
      </button>
    </div>
  );
};

export default CreateBook;
