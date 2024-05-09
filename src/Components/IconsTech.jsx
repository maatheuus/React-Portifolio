import { FaJs, FaReact, FaSass, FaCss3, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function IconsTech({ iconsTech = {} }) {
  let icon = [];

  iconsTech.tech.map((tech) => {
    return (
      tech === "FaJs" && icon.push(<FaJs />),
      tech === "FaReact" && icon.push(<FaReact />),
      tech === "FaNodeJs" && icon.push(<FaNodeJs />)
    );
  });

  iconsTech.style === "Sass" ? icon.push(<FaSass />) : null;
  iconsTech.style === "Css" ? icon.push(<FaCss3 />) : null;
  iconsTech.style === "Tailwind" ? icon.push(<SiTailwindcss />) : null;
  return (
    <ul>
      {icon.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </ul>
  );
}

export default IconsTech;
/**
 *   icons.tech.map((tech, index) => {
    // return (
    //   tech === "JavaScript" && icon.push(<FaJs />),
    //   tech === "React" && icon.push(<FaReact />),
    //   tech === "NodeJs" && icon.push(<FaNodeJs />)
    // );
    return icon.push(tech);
  });

  // icons.style === "Sass" ? icon.push(<FaSass />) : null;
  // icons.style === "Css" ? icon.push(<FaCss3 />) : null;
  // icons.style === "Tailwind" ? icon.push(<SiTailwindcss />) : null;



  function IconsTech({ iconsTech = {} }) {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    async function fetchIcons() {
      const iconComponents = await Promise.all(
        iconsTech.tech.map(async (value) => {
          const icon = await import("react-icons/fa");
          return icon[value];
        })
      );
      setIcons(iconComponents);
    }

    fetchIcons();
  }, [iconsTech.tech]);
  // const id = Math.random();
  let icon = () => {
    return icons.map((value) => value);
  };
  const displayIcon = icon();

  return (
    <ul>
      <li>{displayIcon}</li>
    </ul>
  );
}

 */
