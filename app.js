const { Auth } = aws_amplify;



// SIGN UP
async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await Auth.signUp({
      username: email,
      password: password,
      attributes: { email }
    });
    document.getElementById("message").innerText =
      "Signup successful 🌸 Please check your email to verify.";
  } catch (err) {
    document.getElementById("message").innerText = err.message;
  }
}

// LOGIN
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await Auth.signIn(email, password);
    window.location.href = "dashboard.html";
  } catch (err) {
    document.getElementById("message").innerText = err.message;
  }
}

// LOGOUT
async function logout() {
  await Auth.signOut();
  window.location.href = "index.html";
}

// PROTECT DASHBOARD
async function checkAuth() {
  try {
    await Auth.currentAuthenticatedUser();
  } catch {
    window.location.href = "index.html";
  }
}

if (window.location.pathname.includes("dashboard")) {
  checkAuth();
}


