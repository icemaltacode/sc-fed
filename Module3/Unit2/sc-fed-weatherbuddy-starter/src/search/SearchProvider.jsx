import SearchContext from "./context.jsx";

function SearchProvider({ locationHandler, children }) {
  const value = {
    app_id: import.meta.env.VITE_OPENWEATHER_APP_ID,
    locationHandler: locationHandler,
  };
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

export default SearchProvider;
