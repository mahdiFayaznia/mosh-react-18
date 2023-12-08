import { FormEvent, useRef } from "react";

const FormUseRef = () => {
  // const nameRef = useRef(null); // NOT Recommended
  // const ageRef = useRef(null); // NOT Recommended

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // console.log("Submitted");

    // console.log("nameRef.current", nameRef.current); // return DOM Element

    // if (nameRef.current !== null) {
    //   console.log("nameRef.current.value", nameRef.current.value);
    // }
    // if (ageRef.current !== null) {
    //   console.log("ageRef.current.value", ageRef.current.value);
    // }

    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log("person", person);
  };

  return (
    // <form
    //   onSubmit={(event) => {
    //     // hover on event to find the type of event
    //     event.preventDefault();
    //     console.log("Submitted");
    //   }}
    // >
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        <div className="mb-3">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">useRef - Name:</span>
            </div>
            <input
              type="text"
              placeholder="useRef - Name"
              className="input input-bordered w-full max-w-md"
              ref={nameRef}
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">useRef - Age:</span>
            </div>
            <input
              type="number"
              placeholder="useRef - Age"
              className="input input-bordered w-full max-w-md"
              ref={ageRef}
            />
          </label>
        </div>

        <div className="mb-3 flex items-end">
          <button className="btn btn-primary">useRef - Submit</button>
        </div>
      </div>
    </form>
  );
};

export default FormUseRef;
