import axios from "axios";
import { CREATE_EVENT, GET_EVENTS,GET_SELECT_OPTION ,SEARCH} from "./types";

export const getEvents = ({category,address,isvirtual}:any) => async (dispatch: any) => {
  try {
    let res: any = await axios.get(
      `${process.env.REACT_APP_DB_BASEURL}/getEvent?category=${category}&address=${address}&isVirtual=${isvirtual}`
    );
    console.log({getEvents:res.data})
    return dispatch({
      type: GET_EVENTS,
      payload: res.data,
    });
  } catch (error) {
    console.log({ removeAlertError: error });
  }
};

export const getSelectOptions = () => async (dispatch: any) => {
  try {
    let res: any = await axios.get(
      `${process.env.REACT_APP_DB_BASEURL}/getEvent`
    );
    return dispatch({
      type: GET_SELECT_OPTION,
      payload: res.data,
    });
  } catch (error) {
    console.log({ removeAlertError: error });
  }
};

export const createEvents = (data:any) => async (dispatch: any) => {
    try {
      let res: any = await axios.get(
        `${process.env.REACT_APP_DB_BASEURL}/createEvent`,
        data
      );
      return dispatch({
        type: CREATE_EVENT,
        payload: res.data,
      });
    } catch (error) {
      console.log({ createEventsError: error });
    }
  };

  export const searchEvent = (data:any) => async (dispatch: any) => {
    try {
      let res: any = await axios.get(
        `${process.env.REACT_APP_DB_BASEURL}/searchTitle?title=${data}`,
        data
      );
      return dispatch({
        type: SEARCH,
        payload: res.data,
      });
    } catch (error) {
      console.log({ searchEventError: error });
    }
  };