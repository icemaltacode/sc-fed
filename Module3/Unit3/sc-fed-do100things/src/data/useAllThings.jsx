import useData from "./useData.jsx";

function useAllThings() {
  return useData((store) => store.data.things).map(({ id }) => id);
}

export default useAllThings;
