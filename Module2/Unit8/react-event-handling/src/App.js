import { useState, useEffect, useRef } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  return <>
    <h1>Value: {counter}</h1>
    <button onClick={() => setCounter(c => c + 1)}>Increment</button>
  </>
}

function MouseStatus() {
  const [isMoving, setMoving] = useState(false);
  const onMouseMove = () => setMoving(true);

  useEffect(() => {
    if (!isMoving) return;
    const timeout = setTimeout(() => setMoving(false), 500);
    return () => clearTimeout(timeout);
  }, [isMoving]);

  return <section onMouseMove={onMouseMove}>
    <h2>
      The mouse is {!isMoving && 'not'} moving: {isMoving ? "✅" : "❌"}
    </h2>
  </section>
}

const VIDEO_SRC = "https://ia801509.us.archive.org/10/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4"

function VideoPlayer() {
  const [isPlaying, setPlaying] = useState(false);
  const onPlay = () => setPlaying(true);
  const onPause = () => setPlaying(false);
  const onClickPlay = () => video.current.play();
  const onClickPause = () => video.current.pause();
  const video = useRef();

  return <section>
    <button onClick={isPlaying ? onClickPause : onClickPlay}>
      {isPlaying ? "⏸️" : "▶️"}
    </button>
    <br />
    <video 
      ref={video}
      src={VIDEO_SRC}
      width="480"
      onPlay={onPlay}
      onPause={onPause}
    />
  </section>
}

function CounterV2( {title, body }) {
  const [counter, setCounter] = useState(0);
  const increment = useRef();

  const onClick = (evt) => {
    const delta = evt.target === increment.current ? 1 : -1;
    setCounter((value) => value + delta);
  }

  return <section>
    <h1>Value: {counter}</h1>
    <button ref={increment} onClick={onClick}>Increment</button>
    <button onClick={onClick}>Decrement</button>
  </section>
}

function DropDownCounter({ title, body }) {
  const [counter, setCounter] = useState(0);
  const onChange = (evt) => {
    setCounter((value) => value + parseInt(evt.target.value));
  }
  const values = [1, 2, 3, 4, 5];

  return <section>
    <h1>Counter: {counter}</h1>
    <select onChange={onChange}>
      {values.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
    <a href="somepage.html">Click <strong>here</strong> to learn more.</a>
  </section>
}

const FOCUS_NONE = 0;
const FOCUS_PERSONAL = 1;
const FOCUS_TICKET = 2;

function Field( {label, children }) {
  return <label>
    {label}: <br />
    {children}
  </label>
}

function SupportForm() {
  const [focus, setFocus] = useState(FOCUS_NONE);
  const onPersonalFocus = () => setFocus(FOCUS_PERSONAL);
  const onTicketFocus = () => setFocus(FOCUS_TICKET);
  const onBlur = () => setFocus(FOCUS_NONE);

  const getStyle = (isActive) => {
    return {
      display: "flex",
      flexDirection: "column",
      backgroundColor: isActive ? "lightgreen" : "transparent"
    };
  }

  return <form onBlur={onBlur}>
    <h1>Submit a Trouble Ticket</h1>
    <fieldset onFocus={onPersonalFocus} style={getStyle(focus === FOCUS_PERSONAL)}>
      <legend>Personal Information</legend>
      <Field label="Name"><input type="text"/></Field>
      <Field label="Email"><input type="email" /></Field>
    </fieldset>
    <fieldset onFocus={onTicketFocus} style={getStyle(focus === FOCUS_TICKET)}>
      <legend>Ticket Details</legend>
      <Field label="Product">
        <select>
          <option value="ssheets">Super Sheets</option>
          <option value="sword">Super Word Processor</option>
          <option value="spres">Super Presenter</option>
        </select>
      </Field>
      <Field label="Issue"><textarea placeholder='Describe your issue here' /></Field>
    </fieldset>
  </form>
}

function SecureArea() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const usernames = ['Bob', 'Alice', 'Frank'];

  const handleLogin = (evt) => {
    evt.preventDefault();
    if (usernames.includes(username) && password === "Ins3cure") {
      setLoggedIn(true);
    }
  };

  return (isLoggedIn ? (
    <h2>You are now logged in as {username}.</h2>
  ) : (<>
    <h2>Please log in.</h2>
    <form onSubmit={handleLogin}>
      <input type="text" onChange={(evt) => setUsername(evt.target.value)} placeholder='username' /><br />
      <input type="password" onChange={(evt) => setPassword(evt.target.value)} placeholder='password'/><br />
      <button>Login</button>
    </form>
  </>));
}

function Button( { handleClick, label }) {
  const buttonStyle = {
    color: "blue",
    border: "1px solid",
    background: "transparent",
    borderRadius: ".25em",
    padding: ".5em 1em",
    margin: ".5em"
  };

  const onClick = () => handleClick();

  return <button style={buttonStyle} onClick={onClick}>
    {label}
  </button>
}

function StyledCounter() {
  const [counter, setCounter] = useState(0);
  const update = (d) => () => setCounter((v) => v + d);
  return <section>
    <h1>Counter: {counter}</h1>
    <div>
      <Button handleClick={update(1)} label="Increment" />
      <Button handleClick={update(-1)} label="Decrement" />
    </div>
  </section>
}

function DeviceType() {
  const getDeviceType = () => {
    const windowWidth = `${window.innerWidth}`;
    
    if (windowWidth <= 640) {
      return "Mobile Device (portrait or landscape)";
    } else if (windowWidth <= 768) {
      return "Tablet";
    } else {
      return "Desktop"
    }
  }

  const [deviceType, setDeviceType] = useState(getDeviceType());

  useEffect(() => {
    const onResize = () => setDeviceType(getDeviceType());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [setDeviceType])
  return <h1>Device Type: {deviceType}</h1>
}

function Transition() {
  const [isRunning, setRunning] = useState(false);
  const div = useRef();

  useEffect(() => {
    const onStart = () => setRunning(true);
    const onEnd = () => setRunning(false);
    const node = div.current;
    node.addEventListener("transitionstart", onStart);
    node.addEventListener("transitionend", onEnd);
    return () => {
      node.removeEventListener("transitionstart", onStart);
      node.removeEventListener("transitionend", onEnd);
    };
  }, [setRunning]);

  return <section>
    <h1>Transition is {!isRunning && "not"} running</h1>
    <div style={{ color: "red", transition: "color 5s linear"}} ref={div}>
      TRANSITION
    </div>
    <button onClick={() => (div.current.style.color = "blue")}>Go Blue</button>
    <button onClick={() => (div.current.style.color = "red")}>Go Red</button>
  </section>
}

function Menu() {
  const [isExpanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!isExpanded) {
      return;
    }
    const onWindowClick = () => setExpanded(false);
    const onMenuClick = (evt) => evt.stopPropagation();
    const menu = menuRef.current;
    window.addEventListener("pointerdown", onWindowClick);
    menu.addEventListener("pointerdown", onMenuClick);
    return () => {
      window.removeEventListener("pointerdown", onWindowClick);
      menu.removeEventListener("pointerdown", onMenuClick);
    }
  }, [isExpanded]);

  const menuRef = useRef();
  return <main>
    <button onClick={() => setExpanded(true)}>Show menu</button>
    {isExpanded && (
      <div ref={menuRef} style={{ border: "1px solid black", padding: "2em" }}>
        This is the menu
      </div>
    )}
  </main>
}

function App() {
  return <>
    <Counter />
    <br />
    <MouseStatus />
    <br />
    <VideoPlayer />
    <br />
    <CounterV2 />
    <br />
    <DropDownCounter />
    <br />
    <SupportForm />
    <br />
    <SecureArea />
    <br />
    <StyledCounter />
    <br />
    <DeviceType />
    <br />
    <Transition />
    <br />
    <Menu />
  </>
}

export default App;
