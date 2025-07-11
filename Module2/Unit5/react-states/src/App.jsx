import { Component, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <main>
      <p>Clicks: {counter}</p>
      <button onClick={() => setCounter((value) => value + 1)}>
        Add
      </button>
    </main>
  );
}

function VariableCounter({ initial }) {
  const [counter, setCounter] = useState(initial);
  return (
    <main>
      <p>Clicks: {counter}</p>
      <button onClick={() => setCounter((value) => value + 1)}>
        Add
      </button>
      <button onClick={() => setCounter(initial)}>
        Reset
      </button>
    </main>
  );
}

class VariableCounterClass extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      counter: props.initial
    };
  }

  render() {
    return <main>
      <p>Clicks: {this.state.counter}</p>
      <button onClick={() => this.setState({counter: this.state.counter + 1})}>
        Add
      </button>
      <button onClick={() => this.setState({counter: this.props.initial})}>
        Reset
      </button>
    </main>
  }
}

function SimpleCalc() {
  const ADD = (num1, num2) => num1 + num2;
  const SUB = (num1, num2) => num1 - num2;
  const MUL = (num1, num2) => num1 * num2;
  const DIV = (num1, num2) => num1 / num2;

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const [operator, setOperator] = useState(() => ADD);

  return <section>
    <h2>SimpleCalc</h2>
    <label htmlFor="num1">Num 1: </label>
    <input type="number" id="num1" onChange={(event) => setNum1(event.target.valueAsNumber)}/>
    <label htmlFor="num2">Num 2:</label>
    <input type="number" id="num2" onChange={(event) => setNum2(event.target.valueAsNumber)}/>
    <label htmlFor="operator">Operation:</label>
    <select id="operator" defaultValue="ADD" onChange={(event) => setOperator(() => eval(event.target.value))}>
      <option value="ADD">+</option>
      <option value="SUB">-</option>
      <option value="MUL">*</option>
      <option value="DIV">/</option>
    </select>
    <p>
      Result: <code>{operator(num1, num2)}</code>
    </p>
  </section>
}

function EmailInput() {
  const [validEmail, isValid] = useState(null);

  const validateEmail = (event) => {
    isValid(/\S+@\S+\.\S+/.test(event.target.value));
  };

  return (
    <section>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" onChange={validateEmail}/>
      <span>{validEmail == null ? "" : validEmail ? "✅" : "❌"}</span>
    </section>
  )
}

function generateUniqueId() {
  console.log('Function generateUniqueId has run');
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

function UniqueId() {
  const [uuid, setUuid] = useState(generateUniqueId);

  return <section>
    <label htmlFor="uuid">Unique Id:</label>
    <input type="text" id="uuid" value={uuid} onChange={(event) => setUuid(event.target.value)} />
  </section>
}

function MathSuite({ num }  ) {
  const SQRT = (num) => Math.sqrt(num);
  const SIN = (num) => Math.sin(num);
  const COS = (num) => Math.cos(num);

  const [operator, setOperator] = useState(() => SQRT);

  return <section>
    <h2>Math Suite</h2>
    <button onClick={() => setOperator(() => SQRT)}>Square Root</button>
    <button onClick={() => setOperator(() => SIN)}>Sine</button>
    <button onClick={() => setOperator(() => COS)}>Cosine</button>
    <p>
      Result: <code>{operator(num)}</code>
    </p>
  </section>
}

function ContactList({ contactsToShow }) {
  const personalContacts = [
    {name: "Bob", surname: "Barker", email: "bbarker@gmail.com"},
    {name: "Alice", surname: "Smith", email: "asmith@gmail.com"}
  ];
  const workContacts = [
    {name: "Keith", surname: "Vassallo",  email: "keith@icemalta.com"},
    {name: "Greg", surname: "Martin", email: "greg@icemalta.com"}
  ];

  return <section>
    
    {(contactsToShow === "personal" || contactsToShow === "both") && 
    <p>
      <h2>Personal Contacts</h2>
      <ul>
        {personalContacts.map((item, i) => <li key={i}>{item.name} {item.surname} ({item.email})</li>)}
      </ul>
    </p>}
    
    {(contactsToShow === "work" || contactsToShow === "both") && 
    <p>
      <h2>Work Contacts</h2>
      <ul>
        {workContacts.map((item, i) => <li key={i}>{item.name} {item.surname} ({item.email})</li>)}
      </ul>
    </p>}
  </section>
}

function FilterButton({currentFilter, myText, setFilter, children}) {
  const style = {
    background: currentFilter === myText ? "dimgray" : "transparent",
    border: "1px solid dimgray",
    color: currentFilter === myText ? "white" : "dimgray",
    padding: "4px 10px"
  }

  return <button style={style} onClick={() => setFilter(myText)}>
    {children}
  </button>
}

function Contacts() {
  const [show, setShow] = useState("both");

  return <section>
    <h2>Contacts</h2>
    <FilterButton currentFilter={show} myText="both" setFilter={setShow}>Both</FilterButton>
    <FilterButton currentFilter={show} myText="personal" setFilter={setShow}>Personal</FilterButton>
    <FilterButton currentFilter={show} myText="work" setFilter={setShow}>Work</FilterButton>

    <ContactList contactsToShow={show} />
  </section>
}

function App() {
  return <>
    <Counter />
    <VariableCounter initial={20} />
    <VariableCounter initial={-5} />
    <EmailInput />
    <UniqueId />
    <MathSuite num={90} />
    <SimpleCalc />

    <Contacts />

    <VariableCounterClass initial={10} />
  </>
}

export default App;
