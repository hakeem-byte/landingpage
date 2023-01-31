import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Trusted by businesses and people across the world</h2>
                <p className='text-3xl py-6 text-black-700'>Our services are available to all 200 countries of the world</p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-blue-800'>100%</p>
                    <p className='text-gray-400 mt-2'>Transparent</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-blue-800'>24/7</p>
                    <p className='text-gray-400 mt-2'>Customer Support</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-blue-800'>100K</p>
                    <p className='text-gray-400 mt-2'>Users</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About