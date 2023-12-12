import { useEffect, useRef } from "react";

const AfterRender = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Change the state of the DOM  -->
  // Side-effect  -->
  // Change something outside of this component  -->
  // This component NOT a pure component
  // if (inputRef.current) {
  //   inputRef.current.focus();
  // }

  // afterRender
  useEffect(() => {
    // NO side-effect  -->
    // Call the function after each render
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  useEffect(() => {
    // useEffects Run in order
    // document.title = "useEffect";
  });

  return (
    <div>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Focus on input after render</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          ref={inputRef}
        />
      </label>
    </div>
  );
};

export default AfterRender;
