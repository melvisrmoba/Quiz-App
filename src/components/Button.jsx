export default function Button({ onClick, children, disabled = false }) {
  return (
    <button onClick={onClick} disabled={disabled} className="submit-btn">
      {children}
    </button>
  );
}