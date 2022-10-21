import images from "../scss/images/images";
export const FORM_REGISTRATION = "FORM_REGISTRATION";
export const DETAIL_ARTICULES = "DETAIL_ARTICULES";
export const LOADING = "LOADING";

export function registration(input) {
  return function (dispatch) {
    dispatch({ type: LOADING })
    return fetch(`${process.env.REACT_APP_URL}/registration`, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((data) => { dispatch({ type: FORM_REGISTRATION, payload: data }) });
  };
}

export function detailArticules(id) {
  let detail = images.icons.filter(e => e.name === id)
  console.log(detail[0])
  return {
    type: DETAIL_ARTICULES,
    payload: detail[0],
  }
}
