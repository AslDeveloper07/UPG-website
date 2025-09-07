const SearchBar = () => {
  return (
    <div className="fixed left-1/2 top-[14px] -translate-x-1/2 w-[500px]">
      <div className="border border-[#50505063] dark:border-[#33333391] focus-within:border-[#0EA5E9] px-2 w-full rounded-md bg-[#fffb] dark:bg-[#111] transition duration-300">
        <input
          type="search"
          className="outline-none py-1.5 w-full bg-transparent text-black dark:text-[#0EA5E9] placeholder-gray-500 dark:placeholder-[#808080]"
          placeholder="поиск товара..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
