import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* search bar */}
      <div className='hidden md:flex ring-[1.5px] ring-gray-300 items-center gap-2 text-xs rounded-full px-2'>
        <Image src="/search.png" alt='search' width={14} height={14} />
        <input placeholder='Search' className='w-[200px] p-2 bg-transparent outline-none' />
      </div>
      {/* icons and user */}
      <div className='flex items-center gap-6 w-full justify-end'>
        <div className='bg-white w-7 h-7 rounded-full flex items-center justify-center cursor-pointer'>
          <Image src="/message.png" alt='message' width={20} height={20} />
        </div>
        <div className='bg-white w-7 h-7 rounded-full flex items-center justify-center cursor-pointer relative'>
          <Image src="/announcement.png" alt='announcement' width={20} height={20} />
          <div className='absolute -top-3 text-xs -right-3 w-5 h-5 bg-purple-500 text-gray-100 rounded-full flex items-center justify-center'>1</div>
        </div>

        <div className='flex flex-col '>
          <span className='text-xs leading-3 font-medium'>Ahmed Bakur</span>
          <span className='text-[13px] text-green-500 text-right'>Admin</span>
        </div>
        <div>
          <Image
            className="rounded-full"
            src="/avatar.png"
            alt="avatar"
            width={36} 
            height={36}
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar