import ListNav from "./ListNav";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <nav className="nav">
          <ListNav />
        </nav>
      </div>
    </header>
  );
}
