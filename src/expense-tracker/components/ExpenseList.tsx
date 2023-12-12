interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void; // callback function to notify the parent component
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  // hide table in no item
  if (expenses.length === 0) {
    return null;
  }
  // /hide table in no item

  return (
    <div className="grid grid-cols-1 gap-3">
      <div className="overflow-x-auto rounded-lg">
        <table className="table-zebra table">
          {/* table header */}
          <thead className="bg-slate-500 text-slate-50">
            <tr>
              <th></th>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          {/* /table header */}

          {/* table body */}
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.id}</td>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    className="btn btn-outline btn-error btn-xs md:btn-sm"
                    onClick={() => onDelete(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* /table body */}

          {/* table footer */}
          <tfoot>
            <tr>
              <td>Total</td>
              <td></td>
              <td>
                $
                {expenses
                  .reduce((acc, expense) => expense.amount + acc, 0)
                  .toFixed(2)}
              </td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
          {/* /table footer */}
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
