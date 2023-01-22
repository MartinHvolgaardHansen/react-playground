import { ReactElement } from "react";

interface ListViewProps<T> {
  items: T[];
  header?: () => ReactElement;
  itemTemplate: (item: T) => ReactElement;
  footer?: () => ReactElement;
  className?: string;
}

function ListView<T>(props: ListViewProps<T>) {
  const items: T[] = props.items;
  let i = 0;

  return (
    <table className={props.className}>
      {
        props.header ?
          <thead>
            <tr>
              {props.header()}
            </tr>
          </thead>
          : null
      }
      <tbody>
        {
          items.map(item =>
            <tr key={i++}>
              {props.itemTemplate(item)}
            </tr>
          )
        }
      </tbody>
      {
        props.footer ?
          <tfoot>
            <tr>
              {props.footer()}
            </tr>
          </tfoot>
          : null
      }
    </table>
  );
}

export default ListView;