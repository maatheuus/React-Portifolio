import { FaJs, FaReact, FaSass, FaCss3, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function IconsTech({ icons = {} }) {
  let icon = [];

  icons.tech.map((tech) => {
    return (
      tech === "JavaScript" && icon.push(<FaJs />),
      tech === "React" && icon.push(<FaReact />),
      tech === "NodeJs" && icon.push(<FaNodeJs />)
    );
  });

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
