import Button from "./Button";

function ListButtonsIcons(props) {
  const { icons, text, onClick, classButton, classDiv, children } = props;

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
