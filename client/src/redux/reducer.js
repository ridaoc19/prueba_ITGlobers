import { FORM_REGISTRATION } from "./actions";

const initialState = {
  messageRegistro: {},
  loading: false,
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {

    case FORM_REGISTRATION:
      return {...state, messageRegistro: actions.payload}

    default:
      return state;
  }
}
