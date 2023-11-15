import React from 'react'
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
const sign = () => {
    return (
        <>
<Box style={{width:"25%", height:"30rem", backgroundColor:"rgb(240,344, 220)", margin :"40px" , alignItems:"center"}}>
<div style={{padding:"10px", paddingTop:"250px", backgroundColor:"yellow"}}>
        <h2 style={{fontWeight:"900"}}>
                Welcome to PopX
            </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus iste impedit quisquam consequuntur sapiente quis.</p>
            
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
          gap: 1,
        }}
      >
        <Button color="primary" style={{width:"20rem"}}>
          Create Account
        </Button> <br />
        <Button color="danger" style={{width:"20rem"}}>
          Already Registered ? Login
        </Button>
      </Box>
    </Box>
        </div>
</Box>
   

        </>
    )
}

export default sign
