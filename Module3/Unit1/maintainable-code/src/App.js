import './App.css';
import PropTypes from 'prop-types';
import { UserType } from './types';

function Input({ name, label, value = null, onChange = null }) {
  return <>
    <label htmlFor={name}>{label}</label>
    <input type='text' name={name} value={value} onChange={onChange} />
  </>;
}
Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func
};

function UserDisplay({ user }) {
  return <li>{user.name} {user.surname} who is {user.age}</li>;
}
UserDisplay.propTypes = {
  user: UserType
};

function Users({ userList }) {
  return <ul>
    {userList.map((user, i) => <UserDisplay key={i} user={user} />)};
  </ul>;
}
Users.propTypes = {
  userList: PropTypes.arrayOf(UserType)
};

function App() {
  const getGreeting = () => {
    let hour = new Date().getHours();
    if (hour <= 11) {
      return 'Good morning!';
    } else if (hour <= 17) {
      return 'Good afternoon!';
    } else {
      return 'Good evening!';
    }
  };

  const getEmployeesByRole = (role) => {
    const employees = [
      {
        Name: 'Bob',
        Role: 'CEO',
      },
      {
        Name: 'Sarah',
        Role: 'CTO',
      },
      {
        Name: 'Keith',
        Role: 'Janitor',
      },
    ];
    return employees.filter((emp) => emp.Role === role);
  };

  return (
    <>
      <h1>This is a Maintainable App</h1>
      <p>This is the start of the content.</p>
      <h2>{getGreeting()}</h2>

      <h3>Employees</h3>
      {getEmployeesByRole('CTO').map((emp) => (
        <p key={emp.Name}>{emp.Name}</p>
      ))}

      <h3>An Input</h3>
      <Input name='inputName' label='Name' />
    </>
  );
}

export default App;
