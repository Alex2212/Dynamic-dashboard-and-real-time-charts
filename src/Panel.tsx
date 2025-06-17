import Paper from '@mui/material/Paper';
import CancelIcon from '@mui/icons-material/Cancel';
import React, { useEffect, useRef } from "react";
import { GridStack } from "gridstack";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Panel(props:any) {


  return (
  
  <Paper elevation={3} className='w-full h-full border-2 border-blue-500 overflow-hidden pb-4'>
    <div 
    className='flex flex-row justify-between items-baseline h-8 
    bg-blue-500 text-white '>
      <div className='m-auto'>
        {props.title}
      </div>
      <div>
        <CancelIcon className='cursor-pointer hover:text-red-600'/>
      </div>
    </div>
    <div className='contents align-center content-center w-full h-full'>
      {props.children}
    </div>
  </Paper>
  
  )
}

export default Panel