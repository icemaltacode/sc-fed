import styled from "styled-components";

import { useAllThings } from "../data";
import Thing from "./Thing.jsx";
import AddAThing from "./AddAThing";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin: 3em;
  align-items: center;
`;

function AllThings() {
  const things = useAllThings();
  return (
    <Main>
      <h1>All my things</h1>
      {things.map((thing) => (
        <Thing id={thing.id} key={thing.id} />
      ))}
      <AddAThing />
    </Main>
  );
}

export default AllThings;
