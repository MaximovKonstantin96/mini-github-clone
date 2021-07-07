import React from "react";
import { fetchRepositories } from "../../redux/search/operations";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setSearchInput } from "../../redux/search/actions";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "25%",
    },
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(1),
  },
}));

const SearchInput = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const q = useSelector((state) => state.search.input);
  const pagination = useSelector((state) => state.search.pagination);
  const { page, perPage } = pagination;
  const classes = useStyles();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setPage(1));
    dispatch(fetchRepositories({ q, page, per_page: perPage, sort: "stars" }));
    history.push(
      `${location.pathname}?${queryString.stringify({ q, page, perPage })}`
    );
  };

  const onChange = (e) => {
    dispatch(setSearchInput(e.target.value));
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <form
            onSubmit={onSubmit}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Search Input"
              onChange={onChange}
              inputProps={{ value: q }}
            />
            <Button variant="contained" color="primary">
              Send
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};
export default SearchInput;
