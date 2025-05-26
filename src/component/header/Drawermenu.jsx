"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineMenuOpen } from "react-icons/md";
import Accordionmenu from './Accordionmenu';


 function Drawermenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  const DrawdList = (
    <Box sx={{ width: 250 }} role="presentation" >
      <List>
        <Accordionmenu />
      </List>
      <Divider />
      <List>
        
      </List>
        </Box>
  );

  return (
    <div className='w-[30px] h-[30px] mx-auto!'>
      <Button  onClick={toggleDrawer(true)} className='text-white! text-4xl! -mt-[16px]!  mx-auto!'>
        {open ?  <MdOutlineMenu /> : <MdOutlineMenuOpen />}
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawdList}
      </Drawer>
    </div>
  );
}
export default Drawermenu;