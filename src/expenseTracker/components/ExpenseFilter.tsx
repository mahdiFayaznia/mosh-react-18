import categories from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <label className="form-control w-full">
        <select
          className="select select-bordered"
          onChange={(event) => onSelectCategory(event.target.value)}
          defaultValue="All Categories"
        >
          {/* The first option should not have a value */}
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default ExpenseFilter;
