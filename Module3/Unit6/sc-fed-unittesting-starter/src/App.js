import { useState, useCallback } from "react";
import MenuItem from "./components/MenuItem";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import TimerManager from "./components/TimerManager/TimerManager";
import WhereAmI from "./components/WhereAmI";
import StarshipList from "./components/StarshipList";
import DarkModeContext from "./components/DarkMode/DarkModeContext";
import Main from "./components/DarkMode/Main";
import "./App.css";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = useCallback(() => setDarkMode((v) => !v), []);
  const contextValue = { isDarkMode, toggleDarkMode };

  return (
    <>
      <h1>Unit Testing with React</h1>
      <hr />

      {/* Scenario 1 */}
      <h2>Scenario 1</h2>
      <ul>
        <MenuItem href="/blog" label="Blog" />
        <MenuItem href="/about" label="About" />
      </ul>
      <hr />

      {/* Scenario 3 */}
      <h2>Sceanrio 3</h2>
      <Counter start={5} />
      <hr />
      
      {/* Scenario 4 */}
      <h2>Scenario 4</h2>
      <Todo />
      <hr />
      
      {/* Scenario 5 */}
      <h2>Sceanrio 5</h2>
      <TimerManager />
      <hr />
      
      {/* Scenario 7 */}
      <h2>Sceanrio 6</h2>
      <WhereAmI />;
      <hr />
      
      {/* Scenario 8 */}
      <h2>Scenario 8</h2>
      <StarshipList />;
      <hr />
      
      {/* Scenario 9 */}
      <h2>Scenario 9</h2>
      <DarkModeContext.Provider value={contextValue}>
        <Main />
      </DarkModeContext.Provider>
    </>
  );
}

export default App;
