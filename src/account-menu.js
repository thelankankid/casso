// Casso's account menu is a <details>, so it opens without JavaScript. This only closes it the way
// Casso's AccountMenu.tsx does: on a click outside, on Escape (focus back on the photo), and after
// following a link in it.
for (const menu of document.querySelectorAll("details.casso-account")) {
  const close = () => { menu.open = false; };
  document.addEventListener("pointerdown", (e) => {
    if (menu.open && !menu.contains(e.target)) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.open) {
      close();
      menu.querySelector("summary")?.focus();
    }
  });
  menu.addEventListener("click", (e) => {
    if (e.target.closest?.(".casso-menu a")) close();
  });
}
