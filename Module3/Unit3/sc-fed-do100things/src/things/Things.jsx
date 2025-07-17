import { useCurrentThing } from "../data";
import AllThings from "./AllThings.jsx";
import SingleThing from "./SingleThing.jsx";

function Things() {
  const currentThing = useCurrentThing();
  if (currentThing) {
    return <SingleThing id={currentThing} />;
  }
  return <AllThings />;
}

export default Things;
