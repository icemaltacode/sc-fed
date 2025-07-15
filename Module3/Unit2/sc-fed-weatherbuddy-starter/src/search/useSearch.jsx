import { useContext } from "react";
import SearchContext from "./context.jsx";

function useSearch() {
  return useContext(SearchContext);
}

export default useSearch;