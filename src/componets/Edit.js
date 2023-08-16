import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
 
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const [id] = useState(localStorage.getItem("id"));
  const [pnumber, setPnumber] = useState(localStorage.getItem("pnumber"));
  const [des, setDes] = useState(localStorage.getItem("des"));
  const [selectLevel, setSelectLevel] = useState(localStorage.getItem("selectLevel"));
  const [dname ,setDname]=useState(localStorage.getItem("dname"))
  const[fname , setFname]=useState(localStorage.getItem('fname'))
  const [lname , setLname]=useState(localStorage.getItem('lname'))
  const [email , setEmail]=useState(localStorage.getItem('email'))
  

  const navigate = useNavigate();
  const editHandler = () => {
    axios
      .put(`http://localhost:8000/infoData/${id}`, {
        des: des,
        selectLevel: selectLevel,
        fname: fname,
        lname: lname,
        dname: dname,
        pnumber:pnumber,
        email:email
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate("/infodata");
  };
  return (
    <Box className="p-16 bg-gray-100">
      <div>
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
            value={fname}
            onChange={(e) =>setFname(e.target.value)}
          />

          <input
            type="text"
            placeholder="Last Name"
            className="bg-gray-50 w-full h-12 shadow-md  px-4 border-gray-400 border focus:outline-none rounded-2xl "
            value={lname}
            onChange={(e) =>setLname(e.target.value)}
          />
        </div>

        <input
          type="text"
          placeholder="Display Name"
          className="bg-gray-50 w-full h-12 shadow-md  px-4 border-gray-400 border focus:outline-none rounded-2xl "
          value={dname}
          onChange={(e) =>setDname(e.target.value)}
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
          value={pnumber}
          onChange={(e) => setPnumber(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enail address"
          className="bg-gray-50 w-full h-12 shadow-md  mt-5 px-4 border-gray-400 border focus:outline-none rounded-2xl "
          value={email}
          onChange={(e) =>setEmail(e.target.value)}
        />
      </div>

      <div className="displayName">
       <div className="bg-white p-8 mb-5 rounded-3xl shadow-md w-1/2">
       <label>Discription</label>
       <input
       type="text"
       placeholder="Discription"
       className="bg-gray-50 w-full h-20 shadow-md  mt-5 px-4 border-gray-400 border focus:outline-none rounded-2xl "
       value={des}
       onChange={(e) =>setDes(e.target.value)}
     />
     <InputLabel id="demo-simple-select-label">Select Lable</InputLabel>
     <Select
       labelId="demo-multiple-name-label"
       id="demo-multiple-name"
       value={selectLevel}
       onChange={(e) =>setSelectLevel(e.target.value) }
       label="Select Lable"
       placeholder="select lable"
     >
       <MenuItem value={10}>Ten</MenuItem>
       <MenuItem value={20}>Twenty</MenuItem>
       <MenuItem value={30}>Thirty</MenuItem>
     </Select>
       </div>
        <br />
        <Button variant="contained" onClick={editHandler} color="success">
          Edit
        </Button>
      </div>
      <div>
     
      </div>
    </Box>
  );
};

export default Edit;
