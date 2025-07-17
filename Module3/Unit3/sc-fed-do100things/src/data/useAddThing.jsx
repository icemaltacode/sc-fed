import useData from "./useData.jsx";

function useAddThing() {
  return useData((state) => state.addThing);
}

export default useAddThing;
