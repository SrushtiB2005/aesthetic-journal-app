const { Amplify } = aws_amplify;

Amplify.configure({
  Auth: {
    region: "ap-south-1",
    userPoolId: "ap-south-1_hjXm4aBOK",
    userPoolWebClientId: "5ul13qn0qutpkd4u44ngso4k59"
  }
});

