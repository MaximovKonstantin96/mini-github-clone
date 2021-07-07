import { setIsFetching, setRepositories, setTotalCount } from "./actions";
import * as api from "./api";

export const fetchRepositories = (params) => (dispatch) => {
  dispatch(setIsFetching(true));
  return api
    .fetchRepositories(params)
    .then((data) => {
      if (data.errors) return;

      const { items, total_count } = data;

      if (Array.isArray(items)) dispatch(setRepositories(items));      
        dispatch(setTotalCount(total_count));      
    })
    .finally(() => dispatch(setIsFetching(false)));
};
