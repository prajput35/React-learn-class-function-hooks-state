import { useState } from "react";

//import { MouseEvent } from "react";
function ListGroup() {
  let items = ["Bharuch", "Vadodara", "Gandhinagar", "Pune", "Mumbai"];
  /* const handleEvent = (event: MouseEvent) => {
    console.log(event);
  }; */
  //items = [];

  const [selectedIndex, setIndex] = useState(-1);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
