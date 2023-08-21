import Keycloak from "keycloak-js";

const authURL = "http://127.0.0.1:8082/auth/";

/** This URI is used to redirect the user to the origin after the login succeeded, and it must match the RedirectUri setted in KeyCloak client config. */
const redirectURI = window.location.href;

const keycloak = new Keycloak({
  url: authURL,
  realm: "test",
  clientId: "test",
});

/**
 * This function initializes the Keycloak service when the application is opened, so the user has to login before acessing it.
 * @param callback is the function that will initialize the application
 * @remarks
 * This function is also responsible for creating the user authorization tokens, that is stored in the `keycloak` object.
 */
export function initializeKeycloak(callback: any) {
  keycloak
    .init({
      onLoad: "login-required",
      redirectUri: redirectURI,
      enableLogging: true,
      responseMode: "query",
    })
    .then((auth) => {
      if (!auth) {
        window.location.reload();
      } else {
        callback(keycloak);
      }

      localStorage.setItem("token", JSON.stringify(keycloak.token));

      setInterval(() => {
        keycloak
          .updateToken(70)
          .then((refreshed) => {
            localStorage.setItem(
              "tokenParsed",
              JSON.stringify(keycloak.tokenParsed)
            );
            localStorage.setItem("token", JSON.stringify(keycloak.token));
          })
          .catch(() => {
            console.error("Failed to refresh token");
          });
      }, 6000);
    });
}

export default keycloak;
