import React from "react";

export interface TableColumn<T> {
  key: keyof T | string;
  label: string;
  render?: (row: T) => React.ReactNode;
  className?: string;
}

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  emptyIcon?: string;
  emptyMessage?: string;
  emptyDescription?: string;
  emptyAction?: React.ReactNode;
}

export default function Table<T>({
  data,
  columns,
  emptyIcon = "📄",
  emptyMessage = "No records found",
  emptyDescription = "There is nothing to display here.",
  emptyAction
}: TableProps<T>) {
  return (
    <div className="overflow-hidden rounded-2xl shadow border bg-white">
      <table className="w-full text-left">
        <thead className="bg-gray-100 text-gray-700 text-sm">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key as string}
                className={`p-4 ${col.className ?? ""}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="p-12 text-center">
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="text-6xl mb-4">{emptyIcon}</div>
                  <h3 className="text-lg font-semibold text-gray-700">
                    {emptyMessage}
                  </h3>
                  <p className="text-gray-500 mt-1 mb-4">{emptyDescription}</p>

                  {emptyAction}
                </div>
              </td>
            </tr>
          )}

          {data.map((row, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              {columns.map((col) => (
                <td
                  key={col.key as string}
                  className={`p-4 ${col.className ?? ""}`}
                >
                  {col.render ? col.render(row) : (row as any)[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
