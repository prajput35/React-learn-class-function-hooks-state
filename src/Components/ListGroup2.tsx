import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string, index: number) => void;
}
//import { MouseEvent } from "react";
function ListGroup2(props: Props) {
  const [selectedIndex, setIndex] = useState(-1);
  return (
    <>
      <h1>{props.heading}</h1>
      {props.items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setIndex(index);
              props.onSelectItem(item, index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup2;
