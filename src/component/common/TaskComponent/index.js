import React from 'react';
import { BsDot } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button, IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

function TaskComponent(props) {
    return (
        <div className='container mx-auto'>
            <div className='p-6'>
            <div className="flex items-center justify-between pb-5">
              <h5 className="text-[18px] font-medium text-left">
                Task
              </h5>
              <Button>
            + Add Task 
              </Button>
            </div>
                <div className='rounded-lg border p-[30px]'>
                <div>
            <Paper className="!w-full !overflow-hidden !shadow-none">
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="!font-semibold">Id</TableCell>
                      <TableCell className="!font-semibold w-[40%]">
                        Ticket
                      </TableCell>
                      <TableCell className="!font-semibold">
                        Assigned To
                      </TableCell>
                      <TableCell className="!font-semibold">Status</TableCell>
                      <TableCell className="!font-semibold">Date</TableCell>
                      <TableCell className="!font-semibold">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover role="checkbox">
                      <TableCell>1</TableCell>
                      <TableCell>
                        <p className="text-[16px] font-semibold">
                          Sed ut perspiciatis unde omnis iste
                        </p>
                        <p className="text-[14px] whitespace-nowrap text-ellipsis overflow-hidden max-w-[250px]">
                          ab illo inventore veritatis et quasi architecto beatae
                          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                          quia voluptas sit aspernatur aut odit aut fugit, sed
                          quia consequuntur magni dolores eos
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-3 py-1 items-center">
                          <div className="w-10 h-10 rounded-full ">
                            <img
                              alt="profileImage"
                              src="/assets/user-1.jpg"
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-[16px] font-semibold text-[#2a3547]">
                              Sunil Joshi
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="inline-flex rounded-full h-6 bg-[#fdede8] items-center justify-center">
                          <p className="text-[12px] text-[#2a3547] px-2">
                            Closed
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-[14px]">Wed, May 5</p>
                      </TableCell>
                      <TableCell>
                        <div className="delete-tooltip">
                          <Tooltip title="Delete Ticket">
                            <IconButton>
                              <MdDelete />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>

                    <TableRow hover role="checkbox">
                      <TableCell>2</TableCell>
                      <TableCell>
                        <p className="text-[16px] font-semibold">
                          Sed ut perspiciatis unde omnis iste
                        </p>
                        <p className="text-[14px] whitespace-nowrap text-ellipsis overflow-hidden max-w-[250px]">
                          ab illo inventore veritatis et quasi architecto beatae
                          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                          quia voluptas sit aspernatur aut odit aut fugit, sed
                          quia consequuntur magni dolores eos
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-3 py-1 items-center">
                          <div className="w-10 h-10 rounded-full ">
                            <img
                              alt="profileImage"
                              src="/assets/user-1.jpg"
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-[16px] font-semibold text-[#2a3547]">
                              Sunil Joshi
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="inline-flex rounded-full h-6 bg-[#fdede8] items-center justify-center">
                          <p className="text-[12px] text-[#2a3547] px-2">
                            Closed
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-[14px]">Wed, May 5</p>
                      </TableCell>
                      <TableCell>
                        <div className="delete-tooltip">
                          <Tooltip title="Delete Ticket">
                            <IconButton>
                              <MdDelete />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>

                    <TableRow hover role="checkbox">
                      <TableCell>3</TableCell>
                      <TableCell>
                        <p className="text-[16px] font-semibold">
                          Sed ut perspiciatis unde omnis iste
                        </p>
                        <p className="text-[14px] whitespace-nowrap text-ellipsis overflow-hidden max-w-[250px]">
                          ab illo inventore veritatis et quasi architecto beatae
                          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                          quia voluptas sit aspernatur aut odit aut fugit, sed
                          quia consequuntur magni dolores eos
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-3 py-1 items-center">
                          <div className="w-10 h-10 rounded-full ">
                            <img
                              alt="profileImage"
                              src="/assets/user-1.jpg"
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-[16px] font-semibold text-[#2a3547]">
                              Sunil Joshi
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="inline-flex rounded-full h-6 bg-[#fdede8] items-center justify-center">
                          <p className="text-[12px] text-[#2a3547] px-2">
                            Closed
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-[14px]">Wed, May 5</p>
                      </TableCell>
                      <TableCell>
                        <div className="delete-tooltip">
                          <Tooltip title="Delete Ticket">
                            <IconButton>
                              <MdDelete />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>

                    <TableRow hover role="checkbox">
                      <TableCell>4</TableCell>
                      <TableCell>
                        <p className="text-[16px] font-semibold">
                          Sed ut perspiciatis unde omnis iste
                        </p>
                        <p className="text-[14px] whitespace-nowrap text-ellipsis overflow-hidden max-w-[250px]">
                          ab illo inventore veritatis et quasi architecto beatae
                          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                          quia voluptas sit aspernatur aut odit aut fugit, sed
                          quia consequuntur magni dolores eos
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-3 py-1 items-center">
                          <div className="w-10 h-10 rounded-full ">
                            <img
                              alt="profileImage"
                              src="/assets/user-1.jpg"
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-[16px] font-semibold text-[#2a3547]">
                              Sunil Joshi
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="inline-flex rounded-full h-6 bg-[#fdede8] items-center justify-center">
                          <p className="text-[12px] text-[#2a3547] px-2">
                            Closed
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-[14px]">Wed, May 5</p>
                      </TableCell>
                      <TableCell>
                        <div className="delete-tooltip">
                          <Tooltip title="Delete Ticket">
                            <IconButton>
                              <MdDelete />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>

                    <TableRow hover role="checkbox">
                      <TableCell>5</TableCell>
                      <TableCell>
                        <p className="text-[16px] font-semibold">
                          Sed ut perspiciatis unde omnis iste
                        </p>
                        <p className="text-[14px] whitespace-nowrap text-ellipsis overflow-hidden max-w-[250px]">
                          ab illo inventore veritatis et quasi architecto beatae
                          vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                          quia voluptas sit aspernatur aut odit aut fugit, sed
                          quia consequuntur magni dolores eos
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-3 py-1 items-center">
                          <div className="w-10 h-10 rounded-full ">
                            <img
                              alt="profileImage"
                              src="/assets/user-1.jpg"
                              className="rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-[16px] font-semibold text-[#2a3547]">
                              Sunil Joshi
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="inline-flex rounded-full h-6 bg-[#fdede8] items-center justify-center">
                          <p className="text-[12px] text-[#2a3547] px-2">
                            Closed
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-[14px]">Wed, May 5</p>
                      </TableCell>
                      <TableCell>
                        <div className="delete-tooltip">
                          <Tooltip title="Delete Ticket">
                            <IconButton>
                              <MdDelete />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
        
            </Paper>
          </div>
                </div>
            </div>
        </div>
    );
}

export default TaskComponent;