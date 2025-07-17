import useData from "./useData.jsx";

function useCurrentThing() {
  return useData((state) => state.currentThing);
}

export default useCurrentThing;
