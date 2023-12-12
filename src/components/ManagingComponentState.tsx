import { useState } from "react";

const ManagingComponentState = () => {
  // Not Recommended
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const fullName = firstName + " " + lastName; // DO NOT use state for fullName

  // Recommended
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    nationalCode: "",
  });

  const handleUpdateName = () => {
    // NOT Working
    // person.firstName = "mahdi";
    // setPerson(person);

    // const newName = {
    //   // Method-1
    //   // lastName: person.lastName,
    //   // age: person.age,
    //   // nationalCode: person.nationalCode,
    //   // firstName: "mahdi",

    //   // Method-2
    //   ...person, // Spread-Operator  -->  Copy all properties from existing person
    //   firstName: "mahdi", // Change the value of firstName property
    // };
    // setPerson(newName);

    // Method-3
    setPerson({ ...person, firstName: "mahdi" });
  };

  // Nested-Object
  const [customer, setCustomer] = useState({
    name: "mahdi",
    address: {
      city: "Isfahan",
      zipCode: 12345,
    },
  });

  const handleUpdateZipCode = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 56789 },
    });
  };
  // /Nested-Object

  // Array
  const [arrayAdd, setArrayAdd] = useState(["item1", "item2", "item3"]);
  const [arrayRemove, setArrayRemove] = useState(["item1", "item2", "item3"]);
  const [arrayUpdate, setArrayUpdate] = useState(["item1", "item2", "item3"]);

  const handleAddArrayElement = () => {
    // Add Element
    setArrayAdd([...arrayAdd, "New Item"]);
    console.log("arrayAdd", arrayAdd);
  };

  const handleRemoveArrayElement = () => {
    // Remove Element
    setArrayRemove(arrayRemove.filter((element) => element !== "item3"));
    console.log("arrayRemove", arrayRemove);
  };

  const handleUpdateArrayElement = () => {
    // Update Element
    setArrayUpdate(
      arrayUpdate.map((element) =>
        element === "item3" ? "Updated Item" : element,
      ),
    );
    console.log("arrayUpdate", arrayUpdate);
  };
  // /Array

  // Array of Objects
  const [addBugs, setAddBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
    { id: 3, title: "Bug 3", fixed: false },
  ]);

  const [removeBugs, setRemoveBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
    { id: 3, title: "Bug 3", fixed: false },
  ]);

  const [updateBugs, setUpdateBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
    { id: 3, title: "Bug 3", fixed: false },
  ]);

  const handleAddArrayOfObjects = () => {
    // Add Element
    setAddBugs([...addBugs, { id: 4, title: "New Bug", fixed: false }]);

    console.log("addBugs", addBugs);
  };

  const handleRemoveArrayOfObjects = () => {
    // Remove Element
    setRemoveBugs(removeBugs.filter((bug) => bug.id !== 3));

    console.log("removeBugs", removeBugs);
  };

  const handleUpdateArrayOfObjects = () => {
    // Update Element
    setUpdateBugs(
      updateBugs.map((bug) => (bug.id === 3 ? { ...bug, fixed: true } : bug)),
    );

    console.log("updateBugs", updateBugs);
  };
  // /Array of Objects

  // Exercise-01
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Mosh",
    },
  });

  const handleGamerName = () => {
    setGame({ ...game, player: { ...game.player, name: "Mahdi" } });
    console.log("game", game);
  };
  // /Exercise-01

  // Exercise-02
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom", "Potato"],
  });

  const handleAddPizza = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    console.log("pizza", pizza);
  };
  // /Exercise-02

  // Exercise-03
  const [cart, setCart] = useState({
    discount: 0.1,
    item: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleUpdateCart = () => {
    setCart({
      ...cart,
      item: cart.item.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    });
    console.log("cart", cart);
  };
  // /Exercise-03

  return (
    <>
      <div className="py-5">
        <button
          className="btn btn-outline btn-primary"
          onClick={handleUpdateName}
        >
          name: {person.firstName}
        </button>
      </div>

      <hr />

      <div className="py-5">
        <button
          className="btn btn-outline btn-primary"
          onClick={handleUpdateZipCode}
        >
          ZIP Code: {customer.address.zipCode}
        </button>
      </div>

      <hr />

      <div className="py-5">
        <button
          className="btn btn-outline btn-primary"
          onClick={handleAddArrayElement}
        >
          Add Array Elem in Console log # Double Click #
        </button>
      </div>

      <hr />

      <div className="py-5">
        <button
          className="btn btn-outline btn-primary"
          onClick={handleRemoveArrayElement}
        >
          Remove Array Elem in Console log # Double Click #
        </button>
      </div>

      <hr />

      <div className="py-5">
        <button
          className="btn btn-outline btn-primary"
          onClick={handleUpdateArrayElement}
        >
          Update Array Elem in Console log # Double Click #
        </button>
      </div>

      <hr />

      <div className="py-5">
        <button
          className="btn btn-outline btn-primary"
          onClick={handleAddArrayOfObjects}
        >
          Add Obj to Array in Console Log # Double Click #
        </button>
      </div>

      <hr />

      <div className="py-5">
        <button
          className="btn btn-outline btn-primary"
          onClick={handleRemoveArrayOfObjects}
        >
          Remove Obj of Array in Console Log # Double Click #
        </button>
      </div>

      <hr />

      <div className="py-5">
        <button
          className="btn btn-outline btn-primary"
          onClick={handleUpdateArrayOfObjects}
        >
          Update Obj of Array in Console Log # Double Click #
        </button>
      </div>

      <hr />

      <div className="py-5">
        <button
          className="btn btn-outline btn-primary"
          onClick={handleGamerName}
        >
          Update Gamer Name in Console Log # Double Click #
        </button>
      </div>

      <hr />

      <div className="py-5">
        <button
          className="btn btn-outline btn-primary"
          onClick={handleAddPizza}
        >
          Add Pizza Item in Console Log # Double Click #
        </button>
      </div>

      <hr />

      <div className="py-5">
        <button
          className="btn btn-outline btn-primary"
          onClick={handleUpdateCart}
        >
          Update Cart Item in Console Log # Double Click #
        </button>
      </div>
    </>
  );
};

export default ManagingComponentState;
