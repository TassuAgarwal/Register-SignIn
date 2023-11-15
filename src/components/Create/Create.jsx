import React from 'react'
import { Box, TextField } from '@mui/material'
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const Create = () => {
    return (
        <Box style={{ width: "25%", height: "40rem", backgroundColor: "rgb(240,344, 220)", margin: "40px", alignItems: "center" }}>
            <div style={{ padding: "10px", paddingTop: "30px" }}>
                <h2 style={{ fontWeight: "900" }}>
                    Create Your PopX account
                </h2>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '35ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                        <TextField
                            required
                            id="outlined-required"
                            label="Full Name"
                            defaultValue="Mary"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Phone Number"
                            defaultValue="1234567890"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Email Address"
                            defaultValue="abc@123gmail.com"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Password"
                            defaultValue="123***"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Company Name"
                            defaultValue="Office Mary"
                        />
                        <FormControl style={{padding:"10px"}}>
                            <FormLabel>Are you an Agency ?</FormLabel>
                            <FormControlLabel value="female" control={<Radio />} label="Yes" />
                            <FormControlLabel value="male" control={<Radio />} label="No" />

                        </FormControl>
                </Box>
            </div>
        </Box>

    )
}

export default Create
