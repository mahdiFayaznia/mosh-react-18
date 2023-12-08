import { FormEvent, useState } from "react";

const FormUseState = () => {
  const [person, setPerson] = useState({ name: "", age: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("person", person);
  };

  return (
    // <form
    //   onSubmit={(event) => {
    //     // hover on event to find the type of event
    //     console.log("event", event);
    //   }}
    // >
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        <div className="mb-3">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">useState - Name:</span>
            </div>
            <input
              type="text"
              placeholder="useState - Name"
              className="input input-bordered w-full max-w-md"
              value={person.name} // make input sync
              onChange={(event) => {
                setPerson({ ...person, name: event.target.value });
              }}
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">useState - Age:</span>
            </div>
            <input
              type="number"
              placeholder="useState - Age"
              className="input input-bordered w-full max-w-md"
              value={person.age} // make input sync
              onChange={(event) => {
                setPerson({ ...person, age: event.target.value });
              }}
            />
          </label>
        </div>

        <div className="mb-3 flex items-end">
          <button className="btn btn-secondary">useState - Submit</button>
        </div>
      </div>
    </form>
  );
};

export default FormUseState;
