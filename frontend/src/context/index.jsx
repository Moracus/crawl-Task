import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [bookList, setBookList] = useState([]);
  const [pending, setPending] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  return (
    <GlobalContext.Provider
      value={{
        bookList,
        setBookList,
        pending,
        setPending,
        isEdit,
        setIsEdit,
        filteredBooks,
        setFilteredBooks,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
