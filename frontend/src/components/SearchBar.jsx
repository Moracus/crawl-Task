import { TbSearch } from "react-icons/tb";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="max-w-48 w-1/2 flex border border-white rounded-lg p-4 cursor-pointer gap-1 items-center">
      <TbSearch />
      <input
        className="appearance-none border-none outline-none w-full text-xs bg-transparent"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
