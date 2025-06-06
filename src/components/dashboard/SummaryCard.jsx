import formatCurrency from '../../utils/formatCurrency';

function SummaryCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-xl">{formatCurrency(value)}</p>
    </div>
  );
}

export default SummaryCard;