import { UserManager } from "oidc-client-ts";

const cognitoAuthConfig = {
    authority: "https://cognito-idp.ap-south-1.amazonaws.com/ap-south-1_hjXm4aBOK",
    client_id: "5ul13qn0qutpkd4u44ngso4k59",
    redirect_uri: "https://main.d1db5aofv9kad3.amplifyapp.com/",
    response_type: "code",
    scope: "email openid phone"
};

// create a UserManager instance
export const userManager = new UserManager({
    ...cognitoAuthConfig,
});

export async function signOutRedirect () {
    const clientId = "5ul13qn0qutpkd4u44ngso4k59";
    const logoutUri = "<logout uri>";
    const cognitoDomain = "https://ap-south-1hjxm4abok.auth.ap-south-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
};
