/* eslint-disable react/prop-types */
import { TbEdit, TbTrash } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { deleteBooks } from "../api";
import { useEffect, useState } from "react";
import AlertDialog from "./AlertDialog";
const Card = ({ bookItem, fetchBookList }) => {
  const { title, author, genre, yearPublished } = bookItem;
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);
  const handleEdit = async (bookItem) => {
    navigate("/add-book", { state: { bookItem } });
  };
  const handleDelete = async (bookItem) => {
    try {
      const response = await deleteBooks(bookItem._id);
      const result = await response?.data;
      if (result?.success) {
        setOpenDialog(false);
        fetchBookList();
      }
    } catch (error) {
      setOpenDialog(false);
      console.log(error);
    }
  };
  useEffect(() => {
    if (deleteConfirmed) {
      handleDelete(bookItem);
    }
  }, [deleteConfirmed]);
  return (
    <>
      {openDialog && (
        <AlertDialog
          bookTitle={bookItem.title}
          setOpenDialog={setOpenDialog}
          setDeleteConfirmed={setDeleteConfirmed}
        />
      )}
      <div className="group  flex flex-col border border-white bg-gray-950 bg-opacity-70 rounded-lg  hover:opacity-70 hover:drop-shadow-lg">
        <img
          src="https://th.bing.com/th/id/OIP.cyi0Q6aWcpSlLHb8N6JOJAHaJA?rs=1&pid=ImgDetMain"
          alt="cover-image"
          className="rounded-t-lg object-contain h-60"
        />

        <div className="hidden group-hover:flex    absolute w-full h-full items-center justify-center gap-3">
          <TbEdit
            className=" font-bold text-blue-800 "
            size={50}
            onClick={() => handleEdit(bookItem)}
          />
          <TbTrash
            className=" font-bold text-red-800"
            size={50}
            onClick={() => setOpenDialog(true)}
          />
        </div>

        <div className="p-5 ">
          <h1
            className="mb-2 text-2xl font-bold tracking-tight  text-gray-300 truncate"
            title={title}
          >
            {title}
          </h1>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            author : {author}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            genre : {genre}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            year : {yearPublished}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
