export function createNavigation(currentPage) {
  const nav = document.createElement("nav");
  nav.className = "navigation";

  const models = [
    "index",
    "chef_or_travel",
    "gameday_ventures",
    "crash_and_burn",
    "final_business",
  ];
  const names = [
    "Failure Resume",
    "Chef or Travel",
    "Gameday Ventures",
    "Crash and Burn",
    "Final Business",
  ];

  models.forEach((num) => {
    const link = document.createElement("a");
    link.href = num === 1 ? "index.html" : `${num}.html`;
    link.className = currentPage === num ? "active" : "";
    link.textContent = `${names[models.indexOf(num)]}`;
    nav.appendChild(link);
  });

  return nav;
}
