import ListView from "./components/listView";

function generateItems(): { value1: number, value2: number }[] {
  let items = [];
  for (let i = 0; i < 10; i++) {
    items[i] = { value1: i, value2: i }
  }
  return items;
}

function App() {
  const people: { key: number, firstName: string, lastName: string, phoneNumber: number }[] = [
    { key: 1, firstName: "Jane", lastName: "Ølholm", phoneNumber: 12345678 },
    { key: 2, firstName: "Martin", lastName: "Hansen", phoneNumber: 87654321 },
    { key: 3, firstName: "Pølle", lastName: "Fuglen", phoneNumber: 12365478 }
  ]

  return (
    <ListView items={people}
      header={() => <><th>Key</th><th>First name</th><th>Last name</th><th>Phone</th></>}
      itemTemplate={p => <><td>{p.key}</td><td>{p.firstName}</td><td>{p.lastName}</td><td>{p.phoneNumber}</td></>} />
  );
}

export default App;
