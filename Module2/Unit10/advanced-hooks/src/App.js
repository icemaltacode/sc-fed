import { createContext, useContext, useState, useEffect } from 'react';
import useLoader from './useLoader';
import useCounter from './useCounter';

function Counter() {
  const [counter, dispatch] = useCounter(0);
  return <section>
    <h1>Counter: {counter}</h1>
    <div>
      <button onClick={() => dispatch({ action: "INCREMENT" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ action: "DECREMENT" })}>
        Decrement
      </button>
    </div>
  </section>
}

const RC_ENDPOINT = "https://restcountries.com/v3.1/all";
const INITIAL_STATE = { status: "INITIALIZE", result: null, error: null }

function CountryList() {
  const [state, dispatch] = useLoader(INITIAL_STATE);
  
  useEffect(() => {
    dispatch({ action: "LOADING" });
    fetch(RC_ENDPOINT)
      .then(res => res.json())
      .then(data => data.sort((a,b) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0)))
      .then(results => dispatch({ action: "SUCCESS", payload: results }))
      .catch(message => dispatch({ action: "FAILURE", payload: message}))
  }, [dispatch]);

  const { status, error, result } = state;

  if (status === "LOADING") {
    return <p>Loading...</p>;
  }
  if (status === "FAILURE") {
    return <p>Error: {error.message} </p>
  }
  if (status === "SUCCESS") {
    return <>
      <select>
        {result.map((country, i) => <option key={i} value={country.name.common}>{country.name.common}</option>)}
      </select>
    </>
  }

  return <p>Initialising...</p>;
}

const BUTTON_STYLE = {
  display: 'inline-block',
  padding: '4px 10px',
  background: 'transparent',
  border: '0'
};
const HEADER_STYLE = {
  display: 'flex',
  justifyContent: 'flex-end',
  borderBottom: '1px solid'
};

const AppContext = createContext();

function Button({ children }) {
  const ctx = useContext(AppContext);
  return <button style={{...BUTTON_STYLE, color: ctx.color}}>{children}</button>
}

function UserButton() {
  const ctx = useContext(AppContext);
  return <AppContext.Provider value={{...ctx, color: 'green'}}>
    <Button>👤 {ctx.name}</Button>
  </AppContext.Provider>
}

function Header() {
  return <header style={HEADER_STYLE}>
    <Button>Home</Button>
    <Button>Groups</Button>
    <Button>Profile</Button>
    <UserButton />
  </header>
}

function Welcome() {
  function useApp() {
    return useContext(AppContext);
  }

  const ctx = useApp();
  return <section>
    <h1>Welcome, {ctx.name}!</h1>
  </section>
}

function Main() {
  return <main>
    <Welcome />
  </main>
}

function Dashboard({ name }) {
  return <AppContext.Provider value={{name: name, color: 'black'}}>
    <Header />
    <Main />
  </AppContext.Provider>
}

function AdminDashboard() {
  const [user, setUser] = useState("Bob");
  return <>
    <select value={user} onChange={evt => setUser(evt.target.value)}>
      <option>Bob</option>
      <option>Carol</option>
      <option>Daniel</option>
    </select>
    <Dashboard name={user} />
  </>
}

function useToggle(initial = false) {
  const [value, setter] = useState(Boolean(initial));
  const toggle = () => setter(v => !v);
  return [value, toggle];
}

function App() {
  const STYLE_LIGHT = {
    background: 'white',
    color: 'black'
  };
  const STYLE_DARK = {
    background: 'black',
    color: 'white'
  };

  const [isDarkMode, toggleDarkMode] = useToggle();

  return <div style={isDarkMode ? STYLE_DARK : STYLE_LIGHT}>
    <button onClick={() => toggleDarkMode()}>
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
    <AdminDashboard />
    <Counter />
    <CountryList />
  </div>
}

export default App;
