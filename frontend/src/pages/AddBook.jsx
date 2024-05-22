import { useLocation, useNavigate } from "react-router-dom";
import { addbook, updateBooks } from "../api";
import AddBookForm from "../components/AddBookForm";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context";

const AddBook = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isEdit, setIsEdit } = useContext(GlobalContext);
  const [formData, setFormData] = useState({});
  const saveBookToDb = async (data) => {
    console.log(data);
    try {
      const response = !isEdit
        ? await addbook({ ...data })
        : await updateBooks({ ...data }, location.state.bookItem._id);
      const result = await response.data;
      console.log(result);
      if (result) {
        setIsEdit(false);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // console.log(location);
    if (location.state) {
      const { bookItem } = location.state;
      setFormData({ ...bookItem });

      setIsEdit(true);
    }
  }, [location]);
  return (
    <div className=" flex justify-center items-center relative">
      <AddBookForm postFormData={saveBookToDb} defaultFormData={formData} />
    </div>
  );
};

export default AddBook;
