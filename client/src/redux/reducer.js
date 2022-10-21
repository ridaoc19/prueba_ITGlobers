import { DETAIL_ARTICULES, FORM_REGISTRATION } from "./actions";

const initialState = {
  messageRegistro: {},
  detail: {},
  loading: false,
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {

    case FORM_REGISTRATION:
      return {...state, messageRegistro: actions.payload}

    case DETAIL_ARTICULES:
    return {...state, detail: actions.payload}

    default:
      return state;
  }
}
