import React from "react";

export default function CardFrameworks({ FrameworkTitle }) {
  return (
    <span className="flex-none m-1 text-center bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 overflow-hidden text-ellipsis">
      {FrameworkTitle}
    </span>
  );
}
