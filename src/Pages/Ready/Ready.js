import React from 'react';
import bg from '../../Media/last-bg.webp'
import ppl from '../../Media/menyppl.png'

const Ready = () => {
    return (
        <div class="bg-dip2xBlue">
        <section className='pb-24' style={{ background: `url(${bg})`,backgroundSize:'cover'}}>
          <div className='flex justify-center pt-28'>
          <img src={ppl} alt="" />
          </div>
          <p className='font-bold text-4xl text-center text-white'>Ready to take the leap?</p>
          <p className='font-bold text-4xl text-center text-white mb-5'>Choose Multiplier as your EOR partner</p>
          <div className='flex justify-center'>
          <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Want to explore ?</button>
          </div>
        </section>
      </div>
    );
};

export default Ready;