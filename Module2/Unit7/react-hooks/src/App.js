import { useState, useRef, useEffect, useDeferredValue, useTransition, useLayoutEffect, useMemo, useCallback, memo, useId } from 'react';
import Sha256 from "./sha256";

const DELAY_TIME = 200;

function DoubleClickDelay() {
  const [message, setMessage] = useState("");
  const lastClickTime = useRef(null);

  const handleClick = () => {
    const isDoubleClick = Date.now() - lastClickTime.current < DELAY_TIME;
    if (isDoubleClick) {
      setMessage("Registered as a double-click");
    } else {
      lastClickTime.current = Date.now();
    }
  };

  return <>
    <p>Current Threshold: {DELAY_TIME}ms</p>
    <p>Status: {message}</p>
    <button onClick={handleClick}>Click Me</button>
  </>
}

function EmailInputComponent() {
  const ref = useRef();
  useEffect(() => ref.current.focus(), []);
  return <>
    <label htmlFor="emailAddress">Email:</label>
    <input type="email" id="emailAddress" ref={ref} />
  </>
}

function FlagImager() {
  const [flags, setFlags] = useState([]);
  const [buttonText, setButtonText] = useState("Load Flags");
  const deferredFlags = useDeferredValue(flags);

  const loadFlags = async () => {
    setFlags([])
    setButtonText("Loading...");
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    setFlags(data.map((country) => country.flags.svg));
    setButtonText("Refresh Flags");
  }

  return <>
    <br />
    <button type="button" onClick={loadFlags}>{buttonText}</button>
    <div 
      className='row row-cols-1 row-cols-md-3 g-3'
      style={{opacity: flags !== deferredFlags ? 0.5 : 1}}>
      {deferredFlags.map((flag, i) => (
        <div key={i} className='col'>
          <img src={flag} alt="" />
        </div>
      ))}
    </div>
  </>
}

function FlagImager2() {
  const [flags, setFlags] = useState([]);
  const [buttonText, setButtonText] = useState("Load Flags");
  const [isPending, startTransition] = useTransition();

  const loadFlags = async () => {
    setFlags([])
    setButtonText("Loading...");
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    startTransition(() => {
      setFlags(data.map((country) => country.flags.svg));
    });
    setButtonText("Refresh Flags");
  }

  return <>
    <br />
    <button type="button" onClick={loadFlags}>{buttonText}</button>
    <div 
      className='row row-cols-1 row-cols-md-3 g-3'
      style={{opacity: isPending ? 0.5 : 1}}>
      {flags.map((flag, i) => (
        <div key={i} className='col'>
          <img src={flag} alt="" />
        </div>
      ))}
    </div>
  </>
}

function WordCount() {
  const [wordCount, setWordCount] = useState(0);
  const [text, setText] = useState("Type some text here");

  useLayoutEffect(() => setWordCount(text.split(' ').length), [text]);

  return <>
    <p>Word Count: {wordCount}</p>
    <textarea id="theText" onChange={(evt) => setText(evt.target.value)} value={text} />
  </>
}

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const passwordField = useRef(null);

  const generateHash = (password) => {
    console.log('generateHash has run');
    return password !== "" ? Sha256.hash(password) : "";
  }

  const passwordHash = generateHash(password);

  const saveData = () => {
    setPassword(passwordField.current.value);
  }

  return <>
    <h2>Registration Form</h2>
    <label htmlFor="username">Username</label>
    <input type="text" id="username" onChange={(evt) => setUsername(evt.target.value)} />
    <label htmlFor="password">Password</label>
    <input type="password" id="password" ref={passwordField} />
    <button type="button" onClick={() => saveData()}>Save</button>
    <p>Username: {username} <br /> Password Hash: {passwordHash} </p>
  </>
}



function MemoizedRegistrationForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const passwordField = useRef(null);

  const generateHash = (password) => {
    console.log('generateHash has run');
    return password !== "" ? Sha256.hash(password) : "";
  }

  const passwordHash = useMemo(() => generateHash(password), [password]);

  const saveData = () => {
    setPassword(passwordField.current.value);
  }

  return <>
    <h2>Memoized Registration Form</h2>
    <label htmlFor="username">Username</label>
    <input type="text" id="username" onChange={(evt) => setUsername(evt.target.value)} />
    <label htmlFor="password">Password</label>
    <input type="password" id="password" ref={passwordField} />
    <button type="button" onClick={() => saveData()}>Save</button>
    <p>Username: {username} <br /> Password Hash: {passwordHash} </p>
  </>
}

function ShoppingAssistant() {
  const [shoppingBags, setShoppingBags] = useState(1);
  const [items, setItems] = useState([]);

  const addItem = (newItem) => setItems((items) => [...items, newItem])

  return <>
    <h2>Shopping Assistant</h2>
    <div>
      <ShoppingList items={items} addItem={addItem} />
      <hr />
      Shopping Bags: {shoppingBags}
      <button type="button" onClick={() => setShoppingBags(shoppingBags + 1)}>Add</button>
    </div>
  </>
}

function CallbackShoppingAssistant() {
  const [shoppingBags, setShoppingBags] = useState(1);
  const [items, setItems] = useState([]);

  const addItem = useCallback((newItem) => {
    setItems((currentItems) => [...currentItems, newItem])
  }, []);

  return <>
    <h2>Shopping Assistant with Callback</h2>
    <div>
      <ShoppingList items={items} addItem={addItem} />
      <hr />
      Shopping Bags: {shoppingBags}
      <button type="button" onClick={() => setShoppingBags(shoppingBags + 1)}>Add</button>
    </div>
  </>
}

const ShoppingList = memo(({ items, addItem }) => {
  console.log("The shopping list has re-rendered");
  const newItem = useRef(null);

  return <>
    <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
    <input type="text" ref={newItem} />
    <button type="button" onClick={() => addItem(newItem.current.value)}>Add</button>
  </>
});

function PasswordPrompt() {
  const passwordFieldId = useId();

  return <div>
    <label htmlFor={passwordFieldId}>Password: </label>
    <input type="password" id={passwordFieldId} />
  </div>
}



function App() {
  return <>
    <DoubleClickDelay />
    <br />
    {/* <EmailInputComponent /> */}
    <br />
    {/* <FlagImager /> */}
    {/* <FlagImager2 /> */}
    <WordCount />
    <br />
    <RegistrationForm />
    <br />
    <MemoizedRegistrationForm />
    <ShoppingAssistant />
    <CallbackShoppingAssistant />
    <br />
    <div>
      Please enter your application password:
      <PasswordPrompt />
    </div>
    <br />
    <div>
      Enter a new password to reset your account:
      <PasswordPrompt />
    </div>
  </>
}

export default App;