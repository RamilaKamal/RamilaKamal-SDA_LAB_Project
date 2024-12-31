import React from 'react'
import aboutImg from '../assets/about.png'
import {RiDoubleQuotesL} from 'react-icons/ri'
import Footer from '../components/Footer'

const About = () => {

  const statistics = [
    { label: "Satisfied Customers", value: 99},
    { label: "Elective PRoducts", value: 12},
    { label: "New PRoducts", value: 5},

  ] 
  return (
    <section>
      <div className='max-padd-container'>
        <div className='max-padd-container py-10 bg-white rounded-2xl my-6'>
          {/* container */}
          <div className='flex flex-col xl:flex-row gap-10'>
            {/* left part */}
            <div className='flex-1 relative'>
              <div className='bg-secondary rounded-3xl rounded-tr-[155px] w-[488px]'>
                <img src={aboutImg} alt="" />
              </div>
              <div className='bg-white absolute bottom-0 left-16 max-w-xs p-4 rounded-2xl flexCenter flex-col shadow-sm'>
                <span className='relative bottom-8 p-3 text-white h-12 w-12 flex items-center rounded-full bg-secondary'>
                  <RiDoubleQuotesL className='text-2xl' />
                </span>
                <p className='text-ceneter relative botom-3'>Discover fashion that speaks to your style. Elevate your wardrobe with exclusive collection.</p>
              </div>
            </div>
            {/* right part */}
            <div className='flex-1 flex justify-center flex-col'>
              <span className='medium-18 text-secondary'>Unveilling Our Journey</span>
              <h2 className='h2 max-w-[472px]'>Our Commitment to Crafting Individualized Fashion Experiences</h2>
              <p className='py-5'>Discover the essence of style, where each piece is crafted with care and precision. We bring fashion that speaks to individually and quality. From the latest trends to timeless classics, our collection is a reflection of your individuality and sophistication.</p>
              {/* statistics container */}
              <div className='flex flex-wrap gap-4'>
                {statistics.map((statistic, index) => (
                  <div key={index} className='bg-primary text-secondary p-4 rounded-lg'>
                    <div className='flex items-center gap-1'>
                      <h3 className='h3'>{statistic.value}</h3>
                      <h4 className='bold-22'>+</h4>
                    </div>
                    <p>{statistic.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default About