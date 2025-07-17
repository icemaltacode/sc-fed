import useData from "./useData.jsx";

function useCurrentThing() {
  return useData((store) => store.data.currentThing);
}

export default useCurrentThing;
