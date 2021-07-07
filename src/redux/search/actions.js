import {
  SET_PAGE,
  SET_REPOSITORIES,
  SET_TOTAL_COUNT,
  SET_IS_FETCHING,
  SET_SEARCH_INPUT,
} from "./types";

export const setRepositories = (data) => ({
  type: SET_REPOSITORIES,
  payload: data,
});

export const setSearchInput = (input) => ({
  type: SET_SEARCH_INPUT,
  payload: input,
});

export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  payload: isFetching,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const setTotalCount = (total) => ({
  type: SET_TOTAL_COUNT,
  payload: total,
});
