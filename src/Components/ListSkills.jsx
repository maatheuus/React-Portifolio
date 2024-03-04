function ListSkills({ title, icon }) {
  return (
    <div className="content-skills__skill">
      {icon}
      <h2 className="content-skills__skill--title">{title}</h2>
    </div>
  );
}

export default ListSkills;
