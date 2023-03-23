import React from 'react'

import Resume from '../../assets/Uneku Ogbaje F.pdf'

const CTA = () => {
  return (
    <div className='cta space-x-4 mt-10 flex justify-center '>
        <a href={Resume} download className='btn bg-prmClrVrnt' >Download Resume</a> 
        <a href='#contact' className='btn btn-primary'>Let's talk</a> 
    </div>
  )
}

export default CTA;