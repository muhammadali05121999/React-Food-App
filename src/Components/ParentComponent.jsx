import React from "react";
import Card from "./Card";

function ParentComponent({ items }) {
  return (
    <div className="flex flex-wrap gap-4">
      {items.map((item) => (
        <Card
          key={item.id} // Ensure each key is unique
          id={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default ParentComponent;
