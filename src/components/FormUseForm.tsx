import { useForm, FieldValues } from "react-hook-form";

const FormUseForm = () => {
  // const form = useForm();
  // console.log("form", form);

  const { register, handleSubmit } = useForm();
  // console.log("register('name')", register("name"));

  const onSubmit = (data: FieldValues) => {
    console.log("data", data);
  };

  return (
    // <form onSubmit={handleSubmit((data) => console.log("data", data))}>
    // hover on data to find the type of data
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        <div className="mb-3">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">useForm - Name:</span>
            </div>
            <input
              type="text"
              placeholder="useForm - Name"
              className="input input-bordered w-full max-w-md"
              {...register("name")}
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">useForm - Age:</span>
            </div>
            <input
              type="number"
              placeholder="useForm - Age"
              className="input input-bordered w-full max-w-md"
              {...register("age")}
            />
          </label>
        </div>

        <div className="mb-3 flex items-end">
          <button className="btn btn-info">useForm - Submit</button>
        </div>
      </div>
    </form>
  );
};

export default FormUseForm;
