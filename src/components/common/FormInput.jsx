function FormInput({ label, type, value, onChange, required }) {
  return (
    <div className="mb-2">
      <label className="block">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded"
        required={required}
      />
    </div>
  );
}

export default FormInput;