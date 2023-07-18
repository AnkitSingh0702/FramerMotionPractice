import React from 'react'
import Image from 'next/image'
function Hovering() {
  return (
    <div className=" flex justify-center items-center">

   <div className="p-1">
            <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                           
                                <Image src="/a.jpg" alt='image' width={500} height={500} />
                            
                            <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500  bg-slate-300 bg-opacity-5 p-4 rounded ">
                                <div className='text-white'>Nature</div>
                                <div className='text-xa text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam provident nam repellendus?</div>
                            </div>
                        </div>
                    </div>
  
</div>
  )
}

export default Hovering