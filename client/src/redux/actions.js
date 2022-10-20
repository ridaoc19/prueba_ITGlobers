export const FORM_REGISTRATION = "FORM_REGISTRATION";

export function registration(input) {
  return function (dispatch) {
    return fetch(`${process.env.REACT_APP_URL}/registration`, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((data) => {dispatch({ type: FORM_REGISTRATION, payload: data })});
  };
}