import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  // shape of the form
  name: string;
  age: number;
}

const FormUseFormValidation = () => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors }, // Nested Destructuring
  } = useForm<FormData>();
  console.log("formState", formState);
  // console.log("formState.errors", formState.errors);
  console.log("formState.errors", errors);

  const onSubmit = (data: FieldValues) => console.log("data", data);

  return (
    // <form onSubmit={handleSubmit((data) => console.log("data", data))}>
    // hover on data to find the type of data
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="mb-3">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">useFormValidation - Name:</span>
            </div>
            <input
              type="text"
              placeholder="useFormValidation - Name"
              className="input input-bordered w-full max-w-md"
              {...register("name", { required: true, minLength: 3 })}
            />
          </label>
          {errors.name?.type === "required" && (
            <div className="label">
              <span className="label-text-alt text-red-500">
                The name field is required.
              </span>
            </div>
          )}
          {errors.name?.type === "minLength" && (
            <div className="label">
              <span className="label-text-alt text-red-500">
                The name must be at least 3 characters.
              </span>
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">useFormValidation - Age:</span>
            </div>
            <input
              type="number"
              placeholder="useFormValidation - Age"
              className="input input-bordered w-full max-w-md"
              {...register("age", { required: true })}
            />
          </label>
          {errors.age?.type === "required" && (
            <div className="label">
              <span className="label-text-alt text-red-500">
                The age field is required.
              </span>
            </div>
          )}
        </div>

        <div className="mb-3 flex items-end">
          <button className="btn btn-warning">
            useFormValidation - Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormUseFormValidation;
