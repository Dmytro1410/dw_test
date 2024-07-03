import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useDebounce from "../../customHooks/useDebounce";
import { setQuickSearch } from "../../store/reducers/Definitions";

const SearchDefinitions = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  const handleOnSearch = (searchString: string) => {
    dispatch(setQuickSearch(searchString));
  };

  const debouncedSearch = useDebounce(handleOnSearch, 500);

  const handleOnChangeInput = (searchString: string) => {
    setSearchValue(searchString);
    debouncedSearch(searchString);
  };

  return (
    <input
      placeholder={"search definitions"}
      value={searchValue}
      onChange={(evt) => handleOnChangeInput(evt.target.value)}
    />
  );
};

export default SearchDefinitions;
