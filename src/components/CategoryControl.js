import { useMemo } from "react";

export const CategoryControl = ({ selected, onSelect }) => {
  const items = useMemo(() => {
    return ["yousyoku", "drink", "wasyoku", "hotel"];
  });

  return (
    <div id="categoryControl">
      {items.map((val) => (
        <button
          className={val === selected ? "selected" : ""}
          key={val}
          onClick={() => onSelect(val)}
          value={val}
        >
          {val}
        </button>
      ))}
    </div>
  );
};
