import React from 'react';
import amajon from '../../Media/brand-1/amajon.png'
import great from '../../Media/brand-1/great.png'
import mpower from '../../Media/brand-1/mpower.png'
import service from '../../Media/brand-1/servicenow.png'
import sonoco from '../../Media/brand-1/sonoco.png'

import connex from '../../Media/brand-2/connex.png'
import fasion from '../../Media/brand-2/fasion.png'
import talent from '../../Media/brand-2/talent.png'
import tetrate from '../../Media/brand-2/tetrate.png'
import ths from '../../Media/brand-2/ths.png'

const Brands = () => {
    return (
        <div className='bg-gray-300'>
            <div className='w-10/12 mx-auto pb-24 pt-12'>
            <h2 className='text-4xl font-bold text-gray-500 text-center mb-10'>Trusted by businesses, big and small, across the globe</h2>
            <div className='mt-5 flex md:block '>
                <div className='md:flex justify-between mb-8 mr-4 md:mr-0'>
                    <img className='h-[40px] mt-5 md:mt-0' src={amajon} alt="" />
                    <img className='h-[40px] mt-5 md:mt-0' src={great} alt="" />
                    <img className='h-[40px] mt-5 md:mt-0' src={mpower} alt="" />
                    <img className='h-[40px] mt-5 md:mt-0' src={service} alt="" />
                    <img className='h-[40px] mt-5 md:mt-0' src={sonoco} alt="" />
                </div>
                <div className='md:flex justify-between ml-4 md:ml-0'>
                    <img className='h-[40px] mt-5 md:mt-0' src={connex} alt="" />
                    <img className='h-[40px] mt-5 md:mt-0' src={fasion} alt="" />
                    <img className='h-[40px] mt-5 md:mt-0' src={talent} alt="" />
                    <img className='h-[40px] mt-5 md:mt-0' src={tetrate} alt="" />
                    <img className='h-[40px] mt-5 md:mt-0' src={ths} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Brands;