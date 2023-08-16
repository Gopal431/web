import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const InfoData = () => {
  const [rows, setRows] = useState([]);

  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("http://localhost:8000/infoData")
      .then((res) => setRows(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteHandler = (id) =>{
    axios.delete(`http://localhost:8000/infoData/${id}`)
    .then(()=>getData())
    .catch((err)=>console.log(err))
  }
 
  const editHandler = (id , pnumber , des , selectLevel ,dname,fname,lname,email)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("pnumber",pnumber)
    localStorage.setItem("des",des)
    localStorage.setItem("selectLevel",selectLevel)
    localStorage.setItem("dname",dname)
    localStorage.setItem("fname",fname)
    localStorage.setItem("lname",lname)
    localStorage.setItem("email",email)
    navigate('/edit')
  }
  return (
    <div>
      <button className="bg-indigo-500 w-20 h-8 text-white rounded-lg m-2" onClick={() => navigate("/")}>Back</button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>A basic table example with a caption</caption>
          <TableHead>
            <TableRow>
              <TableCell>Display Name</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Discription</TableCell>
              <TableCell align="right">Selete Level</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row"> {row.dname}</TableCell>
                <TableCell align="right">{row.fname}</TableCell>
                <TableCell align="right">{row.lname}</TableCell>
                <TableCell align="right">{row.pnumber}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.des}</TableCell>
                <TableCell align="right">{row.selectLevel}</TableCell>
                <TableCell align="right"><Button variant="contained" onClick={()=>editHandler(row.id,row.pnumber,row.des,row.selectLevel ,row.dname, row.fname,row.lname,row.email)}>Edit</Button></TableCell>
                <TableCell align="right" ><button className="bg-red-500 text-white rounded-sm w-20 h-8"  onClick={()=>deleteHandler(row.id)}>Delete</button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
 
    </div>
  );
};

export default InfoData;
