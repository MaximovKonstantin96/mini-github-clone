import {
  SET_REPOSITORIES,
  SET_PAGE,
  SET_IS_FETCHING,
  SET_SEARCH_INPUT,
  SET_TOTAL_COUNT,
} from "./types";

const initialState = {
  repositories: [],
  isFetching: false,
  input: "",
  pagination: {
    page: 1,
    perPage: 10,
    totalCount: 0,
  },
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload,
      };
    case SET_SEARCH_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          totalCount: action.payload,
        },
      };
    case SET_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: action.payload,
        },
      };
    default:
      return state;
  }
};

export default app;
