function Input({ type, ...props }) {
  return (
    <>
      {type !== "textarea" ? (
        <input type={type} required {...props} />
      ) : (
        <textarea type={type} required {...props} />
      )}
    </>
  );
}

export default Input;
