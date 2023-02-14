import Dropdown from "../components/dropdown";

export default function DropdownPage() {
  const options = [
    { key: 1, value: "Tulle" },
    { key: 2, value: "Fr. Olsen" },
    { key: 3, value: "Lilo" }
  ]

  return (
    <Dropdown options={options} style={{width: "200px"}} />
  );
}