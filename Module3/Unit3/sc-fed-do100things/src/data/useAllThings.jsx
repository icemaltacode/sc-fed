import useData from "./useData.jsx";

function useAllThings() {
  return useData((state) => state.things).map(({ id }) => id);
}

export default useAllThings;
