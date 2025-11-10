document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".register-form");
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close-btn");
  const resetBtn = document.querySelector(".register-form button[type='reset']");

  if (form && modal && closeBtn && resetBtn) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    resetBtn.addEventListener("click", function () {
      alert("Form has been reset.");
    });
  } else {
    console.error("One or more elements not found in the DOM.");
  }
});