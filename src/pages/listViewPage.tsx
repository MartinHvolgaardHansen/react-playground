import ListView from "../components/listView";

export default function ListViewPage() {
  const people: { key: number, firstName: string, lastName: string, phoneNumber: number }[] = [
    { key: 1, firstName: "Jane", lastName: "Ølholm", phoneNumber: 12345678 },
    { key: 2, firstName: "Martin", lastName: "Hansen", phoneNumber: 87654321 },
    { key: 3, firstName: "Pølle", lastName: "Fuglen", phoneNumber: 12365478 },
    { key: 4, firstName: "Bettina", lastName: "Madsen", phoneNumber: 32681165 },
  ]

  return (
    <ListView items={people}
      headerTemplate={() => <><th>Key</th><th>First name</th><th>Last name</th><th>Phone</th></>}
      itemTemplate={p => <><td>{p.key}</td><td>{p.firstName}</td><td>{p.lastName}</td><td>{p.phoneNumber}</td></>} />
  );
}