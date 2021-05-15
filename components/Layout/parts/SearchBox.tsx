import { SearchIcon } from '@heroicons/react/outline';

function SearchBox() {
  return (
    <div className="h-full w-auto flex flex-row">
      <input
        className="w-10 h-full bg-gray-100 transition-all duration-300 ease-in-out text-center text-transparent hover:text-black focus:text-black placeholder-transparent border-r-2 hover:w-56 focus:w-56 hover:placeholder-black"
        placeholder="Test"
      />
      <i className="pointer-events-none h-full absolute pl-3 flex items-center outline-none">
        <SearchIcon width="24" height="24" className="w-4 h-4 mx-auto" />
      </i>
    </div>
  );
}

export default SearchBox;
