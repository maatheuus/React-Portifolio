import { FaJs, FaReact, FaSass, FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function IconsTech({ icons = {} }) {
  let icon = [];

  icons.tech === "JavaScript" ? icon.push(<FaJs />) : icon.push(<FaReact />);
  icons.style === "Sass" ? icon.push(<FaSass />) : null;
  icons.style === "Css" ? icon.push(<FaCss3 />) : null;
  icons.style === "Tailwind" ? icon.push(<SiTailwindcss />) : null;

  return (
    <ul>
      {icon.map((value) => {
        const id = Math.random();
        return <li key={id}>{value}</li>;
      })}
    </ul>
  );
}

export default IconsTech;
