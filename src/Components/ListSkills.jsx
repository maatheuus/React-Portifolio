import { motion } from "framer-motion";

function ListSkills({ title, icon }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { delay: 0.9, bounce: 0, type: "spring" },
        },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="content-skills__skill baloo-bhaijaan"
    >
      {icon}
      <h2 className="content-skills__skill--title">{title}</h2>
    </motion.div>
  );
}

export default ListSkills;
