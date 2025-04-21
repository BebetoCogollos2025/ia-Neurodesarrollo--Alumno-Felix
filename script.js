function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const isVisible = sidebar.style.left === "0px";
  sidebar.style.left = isVisible ? "-260px" : "0px";
}