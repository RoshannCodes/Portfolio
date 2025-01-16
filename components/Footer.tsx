import React from 'react'

const Footer = () => {
  return (
    <div className='w-full py-5 flex items-center justify-center border-t border-t-white/10'>
      <p className='text-sm opacity-80'>Copyright &copy; {(new Date).getFullYear()} Roshan Koirala</p>
    </div>
  )
}

export default Footer
