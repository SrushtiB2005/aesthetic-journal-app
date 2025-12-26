// Replace this later with Cognito authentication

function signup() {
  document.getElementById("message").innerText =
    "Signup successful 💖 (Cognito will be added)";
}

function login() {
  window.location.href = "dashboard.html";
}

function logout() {
  window.location.href = "index.html";
}

// Notes logic (API ready)
function addNote() {
  const noteText = document.getElementById("noteInput").value;
  if (!noteText) return;

  const noteDiv = document.createElement("div");
  noteDiv.className = "note";
  noteDiv.innerText = noteText;

  document.getElementById("notesContainer").appendChild(noteDiv);
  document.getElementById("noteInput").value = "";
}
