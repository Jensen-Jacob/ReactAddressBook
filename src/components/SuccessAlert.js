export default function SuccessAlert({ onShowAlert, children }) {
  return (
    <div
      className="flex items-center justify-between p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
      role="alert"
    >
      <span className="font-medium">{children[0]}</span> {children[1]}
      <button
        type="button"
        className="text-sm md:text-base lg:text-lg justify-self-end"
        onClick={() => onShowAlert([])}
      >
        {" "}
        X{" "}
      </button>
    </div>
  );
}
