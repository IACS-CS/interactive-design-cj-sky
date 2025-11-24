// AI-generated code starts here
// It adds click handlers to the list buttons so options can be selected
// and question buttons can toggle showing/hiding their option lists.
console.log("Hello, Interactive Graphic Design!");
// Grab all option buttons (the answers) and add click listeners.
// We use `querySelectorAll` because students are already familiar with it.
var optionButtons = document.querySelectorAll(".option-button");
for (var i = 0; i < optionButtons.length; i++) {
  // For each option button, add a click listener that toggles a 'selected' class.
  optionButtons[i].addEventListener("click", function (event) {
    // `event.target` is the button that was clicked.
    var btn = event.target;
    // Toggle a visual 'selected' class on the button.
    btn.classList.toggle("selected");
    // Log the selection to the console for debugging and learning.
    console.log("Option clicked:", btn.textContent);
  });
}
// AI-generated code ends here
