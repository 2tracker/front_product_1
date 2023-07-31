import React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import styled from '@emotion/styled';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width:'100%',
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#d4d4d47d ',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: 'light' ? '#1a90ff' : '#308fe8',
  },
}));


function IncomeTableComponent() {
    
    return (
        <div className='container mx-auto'>
            <div className='p-6'>
                <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-3 p-[30px] border bg-white'>
                    <div className='pb-4'>
                        <p>Income</p>
                    </div>
                    <div className='pb-4'>
                        <p className='text-[14px] pb-2'>Marketing</p>
                        <div className='flex items-center gap-3'>
                            <BorderLinearProgress  variant="determinate" value={70} />
                        <p>70%</p>
                        </div>

                    </div>
                    <div className='pb-4'>
                        <p className='text-[14px] pb-2'>Addvertisement</p>
                        <div className='flex items-center gap-3'>
                            <BorderLinearProgress  variant="determinate" value={80} />
                        <p>80%</p>
                        </div>

                    </div>
                    <div className='pb-4'>
                        <p className='text-[14px] pb-2'>Consulting</p>
                        <div className='flex items-center gap-3'>
                            <BorderLinearProgress  variant="determinate" value={40} />
                        <p>40%</p>
                        </div>

                    </div>
                    <div className='pb-4'>
                        <p className='text-[14px] pb-2'>Devlopment</p>
                        <div className='flex items-center gap-3'>
                            <BorderLinearProgress  variant="determinate" value={60} />
                        <p>60%</p>
                        </div>

                    </div>
                    <p className='text-[13px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className='col-span-9 p-[30px] border bg-white'>
                        <div>
                        <TableContainer component={Paper} sx={{ maxHeight: 400 }} className="user-table-data">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead className='!bg-[#d4d4d47d]'>
                    <TableRow className="user-table-title">
                      <TableCell className="!font-bold">First Name</TableCell>
                      <TableCell className="!font-bold">
                        Last Name
                      </TableCell>
                      <TableCell className="!font-bold">
                        City
                      </TableCell>
                      <TableCell className="!font-bold">
                        Street
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody className="h-full min-h-[300px] !overflow-y-auto ">
             
                      <>
                      <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
              
                          <div>
                            <p className="text-[14px] text-[#2a3547]">
                             Emelia
                            </p>
                    
                          </div>
                  
                      </TableCell>
                      <TableCell><p>Gislason</p></TableCell>
                      <TableCell>
                      <p>Lake Zelda</p>
                        </TableCell>
                      <TableCell>
                      <p>Kulas Shoals</p>
                        </TableCell>
                      
                    </TableRow>
                      <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
              
                          <div>
                            <p className="text-[14px] text-[#2a3547]">
                             Emelia
                            </p>
                    
                          </div>
                  
                      </TableCell>
                      <TableCell><p>Gislason</p></TableCell>
                      <TableCell>
                      <p>Lake Zelda</p>
                        </TableCell>
                      <TableCell>
                      <p>Kulas Shoals</p>
                        </TableCell>
                      
                    </TableRow>
                      <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
              
                          <div>
                            <p className="text-[14px] text-[#2a3547]">
                             Emelia
                            </p>
                    
                          </div>
                  
                      </TableCell>
                      <TableCell><p>Gislason</p></TableCell>
                      <TableCell>
                      <p>Lake Zelda</p>
                        </TableCell>
                      <TableCell>
                      <p>Kulas Shoals</p>
                        </TableCell>
                      
                    </TableRow>
                      <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
              
                          <div>
                            <p className="text-[14px] text-[#2a3547]">
                             Emelia
                            </p>
                    
                          </div>
                  
                      </TableCell>
                      <TableCell><p>Gislason</p></TableCell>
                      <TableCell>
                      <p>Lake Zelda</p>
                        </TableCell>
                      <TableCell>
                      <p>Kulas Shoals</p>
                        </TableCell>
                      
                    </TableRow>
                      <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
              
                          <div>
                            <p className="text-[14px] text-[#2a3547]">
                             Emelia
                            </p>
                    
                          </div>
                  
                      </TableCell>
                      <TableCell><p>Gislason</p></TableCell>
                      <TableCell>
                      <p>Lake Zelda</p>
                        </TableCell>
                      <TableCell>
                      <p>Kulas Shoals</p>
                        </TableCell>
                      
                    </TableRow>
                      </>
            
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

export default IncomeTableComponent;