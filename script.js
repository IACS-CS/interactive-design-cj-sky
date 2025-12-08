// AI-generated code starts here
// It adds click handlers to the list buttons so options can be selected
// and question buttons can toggle showing/hiding their option lists.
console.log("Hello, Interactive Graphic Design!");
// Grab all option buttons (the answers) and add click listeners.
var optionButtons = document.querySelectorAll(".option-button");
for (var i = 0; i < optionButtons.length; i++) {
  // For each option button, add a click listener that toggles a 'selected' class.
  optionButtons[i].addEventListener("click", function (event) {
    // `event.target` is the button that was clicked.
    var btn = event.target;
    // If the clicked element is a radio <input>, make sure only the
    // selected radio in that group has the 'selected' class.
    if (btn.tagName === "INPUT" && btn.type === "radio") {
      // radios are grouped by `name`; remove 'selected' from others in group
      var group = document.getElementsByName(btn.name);
      for (var j = 0; j < group.length; j++) {
        group[j].classList.remove("selected");
      }
      // mark this one as selected (and ensure it's checked)
      btn.checked = true;
      btn.classList.add("selected");
      console.log("Radio selected:", btn.name, btn.value || btn.dataset);
    } else {
      // For non-radio option-buttons (like the results button), just toggle
      btn.classList.toggle("selected");
      console.log("Option clicked:", btn.textContent);
    }
  });
}

// Find the reset button by its id. In the HTML it's `id="reset-button"`.
var resetButton = document.getElementById("reset-button");
if (resetButton) {
  // When the reset button is clicked, we want to:
  // 1) Uncheck all radio inputs
  // 2) Remove the 'selected' class from any option buttons
  // 3) Clear any text inputs (if present)
  resetButton.addEventListener("click", function () {
    // add hidden class to results button
    var resultsButton = document.querySelector('button#results');
    if (resultsButton) {
      resultsButton.classList.add('hidden');
    }
    // 1) Uncheck all radio buttons on the page
    var radios = document.querySelectorAll('input[type="radio"]');
    for (var k = 0; k < radios.length; k++) {
      radios[k].checked = false;
      // Also remove the visual 'selected' class from the radio itself
      radios[k].classList.remove("selected");
    }

    // 2) Remove 'selected' from any buttons or other elements
    var selectedEls = document.querySelectorAll(".selected");
    for (var m = 0; m < selectedEls.length; m++) {
      selectedEls[m].classList.remove("selected");
    }

    // 3) Clear any text inputs if they exist (keeps this general)
    var texts = document.querySelectorAll('input[type="text"], textarea');
    for (var n = 0; n < texts.length; n++) {
      texts[n].value = "";
    }

    // If the app used localStorage to save answers, clear those keys too.
    // We don't know exact keys, so as a safe option we remove common ones.
    try {
      // For example, remove an example key 'answers' if present.
      if (localStorage.getItem("answers") !== null) {
        localStorage.removeItem("answers");
      }
    } catch (e) {
      // If localStorage is not available, ignore the error.
      console.log("localStorage not available or cleared");
    }

    // Give a small console message so students can see the reset happened.
    console.log("All answers have been reset");
  });
}
// AI-generated code ends here

// When an option button is clicked, check if we have 
// a selected value for each question (style, season, weekend)
// and if so, show the results button; otherwise hide it.
var questions = ['style', 'temp', 'weekend'];
function updateResultsButtonVisibility() {
  // Check if all questions have a selected answer
  var allAnswered = questions.every(function(q) {
    return document.querySelector('input[name="' + q + '"]:checked') !== null;
  });
  // Show or hide the results button based on whether all are answered
  var resultsButton = document.querySelector('button#results');
  if (resultsButton) {
    // If all questions are answered, show the results button
    if (allAnswered) {
      // Show the results button
      resultsButton.classList.remove('hidden');
    } else {
      // Hide the results button
      resultsButton.classList.add('hidden');
    }
  }
}
// Attach the update function to each option button click
optionButtons.forEach(function(btn) {
  // For each option button, add a click listener that updates results button visibility
  btn.addEventListener('click', updateResultsButtonVisibility);
});
// Initial check in case some options are pre-selected
updateResultsButtonVisibility(); 

// Build the "results" button data structure.
// We have three questions: 
// - style: casual, fancy, sporty
// - temp: cold, warm, hot
// - weekend: chill, work, party
// Each question has three options, which means we have 27 possible combinations.
//
// For each combination, we define a resulting pant style (URL) and shirt style (URL).
let resultsData = {
  casual_cold_chill: {
    pants: "SkysDrawings/Pantblue.PNG",
    shirt: "SkysDrawings/Pinkshirt.PNG",
  },
  casual_cold_work: {
    pants: "SkysDrawings/Bluesweats.png",
    shirt: "SkysDrawings/Greenjacket.png",
  },
  casual_cold_party: {
    pants: "SkysDrawings/Pantgreen.PNG",
    shirt: "SkysDrawings/Pinkshirt.PNG",
  },
  casual_warm_chill: {
    pants: "SkysDrawings/PantBrown.PNG",
    shirt: "SkysDrawings/Blueshirt.PNG",
  },
  casual_warm_work: {
    pants: "SkysDrawings/Greensweats.png",
    shirt: "SkysDrawings/Bluejacket.png",
  },
  casual_warm_party: {
    pants: "SkysDrawings/Pantpink.PNG",
    shirt: "SkysDrawings/Greenshirt.PNG",
  },
  casual_hot_chill: {
    pants: "SkysDrawings/purpleshorts.png",
    shirt: "SkysDrawings/Greent.png",
  },
  casual_hot_work: {
    pants: "SkysDrawings/Orangeshorts.png",
    shirt: "SkysDrawings/Bluet.png",
  },
  casual_hot_party: {
    pants: "SkysDrawings/blueshorts.png",
    shirt: "SkysDrawings/Pinkt.png",
  },
  fancy_cold_chill: {
    pants: "SkysDrawings/Bluesweats.png",
    shirt: "SkysDrawings/Pinkjacket.png",
  },
  fancy_cold_work: {
    pants: "SkysDrawings/Pantgreen.PNG",
    shirt: "SkysDrawings/Bluejacket.png",
  },
  fancy_cold_party: {
    pants: "SkysDrawings/PantBrown.PNG",
    shirt: "SkysDrawings/Greenjacket.png",
  },
  fancy_warm_chill: {
    pants: "SkysDrawings/blacksweats.png",
    shirt: "SkysDrawings/Orangejacket.png",
  },
  fancy_warm_work: {
    pants: "SkysDrawings/Greensweats.png",
    shirt: "SkysDrawings/Redjacket.png",
  },
  fancy_warm_party: {
    pants: "SkysDrawings/Pantblue.PNG",
    shirt: "SkysDrawings/Pinkjacket.png",
  },
  fancy_hot_chill: {
    pants: "SkysDrawings/purpleshorts.png",
    shirt: "SkysDrawings/Blueshirt.PNG",
  },
  fancy_hot_work: {
    pants: "SkysDrawings/Blueshorts.png",
    shirt: "SkysDrawings/Greenshirt.PNG",
  },
  fancy_hot_party: {
    pants: "SkysDrawings/pinkshorts.png",
    shirt: "SkysDrawings/Purpleshirt.PNG",
  },
  sporty_cold_chill: {
    pants: "SkysDrawings/Greensweats.png",
    shirt: "SkysDrawings/Bluet.png",
  },
  sporty_cold_work: {
    pants: "SkysDrawings/blacksweats.png",
    shirt: "SkysDrawings/Blueshirt.PNG",
  },
  sporty_cold_party: {
    pants: "SkysDrawings/Bluesweats.png",
    shirt: "SkysDrawings/Purpleshirt.PNG",
  },
  sporty_warm_chill: {
    pants: "SkysDrawings/Bluesweats.png",
    shirt: "SkysDrawings/Greent.png",
  },
  sporty_warm_work: {
    pants: "SkysDrawings/blacksweats.png",
    shirt: "SkysDrawings/yellowt.png",
  },
  sporty_warm_party: {
    pants: "SkysDrawings/Greenshorts.png",
    shirt: "SkysDrawings/Pinkt.png",
  },
  sporty_hot_chill: {
    pants: "SkysDrawings/Orangeshorts.png",
    shirt: "SkysDrawings/Bluet.png",
  },
  sporty_hot_work: {
    pants: "SkysDrawings/Greenshorts.png",
    shirt: "SkysDrawings/Pinkt.png",
  },
  sporty_hot_party: {
    pants: "SkysDrawings/purpleshorts.png",
    shirt: "SkysDrawings/yellowt.png",
  },
};

  // When they press the results button, we read their selected options,
  // look up the corresponding outfit in resultsData, and display it.
  let resultsButton = document.getElementById("results");
  if (resultsButton) {
    resultsButton.addEventListener("click", function() {
      // Get selected options
      let style = document.querySelector('input[name="style"]:checked').value;
      let temp = document.querySelector('input[name="temp"]:checked').value;
      let weekend = document.querySelector('input[name="weekend"]:checked').value;

      // Build the key to look up in resultsData
      let resultKey = style + "_" + temp + "_" + weekend;

      // Look up the outfit
      let outfit = resultsData[resultKey];
      if (outfit) {
        // Display the outfit images
        let pantsImg = document.getElementById("pants-image");
        let shirtImg = document.getElementById("shirt-image");
        if (pantsImg && shirtImg) {
          console.log('Setting images',outfit)
          pantsImg.src = outfit.pants;
          shirtImg.src = outfit.shirt;
        }
      } else {
        console.log("No outfit found for selection:", resultKey);
      }
    });
  }
  //hide the images when reset is clicked or when the answers are changed
  var images = document.querySelectorAll("#pants-image, #shirt-image");
  function hideImages() {
    console.log('Hiding images');
    images.forEach(function(img) {
      img.src = "";
    });
  }
  resetButton.addEventListener("click", hideImages);
  optionButtons.forEach(function(btn) {
    btn.addEventListener("click", hideImages);
  }); 