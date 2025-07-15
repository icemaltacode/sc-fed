import { useState } from 'react';

function BasicCalc() {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const onChangeFirst = evt => setFirstNum(evt.target.valueAsNumber);
  const onChangeSecond = evt => setSecondNum(evt.target.valueAsNumber);

  return <form style={{ display: "flex", flexDirection: "column "}}>
    <label>
      Num1: <input type="number" value={firstNum} onChange={onChangeFirst} />
    </label>
    <label>
      Num2: <input type="number" value={secondNum} onChange={onChangeSecond} />
    </label>
    <div>{firstNum} + {secondNum} = {firstNum+secondNum}</div>
  </form>
}

const DEFAULT_COLOR = "C0C0C0";
function ColorInput() {
  const [color, setColor] = useState(`${DEFAULT_COLOR}`);
  const onChange = evt => setColor(evt.target.value.replace(/[^[0-9a-f]/gi, '').toUpperCase());
  const previewStyle = {
    width: "20px",
    border: "1px solid",
    background: color.length === 6 ? `#${color}` : `#${DEFAULT_COLOR}`
  }

  return <form style={{ display: 'flex' }}>
    <label>Color: <input value={color} onChange={onChange} /></label>
    <span style={previewStyle} />
  </form>
}

function SerialEntry() {
  const [serialNumber, setSerialNumber] = useState("");
  const onChange = evt => {
    const [g1="", g2="", g3="", g4=""] = evt.target.value
      .replace(/[^0-9a-z]/gi, "")
      .slice(0,19)
      .match(/.{0,4}/g)

    const value = 
      g1.length === 4 ? 
        g2.length === 4 ? 
          g3.length === 4 ? 
          `${g1}-${g2}-${g3}-${g4}` 
          : `${g1}-${g2}-${g3}` 
        : `${g1}-${g2}`
      : g1;

    setSerialNumber(value.toUpperCase());
  }
  const isValid = serialNumber.length === 19;

  return <form style={{ display: "flex" }}>
    <label>
      Serial Number:
      <input
        value={serialNumber}
        onChange={onChange}
        placeholder='ex: YU78-POI8-HG5R-7QQ2' />
    </label>
    <span>{isValid ? "✅" : "❌"}</span>
  </form>
}

function Address() {
  const onSubmit = evt => {
    const data = Object.fromEntries(
      Array.from(evt.target.elements)
      .slice(0,5)
      .map((input) => [input.name, input.value])
    );

    console.log(data);
    evt.preventDefault();
  }

  return <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
    <label>Address 1: <input name="address1" /></label>
    <label>Address 2: <input name="address2" /></label>
    <label>Post Code: <input name="postCode" /></label>
    <label>City: <input name="city" /></label>
    <label>Country: <input name="country" /></label>
    <button>Submit</button>
  </form>
}

function ContactList({ contacts, handleDelete }) {
  if (!contacts.length) {
    return <h2>No contacts here!</h2>
  }

  return <>
    <h2>{contacts.length} {contacts.length > 1 ? "contacts" : "contact"}</h2>
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Phone</th>
          <th>List</th>
          <th>Mailing List?</th>
          <th>Preferred Contact</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact, i) => (
          <tr key={i}>
            <td>{contact.name}</td>
            <td>{contact.surname}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>{contact.contactType}</td>
            <td>{contact.mailingList ? "Yes" : "No"}</td>
            <td>{contact.preferredContact}</td>
            <td>
              <button onClick={() => handleDelete(contact)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
}

function AddContact({ handleAdd, handleCancel }) {
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    contactType: "personal",
    mailingList: false, 
    preferredContact: "any",
    notes: ""
  });

  const onChange = evt => {
    const value = evt.target.name === "mailingList" ? evt.target.checked : evt.target.value;
    setData((oldData) => ({...oldData, [evt.target.name]: value}));
  };

  const onSubmit = evt => {
    handleAdd(data);
    evt.preventDefault();
  };

  return <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column'}}>
    <label>Name: <input type="text" name="name" value={data.name} onChange={onChange} /></label>
    <label>Surname: <input type="text" name="surname" value={data.surname} onChange={onChange} /></label>
    <label>Email: <input type="email" name="email" value={data.email} onChange={onChange} /></label>
    <label>Phone: <input type="text" name="phone" value={data.phone} onChange={onChange} /></label>
    <label>
      Contact Type:
      <Radio value="personal" label="Personal" current={data.contactType} onChange={onChange} />
      <Radio value="work" label="Work" current={data.contactType} onChange={onChange} />
    </label>
    <label>
      <input name="mailingList" type="checkbox" checked={data.mailingList} onChange={onChange} />
      Include in mailing list?
    </label>
    <label>
      Preferred contact method:
      <select value={data.preferredContact} name="preferredContact" onChange={onChange}>
        <option value="any">Any</option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
      </select>
    </label>
    <label>
      Contact notes:
      <textarea value={data.notes} name="notes" onChange={onChange} />
    </label>
    <button>Submit</button>
    <button type="button" onClick={handleCancel}>Cancel</button>
  </form>
}

function Radio({ value, label, onChange, current }) {
  return <label>
    <input type="radio" name="contactType" checked={value === current} value={value} onChange={onChange} />
    {label}
  </label>
}

function ContactManager() {
  const [contacts, setContacts] = useState([]);
  const [isAdding, setAdding] = useState(false);

  const handleDelete = contact => 
    setContacts(oldContacts => oldContacts.filter((oldContact) => oldContact !== contact));

  const handleAdd = newContact => {
    setAdding(false);
    setContacts((oldContacts) => oldContacts.concat([newContact]));
  }

  const handleCancel = () => setAdding(false);

  return <section>
    <nav>
      <button onClick={() => setAdding(false)}>Show Contacts</button>
      <button onClick={() => setAdding(true)}>Add Contact</button>
    </nav>
    {isAdding ? 
      <AddContact handleAdd={handleAdd} handleCancel={handleCancel} /> : 
      <ContactList contacts={contacts} handleDelete={handleDelete} />
    }
  </section>
}

function SquareRoot() {
  const [sqrt, setSqrt] = useState(0);

  const onSubmit = evt => {
    const value = evt.target.elements.operand.valueAsNumber;
    setSqrt(Math.sqrt(value));
    evt.preventDefault();
  }

  return <>
    <h2>Square Root</h2>
    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column"}}>
      <label>
        Number:
        <input type="number" defaultValue="90" min="1" name="operand" />
      </label>
      <button>Submit</button>
      <div>Square Root: {sqrt}</div>
    </form>
  </>
}

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState("");

  const onFileChange = evt => setSelectedFile(evt.target.files[0]);

  const onSubmit = evt => {
    console.log(selectedFile.name);
    evt.preventDefault();
  }

  return <>
    <h3>File Upload</h3>
    <form onSubmit={onSubmit}>
      <input type="file" onChange={onFileChange} />
      <button>Submit</button>
    </form>
  </>
}

function App() {
  return <>
    <BasicCalc />
    <br />
    <ColorInput />
    <br />
    <SerialEntry />
    <br />
    <Address />
    <br />
    <ContactManager />
    <br />
    <SquareRoot />
    <br />
    <FileUpload />
  </>
}

export default App;