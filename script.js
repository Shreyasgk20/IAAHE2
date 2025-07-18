// Animated Header
window.addEventListener("scroll", function () {
  const logo = document.getElementById("logo");
  const text = document.getElementById("header-text");
  if (window.scrollY > 50) {
    logo.classList.add("shrink");
    text.style.width = "78%";
  } else {
    logo.classList.remove("shrink");
    text.style.width = "65%";
  }
});

// ensure only one checkbox is selected for each data
const checkboxes1 = document.querySelectorAll(
  '.first-check input[type="checkbox"]'
);

checkboxes1.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      checkboxes1.forEach((cb) => {
        if (cb !== checkbox) cb.checked = false;
      });
    }
  });
});

const checkboxes2 = document.querySelectorAll(
  '.second-check input[type="checkbox"]'
);

checkboxes2.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      checkboxes2.forEach((cb) => {
        if (cb !== checkbox) cb.checked = false;
      });
    }
  });
});

const checkboxes3 = document.querySelectorAll(
  '.third-check input[type="checkbox"]'
);

checkboxes3.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      checkboxes3.forEach((cb) => {
        if (cb !== checkbox) cb.checked = false;
      });
    }
  });
});

const checkboxes4 = document.querySelectorAll(
  '.fourth-check input[type="checkbox"]'
);

checkboxes4.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      checkboxes4.forEach((cb) => {
        if (cb !== checkbox) cb.checked = false;
      });
    }
  });
});

const checkboxes5 = document.querySelectorAll(
  '.fifth-check input[type="checkbox"]'
);

checkboxes5.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      checkboxes5.forEach((cb) => {
        if (cb !== checkbox) cb.checked = false;
      });
    }
  });
});

const checkboxes6 = document.querySelectorAll(
  '.bool-box input[type="checkbox"]'
);

checkboxes6.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      checkboxes6.forEach((cb) => {
        if (cb !== checkbox) cb.checked = false;
      });
    }
  });
});

// Expansion Code
function toggleExpansion1() {
  const detButton1 = document.querySelector("#details-btn1");
  const detExpansion1 = document.querySelector("#details-expansion1");
  const closeIcon = document.querySelector("#close-icon");
  const closeBtn1 = document.querySelector("#close-btn1");

  detButton1.addEventListener("click", () => {
    detExpansion1.classList.toggle("active");
  });

  closeIcon.addEventListener("click", () => {
    detExpansion1.classList.remove("active");
  });

  closeBtn1.addEventListener("click", () => {
    detExpansion1.classList.remove("active");
  });
}

function toggleExpansion2() {
  const detButton2 = document.querySelector("#details-btn2");
  const detExpansion2 = document.querySelector("#details-expansion2");
  const closeIcon2 = document.querySelector("#close-icon2");
  const closeBtn2 = document.querySelector("#close-btn2");

  detButton2.addEventListener("click", () => {
    detExpansion2.classList.toggle("active");
  });

  closeIcon2.addEventListener("click", () => {
    detExpansion2.classList.remove("active");
  });

  closeBtn2.addEventListener("click", () => {
    detExpansion2.classList.remove("active");
  });
}

function toggleExpansion3() {
  const detButton3 = document.querySelector("#details-btn3");
  const detExpansion3 = document.querySelector("#details-expansion3");
  const closeIcon3 = document.querySelector("#close-icon3");
  const closeBtn3 = document.querySelector("#close-btn3");

  detButton3.addEventListener("click", () => {
    detExpansion3.classList.toggle("active");
  });

  closeIcon3.addEventListener("click", () => {
    detExpansion3.classList.remove("active");
  });

  closeBtn3.addEventListener("click", () => {
    detExpansion3.classList.remove("active");
  });
}

function toggleExpansion4() {
  const detButton4 = document.querySelector("#details-btn4");
  const detExpansion4 = document.querySelector("#details-expansion4");
  const closeIcon4 = document.querySelector("#close-icon4");
  const closeBtn4 = document.querySelector("#close-btn4");

  detButton4.addEventListener("click", () => {
    detExpansion4.classList.toggle("active");
  });

  closeIcon4.addEventListener("click", () => {
    detExpansion4.classList.remove("active");
  });

  closeBtn4.addEventListener("click", () => {
    detExpansion4.classList.remove("active");
  });
}

function toggleExpansion5() {
  const detButton5 = document.querySelector("#details-btn5");
  const detExpansion5 = document.querySelector("#details-expansion5");
  const closeIcon5 = document.querySelector("#close-icon5");
  const closeBtn5 = document.querySelector("#close-btn5");

  detButton5.addEventListener("click", () => {
    detExpansion5.classList.toggle("active");
  });

  closeIcon5.addEventListener("click", () => {
    detExpansion5.classList.remove("active");
  });

  closeBtn5.addEventListener("click", () => {
    detExpansion5.classList.remove("active");
  });
}

function toggleExpansionExamples() {
  const detButtonExamples = document.querySelector("#examples-btn");
  const detExpansionExamples = document.querySelector("#examples-expansion");
  const closeIconExamples = document.querySelector("#close-icon-examples");
  const closeBtnExamples = document.querySelector("#close-btn-examples");

  detButtonExamples.addEventListener("click", () => {
    detExpansionExamples.classList.toggle("active");
  });

  closeIconExamples.addEventListener("click", () => {
    detExpansionExamples.classList.remove("active");
  });

  closeBtnExamples.addEventListener("click", () => {
    detExpansionExamples.classList.remove("active");
  });
}

function validateDataSheet() {
  // Function to validate the form
  // The normal details like name, city, country etc are already validated
  // Check if at least one checkbox is checked in each section
  const form = document.querySelector("form");
  const checkboxGroups = document.querySelectorAll(".checkbox-group");

  form.addEventListener("submit", function (e) {
    let allValid = true;
    let firstInvalidGroup = null;

    checkboxGroups.forEach((group) => {
      const checkboxes = group.querySelectorAll('input[type="checkbox"]');
      const isChecked = Array.from(checkboxes).some((cb) => cb.checked);

      // Remove existing error message if any
      const oldError = group.querySelector(".error-message");
      if (oldError) oldError.remove();

      if (!isChecked) {
        allValid = false;

        // Create and append error message
        const errorMsg = document.createElement("p");
        errorMsg.textContent = "Please select at least one option.";
        errorMsg.className = "error-message";
        errorMsg.style.color = "red";
        errorMsg.style.fontSize = "0.9rem";
        errorMsg.style.marginTop = "5px";
        group.appendChild(errorMsg);

        if (!firstInvalidGroup) {
          firstInvalidGroup = group;
        }
      }
    });

    if (!allValid) {
      e.preventDefault();
      firstInvalidGroup.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}

// display the validation buttons only if no checkbox is checked

const noCheckbox = document.querySelector('input[name="no"]');
const validationBtns = document.querySelector(".validation-btns");

function toggleValidationBtns() {
  if (noCheckbox.checked) {
    validationBtns.classList.add("show");
  } else {
    validationBtns.classList.remove("show");
  }
}

noCheckbox.addEventListener("change", toggleValidationBtns);
toggleValidationBtns();

// display conent of checkbox as blue only if the checkbox is checked
document.querySelectorAll(".cb").forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    const contentDiv = this.closest(".met-container").querySelector(".content");
    if (this.checked) {
      contentDiv.classList.add("selected");
    } else {
      contentDiv.classList.remove("selected");
    }
  });
});

// display the yes container only if the yes checkbox is checked
const yesCheckbox = document.querySelector('input[name="yes"]');
const NoCheckbox = document.querySelector('input[name="no"]');
const yesContainer = document.querySelector(".yes-container");

function toggleYesContainer() {
  if (yesCheckbox.checked) {
    yesContainer.classList.add("show");
  } else {
    yesContainer.classList.remove("show");
  }
}

yesCheckbox.addEventListener("change", toggleYesContainer);
NoCheckbox.addEventListener("change", toggleYesContainer);

// scroll to top of the form
function scrollToTop() {
  const sheet = document.getElementById("data-sheet");
  sheet.scrollIntoView({ behavior: "smooth" });
}

function scrollToprimary() {
  const sheet = document.getElementById("primaryDS");
  sheet.scrollIntoView({ behavior: "smooth" });
}