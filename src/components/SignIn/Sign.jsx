import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/joy/Button';
import TextField from '@mui/material/TextField';
const sign = () => {
  return (

    <Box style={{width:"25%", height:"30rem", backgroundColor:"rgb(240,344, 220)", margin :"40px" , alignItems:"center"}}>
  <div  style={{padding:"10px", paddingTop:"50px"}}>
      <h2>SignIn to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio recusandae veniam dolor cupiditate exercitationem!</p>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue="Email"
        />  
        <TextField
          required
          id="outlined-required"
          label="Password"
          defaultValue="Password"
        />  
      </div>
    </Box>
   
    <Button color="primary" style={{width:"20rem"}}>
          Login
        </Button>
 
    </div>
    </Box>
  
  )
}

export default sign


