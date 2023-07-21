import useData from "./useData";

function useThing(id) {
  const { seeThing, seeAllThings, doThing, undoThing, removeThing } = useData(
    ({ actions }) => actions
  );
  const thing = useData(({ state }) => state.things.find((t) => t.id === id));
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