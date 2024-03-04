function LinksIntroduction({ href, children }) {
  return (
    <li>
      <a href={href} target="_blanc" className="link-style">
        {children}
      </a>
    </li>
  );
}

export default LinksIntroduction;
