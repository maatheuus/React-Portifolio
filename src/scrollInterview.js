export default function handleClickTop() {
  const header = document.querySelector(".header");

  header.scrollIntoView({
    behavior: "smooth",
  });
}
