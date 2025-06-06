function ProgressBar({ percentage }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
      <div
        className="bg-blue-600 h-4 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;