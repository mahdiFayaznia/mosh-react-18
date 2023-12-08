interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul className="menu bg-base-200 rounded-box w-40 my-3">
        {cartItems.map((item) => (
          <li key={item}>
            <a>{item}</a>
          </li>
        ))}
      </ul>
      <div>
        <button className="btn btn-primary" onClick={onClear}>
          Clear
        </button>
      </div>
    </>
  );
};

export default Cart;
