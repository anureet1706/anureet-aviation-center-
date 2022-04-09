import React from "react";
import styled from "styled-components";
import {
  getProducts,
  deleteProduct,
  addProduct,
  editProduct,
} from "./firebase/apiCalls";
import { ROUTE } from "./routes";
import ButtonAppBar from "./navbar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";



export default function Product(props) {
  return (
    <Grid item xs={props.showActions ? 4 : 12} key={props.index}>
    <Paper>
      <Grid container spacing={2} className="add-padding">
        <Grid item xs={12}>
          {(props.file || props.data.urlPath) && <img
            src={props.file ? props.file : props.data.urlPath}
            alt="Product Image"
            width="200"
            height="140"
          />}
        </Grid>

        <Grid item xs={12}>
          <strong>{props.data.title}</strong>
        </Grid>

        <Grid item xs={12}>
          <span>{props.data.model}</span>
        </Grid>

        <Grid item xs={12}>
          <span className="price">{props.data.price ? "$ " + props.data.price : ""}</span>
        </Grid>

       {props.showActions && <>
        <Grid item xs={6}>
          <Button
            color="secondary"
            variant="contained"
            className="edit-button"
            onClick={() => props.onEditModeClick(props, props.data)}
          >
            Edit
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            variant="contained"
            className="delete-button"
            onClick={() => props.onDelete(props.data)}
          >
            Delete
          </Button>
        </Grid>
       </>}
      </Grid>
    </Paper>
  </Grid>
  )
}