const poolData = {
  UserPoolId: "ap-south-1_hjXm4aBOK",        // YOUR USER POOL ID
  ClientId: "5ul13qn0qutpkd4u44ngso4k59"           // SPA APP CLIENT ID (NO SECRET)
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

// SIGN UP
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const attributeList = [
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "email",
      Value: email,
    }),
  ];

  userPool.signUp(email, password, attributeList, null, function (err, result) {
    if (err) {
      document.getElementById("message").innerText = err.message;
      return;
    }
    document.getElementById("message").innerText =
      "Signup successful 🌸 Check your email to verify.";
  });
}

// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const authDetails = new AmazonCognitoIdentity.AuthenticationDetails({
    Username: email,
    Password: password,
  });

  const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
    Username: email,
    Pool: userPool,
  });

  cognitoUser.authenticateUser(authDetails, {
    onSuccess: function () {
      window.location.href = "dashboard.html";
    },
    onFailure: function (err) {
      document.getElementById("message").innerText = err.message;
    },
  });
}

// LOGOUT
function logout() {
  const user = userPool.getCurrentUser();
  if (user) user.signOut();
  window.location.href = "index.html";
}
