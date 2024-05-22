import { useContext, useEffect } from "react";
import { PiSpinnerBallDuotone } from "react-icons/pi";
import { GlobalContext } from "../context";
import { getBooks } from "../api";
import Card from "../components/Card";
import { isMatching } from "../../utils";
const Home = () => {
  const {
    bookList,
    setBookList,
    pending,
    setPending,
    filteredBooks,
    setFilteredBooks,
    searchQuery,
    setIsEdit,
  } = useContext(GlobalContext);
  const fetchBookList = async () => {
    setPending(true);
    const res = await getBooks();
    const result = await res.data;
    // console.log(result.data);
    if (result?.success && result.data.length > 0) {
      setFilteredBooks(result.data);
      setBookList(result.data);
      setPending(false);
    } else {
      setBookList([]);
      setFilteredBooks([]);
      setPending(false);
    }
  };
  useEffect(() => {
    fetchBookList();
    setIsEdit(false);
  }, []);

  //for searching
  useEffect(() => {
    if (!searchQuery) {
      setFilteredBooks(bookList);
    }
    const searchFilteredBooks = bookList?.filter((book) => {
      const titleMatch = isMatching(book?.title, searchQuery);
      const authorMatch = isMatching(book?.author, searchQuery);
      return titleMatch || authorMatch;
    });
    if (searchQuery) {
      setFilteredBooks(searchFilteredBooks);
    }
  }, [bookList, searchQuery]);
  return (
    <div className="min-h-full bg-gray-900">
      {pending ? (
        <div className="w-full h-full flex justify-center items-center">
          <PiSpinnerBallDuotone size={50} className="animate-spin " />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 p-6 md:p-7 md:grid-cols-4 lg:grid-cols-4 lg:gap-8 lg:p-8 ">
          {filteredBooks && filteredBooks.length ? (
            filteredBooks.map((book) => {
              return (
                <Card
                  key={book._id}
                  bookItem={book}
                  fetchBookList={fetchBookList}
                />
              );
            })
          ) : (
            <h1>No books found</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
