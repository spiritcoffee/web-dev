document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".register-form");
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close-btn");
  const resetBtn = document.querySelector(".register-form button[type='reset']");
  const tableBody = document.querySelector("#userTable tbody");
  const tableContainer = document.getElementById("userTableContainer");
  const toggleBtn = document.getElementById("toggleTableBtn");

  function addUserToTable(name, email) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${name}</td><td>${email}</td>`;
    tableBody.appendChild(row);
  }

  function saveUser(name, email) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ name, email });
    localStorage.setItem("users", JSON.stringify(users));
  }

  function loadUsers() {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.forEach(user => addUserToTable(user.name, user.email));
  }

  if (form && modal && closeBtn && resetBtn && tableBody && tableContainer && toggleBtn) {
    loadUsers();

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.name.value;
      const email = form.email.value;
      saveUser(name, email);
      addUserToTable(name, email);
      modal.style.display = "block";
      form.reset();
    });

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    resetBtn.addEventListener("click", function () {
      alert("Form has been reset.");
    });

    toggleBtn.addEventListener("click", function () {
      if (tableContainer.style.display === "none") {
        tableContainer.style.display = "block";
        toggleBtn.textContent = "Hide User Table";
      } else {
        tableContainer.style.display = "none";
        toggleBtn.textContent = "Show User Table";
      }
    });
  } else {
    console.error("One or more elements not found in the DOM.");
  }
});
