import useData from "./useData.jsx";

function useAllThings() {
  return useData((state) => state.things);
}

export default useAllThings;
