import { GET_JOBS, GET_JOBS_ERROR } from "../actions";
import { initialState } from "../store";

export const jobsReducer = (state = initialState.jobs, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobsArray: action.payload,
      };
    case GET_JOBS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
