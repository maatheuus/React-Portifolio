export default function handleClickTop(sectionName) {
  const header = document.querySelector(`.${sectionName}`);

  header.scrollIntoView({
    behavior: "smooth",
  });
}
