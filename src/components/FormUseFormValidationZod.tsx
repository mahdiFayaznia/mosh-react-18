import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// const schema = z.object({
//   name: z.string().min(3),
//   age: z.number().min(18),
// });

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "The name must be at least 3 characters." }),
  age: z
    .number({ invalid_type_error: "age field is required." })
    .min(18, { message: "The age must be at least 18" }),
});

type FormData = z.infer<typeof schema>; // type and interface are similar

// interface FormData {
//   // shape of the form
//   name: string;
//   age: number;
// }

const FormUseFormValidationZod = () => {
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors }, // Nested Destructuring
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  console.log("formState", formState);
  // console.log("formState.errors", formState.errors);
  console.log("formState.errors", errors);

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
              <span className="label-text font-semibold">
                useFormValidationZod - Name:
              </span>
            </div>
            <input
              type="text"
              placeholder="useFormValidationZod - Name"
              className="input input-bordered w-full max-w-md"
              {...register("name")}
            />
          </label>
          {/* if the errors exist */}
          {errors.name && (
            <div className="label">
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">
                useFormValidationZod - Age:
              </span>
            </div>
            <input
              type="number"
              placeholder="useFormValidationZod - Age"
              className="input input-bordered w-full max-w-md"
              {...register("age", { valueAsNumber: true })}
            />
          </label>
          {/* if the errors exist */}
          {errors.age && (
            <div className="label">
              <span className="label-text-alt text-red-500">
                {errors.age.message}
              </span>
            </div>
          )}
        </div>

        <div className="mb-3 flex items-end">
          <button className="btn btn-accent">
            useFormValidationZod - Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormUseFormValidationZod;
