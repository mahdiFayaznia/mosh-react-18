import Message from "./components/Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";
import Like from "./components/Like";

const App = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  const items1 = ["Isfahan", "Tehran", "Mashhad", "Shiraz", "Tabriz"];
  const items2 = ["Apple", "Orange", "Banana", "Cherry", "Peach"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Message />
      <hr />
      <ListGroup
        items={items1}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <hr className="py-4" />

      <ListGroup
        items={items2}
        heading="Fruits"
        onSelectItem={handleSelectItem}
      />

      <hr className="py-4" />

      {/* <Alert text="Hello World"/> */}
      {/* <Alert>Hello World</Alert> */}
      <Alert
        onClose={() => {
          setAlertVisible(false);
        }}
      >
        Hello World <small>small tag</small>
      </Alert>

      <hr className="py-4" />

      <Button
        onClick={() => {
          console.log("Clicked");
        }}
      >
        react Button
      </Button>
      <Button
        color="secondary"
        onClick={() => {
          console.log("Clicked");
        }}
      >
        react Button
      </Button>

      <hr className="py-4" />

      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisible(false);
          }}
        >
          Alert
        </Alert>
      )}
      <Button
        onClick={() => {
          setAlertVisible(true);
        }}
      >
        Button
      </Button>

      <hr className="py-4" />

      <Like
        onClick={() => {
          console.log("Clicked");
        }}
      />
    </div>
  );
};

export default App;
