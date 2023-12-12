import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters." })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    // <form onSubmit={handleSubmit((data) => console.log(data))}>
    // <form onSubmit={handleSubmit(onSubmit)}>
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div className="mb-3">
          <label className="form-control w-full max-w-sm">
            <div className="label">
              <span className="label-text font-semibold">Description</span>
            </div>
            <input
              id="description"
              type="text"
              placeholder="Description"
              className="input input-bordered w-full max-w-sm"
              {...register("description")}
            />
            {errors.description && (
              <div className="label">
                <span className="label-text-alt text-red-500">
                  {errors.description.message}
                </span>
              </div>
            )}
          </label>
        </div>

        <div className="mb-3">
          <label className="form-control w-full max-w-sm">
            <div className="label">
              <span className="label-text font-semibold">Amount</span>
            </div>
            <input
              id="amount"
              type="number"
              placeholder="Amount"
              className="input input-bordered w-full max-w-sm"
              {...register("amount", { valueAsNumber: true })}
            />
            {errors.amount && (
              <div className="label">
                <span className="label-text-alt text-red-500">
                  {errors.amount.message}
                </span>
              </div>
            )}
          </label>
        </div>

        <div className="mb-5">
          <label className="form-control w-full max-w-sm">
            <div className="label">
              <span className="label-text font-semibold">Category</span>
            </div>
            <select
              id="category"
              className="select select-bordered w-full max-w-sm"
              {...register("category")}
              defaultValue=""
            >
              {/* The first option should not have a value */}
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <div className="label">
                <span className="label-text-alt text-red-500">
                  {errors.category.message}
                </span>
              </div>
            )}
          </label>
        </div>

        <div className="flex self-end pb-5">
          <button className="btn btn-primary max-w-sm">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
