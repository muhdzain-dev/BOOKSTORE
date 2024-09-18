import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div> Show book {id}</div> <div> {book.title}</div>
      <div> {book.author}</div>;<div> {book.publishYear}</div>
    </>
  );
};

export default DeleteBook;
