import { MouseEvent, useState } from "react";

// { items: [], heading: string }

interface Props {
  items: string[]; // parameter: type
  heading: string; // parameter: type

  // (item: string) => void
  onSelectItem: (item: string) => void;
}

// props: Props  -->  props parameter of Props type
const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  // let items = ["Isfahan", "Tehran", "Mashhad", "Shiraz", "Tabriz"];
  // items = [];

  // let selectedIndex = -1; // Bad Practice
  // const [name, setName] = useState(""); // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // if (items.length === 0) return <p>No item found</p>; // Bad Practice

  // const message = items.length === 0 ? <p>No item found</p> : null;

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No item found</p> : null;
  // };

  // Event handler
  const handleClick = (event: MouseEvent) => {
    console.log("event", event);
    console.log("event.target", event.target);
  };

  return (
    <div>
      <h1>{heading}</h1>
      {/* {message} */}
      {/* {getMessage()} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="menu bg-base-200 rounded-box w-56">
        {items.map((item, index) => (
          // <li key={index} onClick={(event) => console.log("item, index, event", item, index, event)}>
          // hover on event to find the type of event

          // <li key={index} onClick={handleClick}>
          <li
            className={
              selectedIndex === index
                ? "rounded-lg bg-slate-700 text-slate-50"
                : ""
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            <a>
              {index}. {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
