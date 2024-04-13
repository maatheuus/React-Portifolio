import Button from "./Button";

function ListButtonsIcons({
  icons,
  text,
  onClick,
  classButton,
  classDiv,
  children,
}) {
  return (
    <>
      <Button onClick={onClick} className={classButton}>
        <span>{text}</span>
        <div className={classDiv}>{icons}</div>
      </Button>
      {children}
    </>
  );
}

export default ListButtonsIcons;
