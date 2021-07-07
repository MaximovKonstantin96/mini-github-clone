import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  table: {
    minWidth: 650,
  },
  contributors: {
    display: "flex",
  },
  contributor: {
    marginRight: theme.spacing(3),
  },
}));

const Card = () => {
  const params = useParams();
  const id = +params.id;
  const selectedRepository = useSelector((state) =>
    state.search.repositories.find((rep) => rep.id === id)
  );
  const [languages, setLanguages] = useState({});
  const [contributors, setContributors] = useState([]);
  const classes = useStyles();

  const rows = [
    {
      name: "Stars count",
      value: selectedRepository?.stargazers_count,
    },
    {
      name: "Last commit",
      value: selectedRepository?.updated_at,
    },
    {
      name: "Languages",
      value: Object.keys(languages).join(", "),
    },
    {
      name: "Description",
      value: selectedRepository?.description,
    },
    {
      name: "Contributors",
      value: (
        <div className={classes.contributors}>
          {contributors.map((c) => (
            <div className={classes.contributor}>
              <p>{c.login}</p>{" "}
              <Avatar className={classes.large} src={c.avatar_url}></Avatar>
            </div>
          ))}
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetch(selectedRepository?.languages_url)
      .then((res) => res.json())
      .then((data) => setLanguages(data));
    fetch(selectedRepository?.contributors_url)
      .then((res) => res.json())
      .then((data) => setContributors(data));
  }, []);

  return (
    <Grid container>
      <Grid>
        <div>
          <Avatar
            className={classes.large}
            alt="Remy Sharp"
            src={selectedRepository?.owner.avatar_url}
          />
        </div>
        <h1>{selectedRepository?.name}</h1>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Название</TableCell>
                <TableCell align="left">Значение</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default Card;
