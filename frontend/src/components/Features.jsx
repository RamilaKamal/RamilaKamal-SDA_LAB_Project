import React from 'react'
import Title from './Title'
import {TbArrowBackUp, TbTruckDelivery} from "react-icons/tb"
import {RiSecurePaymentLine} from 'react-icons/ri'

const Features = () => {
  return (
    <section className='max-padd-container py-16'>
        <Title title={'Our Features'} titleStyle={'text-center'}/>
        <div className='grid grid-cols-1 sm:grid-cols-2 ld:grid-cols-3 bg-white rounded-xl'>
            <div>
                <TbArrowBackUp className='bold-32 mb-3 text-secondary' />
                <h4 className='h4 capitalize'>Easy Return</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tenetur dolorem alias illum perspiciatis animi?</p>
            </div>
            <div>
                <TbTruckDelivery className='bold-32 mb-3 text-red-500' />
                <h4 className='h4 capitalize'>Fast Delivery</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tenetur dolorem alias illum perspiciatis animi?</p>
            </div>
            <div>
                <RiSecurePaymentLine className='bold-32 mb-3 text-yellow-500' />
                <h4 className='h4 capitalize'>Secure Payment</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tenetur dolorem alias illum perspiciatis animi?</p>
            </div>
        </div>
    </section>
  )
}

export default Features