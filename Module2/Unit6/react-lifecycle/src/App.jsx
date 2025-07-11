import { useState, useEffect, useRef } from "react";

function CountryDropdown() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name")
      .then((res) => res.json())
      .then((data) => setCountries(data.map(({ name }) => name.common)))
  }, []);
  return <select>
    {countries.map((country) => (
      <option key={country}>{country}</option>
    ))}
  </select>
}

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date().toString());

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentTime(new Date().toString()),
      1000
    );
    return () => clearInterval(interval);
  }, []);
  return <h1>It is {currentTime}</h1>
}

function ColoredTitle({ value, children }) {
  const [color, setColor] = useState(value);
  useEffect(() => setColor(value), [value]);

  const style = {
    color: color
  };

  return <h2 style={style}>{children}</h2>
}

function Countdown({ from }) {
  const [seconds, setSeconds] = useState(from);
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }
    const interval = setInterval(
      () => 
        setSeconds((value) => {
          if (value <= 1) {
            setRunning(false)
          }
          return value - 1;
        }),
        1000
    );
    return () => clearInterval(interval);
  }, [isRunning]);

  return <section>
    <h2>Launch in T-{seconds} seconds</h2>
    <button onClick={() => setSeconds(from)}>Reset</button>
    <button onClick={() => setRunning((r) => !r)} disabled={seconds === 0}>
      {isRunning ? "Pause" : "Resume"}
    </button>
  </section>
}

function ArmingIcon() {
  return <img src="/logo192.png" alt="Arming icon" />
}

function ArmingButton() {
  const [armed, setArmed] = useState(false);
  const style = {
    border: '1px solid black',
    backgroundColor: `${armed ? 'red' : 'green' }`
  }

  return <button style={style} onClick={() => setArmed(a => !a)}>
    <ArmingIcon /> {armed ? 'Disarm' : 'Arm'}
  </button>
}

function ArmingButtonV2({ children }) {
  const [armed, setArmed] = useState(false);
  const style = {
    border: '1px solid black',
    backgroundColor: `${armed ? 'red' : 'green' }`
  }

  return <button style={style} onClick={() => setArmed(a => !a)}>
    {children} {armed ? 'Disarm' : 'Arm'}
  </button>
}

function DuotoneImage() {
  const [isLeft, setLeft] = useState(true);
  const onMouseMove = (evt) => setLeft(evt.nativeEvent.offsetX < 96);
  
  const style = {
    width: "192px",
    height: "192px",
    background: `url('/logo192.png'), ${isLeft ? 'red': 'black'}`,
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden'
  };
  return <div style={style} onMouseOver={onMouseMove} />
}

function FollowMeLogo() {
  const element = useRef();
  const onMouseMove = (evt) => {
    element.current.style.left = `${evt.nativeEvent.offsetX}px`;
    element.current.style.top = `${evt.nativeEvent.offsetY}px`;
  }
  return <div style={{ position: 'relative', width: '200px', height: '200px', backgroundColor: 'yellow' }} onMouseMove={onMouseMove}>
    <img
      style={{ position: 'absolute' }}
      ref={element}
      src="/logo192.png"
      width="20px"
      height="20px"
      alt="" />
  </div>
}

function App() {
  const [showClock, setShowClock] = useState(false);
  const [color, setColor] = useState("red");

  return <>
    <CountryDropdown /> 
    
    <button onClick={() => setShowClock((s) => !s)}>Toggle Clock</button>
    {showClock && <Clock />}

    <ColoredTitle value={color}>Hello there!</ColoredTitle>
    <button onClick={() => setColor("green")}>Set color to green</button>
    <button onClick={() => setColor("blue")}>Set color to blue</button>
    <button onClick={() => setColor("yellow")}>Set color to yellow</button>

    <Countdown from={10} />
    <br />
    <ArmingButton />
    <ArmingButtonV2>
      <ArmingIcon />
    </ArmingButtonV2>

    <DuotoneImage />

    <FollowMeLogo />
  </>
}

export default App;