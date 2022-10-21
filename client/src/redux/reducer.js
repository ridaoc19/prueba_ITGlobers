import { DETAIL_ARTICULES, FORM_REGISTRATION, LOADING } from "./actions";

const initialState = {
  messageRegistro: {},
  detail: {},
  loading: false,
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {

    case FORM_REGISTRATION:
      return { ...state, messageRegistro: actions.payload, loading: false }

    case DETAIL_ARTICULES:
      return { ...state, detail: actions.payload }

    case LOADING:
      return { ...state, loading: true }

    default:
      return state;
  }
}
