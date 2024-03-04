import Button from "./Button";

function ListButtonsIcons({
  icons,
  text,
  onClick,
  classButton = "button nav__list-buttons",
  children,
  classDiv,
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
