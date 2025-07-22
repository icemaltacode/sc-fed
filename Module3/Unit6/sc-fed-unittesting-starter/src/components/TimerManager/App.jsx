import MenuItem from "./components/MenuItem";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <h1>Unit Testing with React</h1>
      {/* Scenario 1 */}
      <ul>
        <MenuItem href="/blog" label="Blog" />
        <MenuItem href="/about" label="About" />
      </ul>

      {/* Scenario 2 */}
      <ul>
        <MenuItem href="/blog" label="Blog" />
        <MenuItem href="/about" label="About" />
      </ul>

      {/* Scenario 3 */}
      <Counter start={5} />

      {/* Scenario 4 */}
      <Todo />
    </>
  );
}

export default App;
