import { useState } from "react";
import styles from "./ListGroup.module.css";

// Interface of props that are Input of the component
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; // onClick
}

// Function declaring the component itself passing the 'Props' object which is deconstructing them
function ListGroup({ items, heading, onSelectItem }: Props) {
  // creating state that is gets set an initial value and assigned to a var and an update state function is assigned
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // returning the Html
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
