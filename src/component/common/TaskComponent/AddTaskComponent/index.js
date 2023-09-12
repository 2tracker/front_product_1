import { Autocomplete, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

function AddTask() {
    const option = [
        'High',
        'Medium',
        'Low'
    ]
    return (
        <div className="shadow rounded h-auto w-full px-3">
            <div>
                <h1 className="py-3">Add Task</h1>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-6 mr-4">
                    <div className="py-4">
                        <TextField id="outlined-basic" fullWidth label="Title" required variant="outlined" />
                    </div>
                    <div className="py-4">
                        <div className="pb-2">
                            <label>Start Date</label>
                        </div>
                        <TextField id="outlined-basic" fullWidth type="date" placeholder="StartDate" required variant="outlined" />
                    </div>
                    <div className="py-4">
                        <div className="pb-2">
                            <label>Estimate Hours</label>
                        </div>
                        <TextField id="outlined-basic" fullWidth type="time" required variant="outlined" />
                    </div>
                    <div className="py-4">
                        <Autocomplete
                            disablePortal

                            id="combo-box-demo"
                            options={option}
                            sx={{ width: '100%' }}
                            renderInput={(params) => <TextField {...params} label="Priority" required />}
                        />
                    </div>
                    <div className="py-4">
                    <Autocomplete
                            disablePortal

                            id="combo-box-demo"
                            options={option}
                            sx={{ width: '100%' }}
                            renderInput={(params) => <TextField {...params} label="Permissions" required />}
                        />
                    </div>
                    <div className="py-4">
                    <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={option}
                            sx={{ width: '100%' }}
                            renderInput={(params) => <TextField {...params} label="Assign To" required />}
                        />
                    </div>
                </div>
                <div className="col-span-6">
                <div className="py-4">
                    <Autocomplete
                            disablePortal

                            id="combo-box-demo"
                            options={option}
                            sx={{ width: '100%' }}
                            renderInput={(params) => <TextField {...params} label="Project" required />}
                        />
                    </div>
                    <div className="py-4">
                        <div className="pb-2">
                            <label>End Date</label>
                        </div>
                        <TextField id="outlined-basic" fullWidth type="date" placeholder="StartDate" required variant="outlined" />
                    </div>
                    <div className="py-4">
                    <div className="pb-2">
                            <label>Deadline Time</label>
                        </div>
                        <TextField id="outlined-basic" fullWidth type="time" required variant="outlined" />
                    </div>
                    <div className="py-4">
                    <Autocomplete
                            disablePortal

                            id="combo-box-demo"
                            options={option}
                            sx={{ width: '100%' }}
                            renderInput={(params) => <TextField {...params} label="Status" required />}
                        />
                    </div>
                    <div className="py-4">
                    <Autocomplete
                            disablePortal

                            id="combo-box-demo"
                            options={option}
                            sx={{ width: '100%' }}
                            renderInput={(params) => <TextField {...params} label="Category" required />}
                        />
                    </div>
                    
                    <div className="py-4">
                    <Autocomplete
                            disablePortal

                            id="combo-box-demo"
                            options={option}
                            sx={{ width: '100%' }}
                            renderInput={(params) => <TextField {...params} label="Responsible Person" required />}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTask;