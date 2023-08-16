import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const [id] = useState(localStorage.getItem("id"));
  const [title, setTitle] = useState(localStorage.getItem("title"));
  const [des, setDes] = useState(localStorage.getItem("des"));
  const [selectLevel, setSelectLevel] = useState(
    localStorage.getItem("selectLevel")
  );

  const navigate = useNavigate();
  const editHandler = () => {
    axios
      .put(`http://localhost:8000/infoData/${id}`, {
        title: title,
        des: des,
        selectLevel: selectLevel,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate("/infodata");
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography>Add New Assigment</Typography>

      <TextField
        required
        label=" Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextareaAutosize
        minRows={5}
        placeholder="Description"
        value={des}
        onChange={(e) => setDes(e.target.value)}
      />
      <div className="displayName">
        <InputLabel id="demo-simple-select-label">Select Lable</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={selectLevel}
          onChange={(e) => setSelectLevel(e.target.value)}
          label="Select Lable"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <br />
        <Button variant="contained" onClick={editHandler} color="success">
          Edit
        </Button>
       
      </div>
    </Box>
  );
};

export default Edit;
