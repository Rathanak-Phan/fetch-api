import React from 'react'

function Headder() {
  return (
    <header className='flex justify-between items-center py-5 p-[50px] bg-gray-500'>
        <div className='text-3xl'>Website</div>
        <div>
            <ul className='flex gap-[30px] text-2xl'>
                <li>Home</li>
                <li>Service</li>
                <li>About</li>
                <li>Contect us</li>
            </ul>
        </div>
    </header>
  )
}

export default Headder