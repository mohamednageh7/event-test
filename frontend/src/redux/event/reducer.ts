import { CREATE_EVENT, GET_EVENTS, GET_SELECT_OPTION, SEARCH } from "./types";
const initialState: object = {
  event: [],
  category: [],
  address: [],
};

export default function (
  state = initialState,
  action: { type: any; payload: any }
) {
  const { type, payload } = action;
  switch (type) {
    case GET_EVENTS:
      return {
        ...state,
        event: payload,
      };
    case GET_SELECT_OPTION:
      let category = payload.map((data: any) => data.category);
      let address = payload.map((data: any) => data.address);
      return {
        ...state,
        category,
        address
      };
    case CREATE_EVENT:
      return {
        ...state,
      };
    case SEARCH:
      return {
        ...state,
        event: payload,
      };
    default:
      return state;
  }
}
