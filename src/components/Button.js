export function Button({ classes, children, onClickMethod, type }) {
  return (
    <button type={type} className={classes} onClick={onClickMethod}>
      {children}
    </button>
  );
}
