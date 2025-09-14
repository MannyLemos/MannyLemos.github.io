// Show or Hide the skill description
function toggleSkills(id) {
    const description = document.getElementById("child-" + id);
    if (description.classList.contains("hide")) {
        description.classList.remove("hide")
    } else {
        description.classList.add("hide")
    }

    // Rotate the button 
    const button = document.getElementById(id);
    if (button.className == "btn btn-dark rotated") {
        button.className = "btn btn-dark skill-dropdown";
    } else {
        button.className = "btn btn-dark rotated";
    }
    return false;
}