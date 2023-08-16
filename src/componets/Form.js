import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import React, { useState } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useNavigate } from "react-router-dom";
import "./Form.css";
// import * as React from 'react';
import PropTypes from "prop-types";
// import Button from '@mui/material/Button';
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
// import Typography from '@mui/material/Typography';
import { blue } from "@mui/material/colors";

const questions = [
  "Question number one",
  "Question number two",
  "Question number three",
];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [selected, setSelected] = useState([false, false, false]);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (index) => {
    selected[index] = !selected[index];
    setSelected([...selected]);
  };

  const saveQuestion = () => {
    var summary = "";
    for (var i = 0; i < selected.length; i++) {
      if (selected[i]) {
        summary = summary + ", " + questions[i];
      }
    }
    onClose(summary);
  };

  return (
    <Dialog style={{ padding: "20px" }} onClose={handleClose} open={open}>
      <DialogTitle>
        Select atleast one question So that we can proceed with you assignment
      </DialogTitle>
      <FormGroup>
        {selected.map((item, index) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={selected[index]}
                onClick={() => handleListItemClick(index)}
              />
            }
            label={questions[index]}
          />
        ))}
        <Button variant="contained" onClick={() => saveQuestion()}>
          Save
        </Button>
      </FormGroup>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const Form = () => {
  const [info, setInfo] = useState({
    fname: "",
    lname: "",
    dname: "",
    title: "",
    des: "",
    selectLevel: " Select Level",
    pnumber:'',
    email:''
  });
  const [open, setOpen] = React.useState(false);
  const [isDataTaken, setIsDataTaken] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(questions[1]);
  const navigate = useNavigate();
  const [option, setOption] = useState("offline");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const submitHandler = () => {
    if (option === "online" && isDataTaken === false) {
      setOpen(true);
    } else {
      axios.post("http://localhost:8000/infoData", {
        des: info.des,
        selectLevel: info.selectLevel,
        fname: info.fname,
        lname: info.lname,
        dname: info.dname,
        pnumber:info.pnumber,
        email:info.email
      });
      setInfo({ title: "", des: "", selectLevel: "Select Level" });
      navigate("/infodata");
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    if (value !== "") {
      setIsDataTaken(true);
      setOpen(false);
      setSelectedValue(value);
      setInfo({ ...info, des: value });
    }
  };
  return (
    <Box className="p-16 bg-gray-100">
      <div>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="offline"
          name="radio-buttons-group"
        >
        <div className="flex ml-5">
        <FormControlLabel
        value="offline"
        control={<Radio />}
        label="Offline"
        onClick={() => setOption("offline")}
      />
      <FormControlLabel
        value="online"
        control={<Radio />}
        label="Online"
        onClick={() => setOption("online")}
      />
        </div>
        </RadioGroup>
      </div>

      <div className="bg-white p-8 mb-5 rounded-3xl shadow-md w-1/2">
        <div className="flex space-x-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-7 h-7 text-[#FFCF52]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>

          <h className="text-lg font-bold">Personal Information</h>
        </div>
        <div className="flex space-x-5 my-5">
          <input
            type="text"
            placeholder="First Name"
            className="bg-gray-50 w-full h-12 shadow-md  px-4 border-gray-400 border focus:outline-none rounded-2xl "
            value={info.fname}
            onChange={(e) => setInfo({ ...info, fname: e.target.value })}
          />

          <input
            type="text"
            placeholder="Last Name"
            className="bg-gray-50 w-full h-12 shadow-md  px-4 border-gray-400 border focus:outline-none rounded-2xl "
            value={info.lname}
            onChange={(e) => setInfo({ ...info, lname: e.target.value })}
          />
        </div>

        <input
          type="text"
          placeholder="Display Name"
          className="bg-gray-50 w-full h-12 shadow-md  px-4 border-gray-400 border focus:outline-none rounded-2xl "
          value={info.dname}
          onChange={(e) => setInfo({ ...info, dname: e.target.value })}
        />
        <p className="text-xs my-2 text-gray-400 font-semibold">
          This will be how your name will be displayed in the account section
          and in reviews
        </p>
      </div>
      <div className="bg-white p-8 mb-5 rounded-3xl shadow-md w-1/2">
        <div className="flex space-x-5 mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-7 h-7 text-[#46BCAA]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>

          <h className="text-lg font-bold">Contact Information</h>
        </div>
        <input
          type="text"
          placeholder="Phone Number"
          className="bg-gray-50 w-full h-12 shadow-md  px-4 border-gray-400 border focus:outline-none rounded-2xl "
          value={info.pnumber}
          onChange={(e) => setInfo({ ...info, pnumber: e.target.value })}
        />
        <input
          type="email"
          placeholder="Enail address"
          className="bg-gray-50 w-full h-12 shadow-md  mt-5 px-4 border-gray-400 border focus:outline-none rounded-2xl "
          value={info.email}
          onChange={(e) => setInfo({ ...info, email:e.target.value })}
        />
      </div>

      <div className="displayName">
       <div className="bg-white p-8 mb-5 rounded-3xl shadow-md w-1/2">
       <label>Discription</label>
       <input
       type="text"
       placeholder="Discription"
       className="bg-gray-50 w-full h-20 shadow-md  mt-5 px-4 border-gray-400 border focus:outline-none rounded-2xl "
       value={info.des}
       onChange={(e) => setInfo({ ...info, des: e.target.value })}
     />
     <InputLabel id="demo-simple-select-label">Select Lable</InputLabel>
     <Select
       labelId="demo-multiple-name-label"
       id="demo-multiple-name"
       value={info.selectLevel}
       onChange={(e) => setInfo({ ...info, selectLevel: e.target.value })}
       label="Select Lable"
       placeholder="select lable"
     >
       <MenuItem value={10}>Ten</MenuItem>
       <MenuItem value={20}>Twenty</MenuItem>
       <MenuItem value={30}>Thirty</MenuItem>
     </Select>
       </div>
        <br />
        <Button variant="contained" onClick={submitHandler} color="success">
          submit
        </Button>
      </div>
      <div>
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
      </div>
    </Box>
  );
};

export default Form;
