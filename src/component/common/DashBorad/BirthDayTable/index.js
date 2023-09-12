import React, { useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GetDOB } from "../../../../Api/dashboardApi";
import moment from 'moment';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";




function BirthDayTable() {
  const [age, setAge] = React.useState("");
  const [getDob, setGeDob] = React.useState([])

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    GetDOB().then((res) => {
      setGeDob(res)
    }).catch((err) => {
      console.log(err, "DOB ERROR");
    })
  }, [])

  return (

    <div className=" max-[576px]:grid-cols-1  gap-6">
      <div className=" rounded-lg border p-[30px] ">
        <div className="flex items-center justify-between pb-5">
          <h5 className="text-[18px] font-semibold text-left">
            Birthday List
          </h5>
        </div>
        <div>
          <TableContainer component={Paper} sx={{ maxHeight: 400 }} className="user-table-data">
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
                {getDob.map((item, index) => {
                  return (
                    <>
                      <TableRow
                      key={index}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          <div className="flex gap-3 py-1">
                            <div className="w-10 h-10 rounded-full ">
                              <img
                                alt="profileImage"
                                src="/assets/user-1.jpg"
                                className="rounded-full"
                              />
                            </div>
                            <div>
                              <p className="text-[14px] font-semibold text-[#2a3547]">
                                {item?.firstName} {item?.lastName}
                              </p>
                              <p className="text-[12px] text-[#2a3547]">
                                {item?.role}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{moment(item?.DOB).format('DD/MM/YYYY')}</TableCell>
                        <TableCell>{item?.daysToBday} Days</TableCell>
                        <TableCell><button className={`w-[130px] h-[30px] ${item?.daysToBday > 130 ? 'text-orange-600 bg-orange-200' : 'text-blue-500 bg-blue-200'} ${item?.daysToBday === 0 && 'text-blue-500 bg-white'} font-semibold text-[16px]   rounded-2xl`}>
                          {item?.daysToBday > 130 ? 'Low' : 'Something'} {item?.daysToBday === 0 && 'My Birthday'}
                        </button></TableCell>
                      </TableRow>

                    </>
                  )
                })}
                
              </TableBody>
            </Table>
          </TableContainer>
          <div className="text-center w-full">
            <Link to={'/birthdaylist'}>
                  <Button className="rounded-md">View All</Button>
                  </Link>
                </div>
        </div>
      </div>

    </div>
  );
}

export default BirthDayTable;
