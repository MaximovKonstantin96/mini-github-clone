import queryString from "query-string";
import { REACT_APP_GITHUB_API_URL } from "../../constants";

export const fetchRepositories = (params) => {
  const query = queryString.stringify(params);

  return fetch(
    `${REACT_APP_GITHUB_API_URL}/search/repositories?${query}`
  ).then((res) => res.json());
};
