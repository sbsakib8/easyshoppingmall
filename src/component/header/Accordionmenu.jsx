import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';

 function Accordionmenu() {
  return (
   <div className='w-full scroll-auto'>
    <h2 className=' text-3xl p-4'>Shop by Category</h2>
     <div className='flex flex-col gap-2 mt-12 shadow-md'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" className='text-[20px]! font-body!'> Men</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='flex flex-col gap-2'>
           <Link className=' p-[7px] rounded-md w-full hover:bg-gray-300 text-center text-[20px] font-body' href="#">Link 1</Link>
           <Link className=' p-[7px] rounded-md w-full hover:bg-gray-300 text-center text-[20px] font-body'  href="#">Link 2</Link>
           <Link className=' p-[7px] rounded-md w-full hover:bg-gray-300 text-center text-[20px] font-body'  href="#">Link 3</Link>
          </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" className='text-[20px]! font-body!'> Women</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='flex flex-col gap-2'>
           <Link className=' p-[7px] rounded-md w-full hover:bg-gray-300 text-center text-[20px] font-body' href="#">Link 1</Link>
           <Link className=' p-[7px] rounded-md w-full hover:bg-gray-300 text-center text-[20px] font-body'  href="#">Link 2</Link>
           <Link className=' p-[7px] rounded-md w-full hover:bg-gray-300 text-center text-[20px] font-body'  href="#">Link 3</Link>
          </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" className='text-[20px]! font-body!'>Kids</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='flex flex-col gap-2'>
           <Link className=' p-[7px] rounded-md w-full hover:bg-gray-300 text-center text-[20px] font-body' href="#">Link 1</Link>
           <Link className=' p-[7px] rounded-md w-full hover:bg-gray-300 text-center text-[20px] font-body'  href="#">Link 2</Link>
           <Link className=' p-[7px] rounded-md w-full hover:bg-gray-300 text-center text-[20px] font-body'  href="#">Link 3</Link>
          </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" className='text-[20px]! font-body!'>Kids</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='flex flex-col gap-2'>
           <Link className=' p-[7px] rounded-md w-full hover:bg-gray-300 text-center text-[20px] font-body' href="#">Link 1</Link>
           <Link className=' p-[7px] rounded-md w-full hover:bg-gray-300 text-center text-[20px] font-body'  href="#">Link 2</Link>
           <Link className=' p-[7px] rounded-md w-full hover:bg-gray-300 text-center text-[20px] font-body'  href="#">Link 3</Link>
          </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" className='text-[20px]! font-body!'>Kids</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='flex flex-col gap-2'>
           <Link className=' p-[7px] rounded-md w-full hover:bg-gray-300 text-center text-[20px] font-body' href="#">Link 1</Link>
           <Link className=' p-[7px] rounded-md w-full hover:bg-gray-300 text-center text-[20px] font-body'  href="#">Link 2</Link>
           <Link className=' p-[7px] rounded-md w-full hover:bg-gray-300 text-center text-[20px] font-body'  href="#">Link 3</Link>
          </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" className='text-[20px]! font-body!'>Kids</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='flex flex-col gap-2'>
           <Link className=' p-[7px] rounded-md w-full hover:bg-gray-300 text-center text-[20px] font-body' href="#">Link 1</Link>
           <Link className=' p-[7px] rounded-md w-full hover:bg-gray-300 text-center text-[20px] font-body'  href="#">Link 2</Link>
           <Link className=' p-[7px] rounded-md w-full hover:bg-gray-300 text-center text-[20px] font-body'  href="#">Link 3</Link>
          </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
   </div>
  );
}
export default Accordionmenu;