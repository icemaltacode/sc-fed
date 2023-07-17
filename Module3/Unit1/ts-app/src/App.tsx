import EmployeeCard from "./EmployeeCard";
import './App.css';

const simpleAdder = (num1: number, num2: number) => num1 + num2;

type OptionalSurname = null | string;

const greeting = (name: string, surname: OptionalSurname = null) =>
  `Hello ${name}${surname !== null ? ` ${surname}` : ""}!`;

interface EmployeeProps {
  name: string,
  surname: string,
  active?: boolean | null
  status?: 'FULLTIME' | 'PARTTIME'
}

function Employee({ name, surname, active = true, status = 'FULLTIME' }: EmployeeProps) {
  return <>
    <h4>{name} {surname}</h4>
    <p>{active ? 'Current' : 'Past'} employee on {status.toLowerCase()} basis</p>
  </>;
}

function getMiddle<Type>(list: Array<Type>): Type {
  const mid = Math.floor(list.length / 2);
  return list[mid];
}

function App() {

  const numberArray: number[] = [4, 7, 98, 456, 32, 4, 8];
  const nameArray: string[] = ['Joe', 'Alice', 'Lucy', 'Bob', 'Greg'];

  return (
    <>
      <h1>Hello from our TypeScript App!</h1>
      {simpleAdder(8, 5)}
      <h3>{greeting("Joe")}</h3>
      <Employee name="Joe" surname="Doe" />
      <Employee name="Alice" surname="Green" active={false} status="PARTTIME" />
      <EmployeeCard item={{ name: 'Willy Wonka', title: 'Candy King' }} />
      <h1>Generics</h1>
      <p>{getMiddle(numberArray)}</p>
      <p>{getMiddle(nameArray)}</p>
    </>
  );
}

export default App;
