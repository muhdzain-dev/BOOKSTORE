import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link, Navigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    axios.put(`http://localhost:5555/books/${id}`, data).then(() => {
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
      <button className="rounded-tl-lg " onClick={handleSaveBook}>
        Save Changes
      </button>
    </div>
  );
};

export default EditBook;
