import React from 'react';
import { motion } from 'framer-motion';
const NavbarBanner = ()=> {
    const [isOpen,setIsOpen]= React.useState(true);
  return (
    open && (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5,delay:0.7}}
         className="bg-primary text-sm text-center font-semibold p-1 hidden lg:block relative">
            Are you a university or a college student for an online tutoring partnership? 
            <a href="#" className='text-secondary ml-2'>Talk to us</a>
            
        </motion.div>
    )
  )
}

export default NavbarBanner