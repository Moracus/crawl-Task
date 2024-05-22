import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { GlobalContext } from "../context";

const Header = () => {
  const { searchQuery, setSearchQuery, isEdit } = useContext(GlobalContext);
  return (
    <header className="bg-opacity-70 text-white ">
      <div className="w-full lg:p-8 md:p-6 sm:p-4 ">
        <div className="flex flex-col justify-center items-center md:flex-row lg:flex-row md:justify-between lg:justify-between ">
          <div className="text-center sm:text-left flex flex-col ">
            <h1 className="text-2xl font-bold sm:text-3xl">
              <Link to={"/"}>BookLit</Link>
            </h1>

            <p className="mt-1.5 text-sm font-thin">
              Manage your books easily 🎉
            </p>
          </div>

          {!isEdit && (
            <div className="w-full mt-2 flex flex-col justify-center items-center gap-2 sm:flex-row sm:w-1/4 sm:justify-between">
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <Link to={"/add-book"}>
                <button
                  className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                  type="button"
                >
                  Create Post
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
