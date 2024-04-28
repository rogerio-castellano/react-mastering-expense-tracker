import categories from "../categories";

interface Props {
  onChange: (category: string) => void;
}
const ExpenseFilter = ({ onChange }: Props) => {
  return (
    <select className="form-select" onChange={(event) => onChange(event.target.value)}>
      <option value="">All categories</option>
      {categories.map((categories) => (
        <option key={categories} value={categories}>
          {categories}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
