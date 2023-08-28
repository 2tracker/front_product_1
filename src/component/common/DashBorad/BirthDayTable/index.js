import React, { useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";




function BirthDayTable() {
  const [age, setAge] = React.useState("");
  const [getDob,setGeDob] = React.useState([])

  const handleChange = (event) => {
    setAge(event.target.value);
  };

 
  return (
    <div className="container mx-auto">
      <div className="p-6">
        <div className=" max-[576px]:grid-cols-1  gap-6">
          <div className=" rounded-lg border p-[30px] ">
            <div className="flex items-center justify-between pb-5">
              <h5 className="text-[18px] font-semibold text-left">
                Birthday List
              </h5>
            </div>
            <div>
              <TableContainer component={Paper} sx={{ maxHeight: 300 }} className="user-table-data">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow className="user-table-title">
                      <TableCell className="!font-bold">Person</TableCell>
                      <TableCell className="!font-bold">
                        Birthday Date
                      </TableCell>
                      <TableCell className="!font-bold">
                        Waiting Birthday
                      </TableCell>
                      <TableCell className="!font-bold">
                        Birthday Excitement
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="h-full min-h-[300px] !overflow-y-auto ">

                      <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <div className="flex gap-3 py-1">
                          <div className="w-10 h-10 rounded-full ">
                            <img
                              alt="profileImage"
                              src="/images/user-2.jpg"
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-[14px] font-semibold text-[#2a3547]">
                              fgbffb
                            </p>
                            <p className="text-[12px] text-[#2a3547]">
                              fbfbb
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>ccdcs</TableCell>
                      <TableCell>5 Days</TableCell>
                    
                      
                    </TableRow>
                
       
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BirthDayTable;
