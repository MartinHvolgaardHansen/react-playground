import { ReactElement, TableHTMLAttributes } from "react";

interface ListViewProps<T> extends TableHTMLAttributes<HTMLElement> {
  items: T[];
  headerTemplate?: () => ReactElement;
  itemTemplate: (item: T) => ReactElement;
  footerTemplate?: () => ReactElement;
}

export default function ListView<T>(props: ListViewProps<T>) {
  const { items, headerTemplate: header, itemTemplate, footerTemplate: footer, className, ...tableAttributes } = props;
  let i = 0;

  return (
    <table {...tableAttributes}>
      {
        header ?
          <thead>
            <tr>
              {header()}
            </tr>
          </thead>
          : null
      }
      <tbody>
        {
          items.map(item =>
            <tr key={i++}>
              {itemTemplate(item)}
            </tr>
          )
        }
      </tbody>
      {
        footer ?
          <tfoot>
            <tr>
              {footer()}
            </tr>
          </tfoot>
          : null
      }
    </table>
  );
}