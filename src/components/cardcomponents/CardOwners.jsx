import React from "react";

export default function CardOwners({ owners }) {
  return (
    <div className="flex flex-wrap">
      {owners.map((owner, index) => (
        <span key={index} className="mr-1">
          {owner}
          {index < owners.length - 1 && ", "}
        </span>
      ))}
    </div>
  );
}
