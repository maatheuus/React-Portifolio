import ListNav from "./ListNav";

export default function Header() {
  const nameHeader = "<Matheus />";

  return (
    <header>
      <h1>{nameHeader}</h1>

      <nav>
        <ul>
          <ListNav />
        </ul>
      </nav>
    </header>
  );
}
