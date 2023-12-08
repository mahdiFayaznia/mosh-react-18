import { useState } from "react";
import Message from "./components/Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Like from "./components/Like";
import ManagingComponentState from "./components/ManagingComponentState";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import FormUseRef from "./components/FormUseRef";
import FormUseState from "./components/FormUseState";
import FormUseForm from "./components/FormUseForm";
import FormUseFormValidation from "./components/FormUseFormValidation";
import FormUseFormValidationZod from "./components/FormUseFormValidationZod";
import FormUseFormValidationZodDisableButton from "./components/FormUseFormValidationZodDisableButton";
import ExpenseTracker from "./expenseTracker/components/ExpenseTracker";

const App = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  const items1 = ["Isfahan", "Tehran", "Mashhad", "Shiraz", "Tabriz"];
  const items2 = ["Apple", "Orange", "Banana", "Cherry", "Peach"];

  const handleSelectItem = (item: string) => {
    console.log("item", item);
  };

  return (
    <div className="p-5">
      <div className="py-5">
        <Message />
      </div>

      <hr />

      <div className="py-5">
        <ListGroup
          items={items1}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>

      <hr />

      <div className="py-5">
        <ListGroup
          items={items2}
          heading="Fruits"
          onSelectItem={handleSelectItem}
        />
      </div>

      <hr />

      <div className="py-5">
        {/* <Alert text="Hello World"/> */}
        {/* <Alert>Hello World</Alert> */}
        <Alert
          onClose={() => {
            setAlertVisible(false);
          }}
        >
          Hello World <small>small tag</small>
        </Alert>
      </div>

      <hr />

      <div className="space-x-5 py-5">
        <Button
          onClick={() => {
            console.log("Clicked");
          }}
        >
          react Button Log Console Log
        </Button>
        <Button
          color="secondary"
          onClick={() => {
            console.log("Clicked");
          }}
        >
          react Button Console Log
        </Button>
      </div>

      <hr />

      <div className="py-5">
        {alertVisible && (
          <div className="py-5">
            <Alert
              onClose={() => {
                setAlertVisible(false);
              }}
            >
              Alert
            </Alert>
          </div>
        )}
        <Button
          color="info"
          onClick={() => {
            setAlertVisible(true);
          }}
        >
          Show Alert
        </Button>
      </div>

      <hr />

      <div className="py-5">
        <Like
          onClick={() => {
            console.log("Clicked");
          }}
        />
      </div>

      <hr />

      <div className="py-5">
        <ManagingComponentState />
      </div>

      <hr />

      <div className="py-5">
        <NavBar cartItemsCount={cartItems.length} />
        <Cart
          cartItems={cartItems}
          onClear={() => {
            setCartItems([]);
          }}
        />
      </div>

      <hr />

      <div className="py-5">
        <ExpandableText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
          corporis, temporibus molestiae facere in dignissimos. Dolores, aliquid
          nesciunt. Veritatis reprehenderit sit minima et officiis totam
          blanditiis nihil optio esse amet deserunt iste rerum assumenda rem
          explicabo tempore, commodi repellat aspernatur!
        </ExpandableText>
      </div>

      <hr />

      <div className="py-5">
        <FormUseRef />
      </div>

      <hr />

      <div className="py-5">
        <FormUseState />
      </div>

      <hr />

      <div className="py-5">
        <FormUseForm />
      </div>

      <hr />

      <div className="py-5">
        <FormUseFormValidation />
      </div>

      <hr />

      <div className="py-5">
        <FormUseFormValidationZod />
      </div>

      <hr />

      <div className="py-5">
        <FormUseFormValidationZodDisableButton />
      </div>

      <hr />

      <div className="py-5">
        <ExpenseTracker />
      </div>
    </div>
  );
};

export default App;
