import { ReactElement, SelectHTMLAttributes } from "react";

interface IDropdownOption<TKey extends number | string, TValue> {
  key: TKey;
  value: TValue;
}

interface IDropdownProps<TKey extends number | string, TValue> extends SelectHTMLAttributes<HTMLElement> {
  options: IDropdownOption<TKey, TValue>[];
  optionTemplate?: (value: TValue) => ReactElement | string
}

function Dropdown<TKey extends number | string, TValue>(props: IDropdownProps<TKey, TValue>) {
  const { options, optionTemplate, ...selectAttributes } = props;

  return (
    <select {...selectAttributes}>
      {options.map(o => <option key={o.key}>{optionTemplate ? optionTemplate(o.value) : o.value as string}</option>)}
    </select>
  );
}

export default Dropdown;