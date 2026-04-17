import React from 'react'

const Navbar2 = () => {
  return (
    <>
  <div className='flex bg-amber-200 '>
   <label htmlFor="one" className="md: text-2xl ml-120 cursor-pointer">
          ☰
        </label>
     <input type='checkbox' id='one' className='peer'/>
    <div> my logo</div>
    <div>
        <ul className='flex ml-130 gap-8 md:hidden'>
            <li>ram</li>
             <li>ram</li>
              <li>ram</li>
               <li>ram</li>
        </ul>
        
    </div>
    
     <ul className='hidden peer-checked:flex flex-col gap-8 '>
            <li>ram</li>
             <li>ram</li>
              <li>ram</li>
               <li>ram</li>
        </ul>
  </div>
  
    </>
  )
}

export default Navbar2