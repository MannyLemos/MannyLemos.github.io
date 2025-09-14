function toggleSkills(id) {
  const description = document.getElementById("child-" + id);
  if (description.classList.contains("hide")) {
    description.classList.remove("hide");
  } else {
    description.classList.add("hide");
  }
  const button = document.getElementById(id);
  if (button.className == "btn btn-dark rotated") {
    button.className = "btn btn-dark skill-dropdown";
  } else {
    button.className = "btn btn-dark rotated";
  }
  return false;
}
//# sourceMappingURL=scripts.js.map
