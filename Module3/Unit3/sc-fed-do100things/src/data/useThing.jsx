import useData from "./useData";

function useThing(id) {
  // Get both state and actions at once
  const { things, seeThing, seeAllThings, doThing, undoThing, removeThing } = useData(state => state);
  const thing = things.find((t) => t.id === id);

  return {
    thing,
    seeThing: () => seeThing(id),
    removeThing: () => removeThing(id),
    doThing: () => doThing(id),
    seeAllThings,
    undoThing: (index) => undoThing(id, index),
    undoLastThing: () => undoThing(id, thing.done.length - 1),
  };
}

export default useThing;