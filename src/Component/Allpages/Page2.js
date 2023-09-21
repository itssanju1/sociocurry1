import React from 'react'
import '../Allcss/PAge2.css'
import pic3 from '../Images/5.jpg'

import pic4 from '../Images/7.png'
const Page2 = () => {
  return (
    <>
    <div className='w-100 mt-5 container'>
      <div className='container'>
     <h1 className='text-center container fw-bold'>Our Services</h1>
     
     </div>
     <div className='ml-5'>
     <p className='text-center font-weight-light fs-2 lh-1 container ml-5'>Tailored packages to suit your brand's unique needs and budget, ensuring the right platform selection for maximum impact and results.</p>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-xl-3 col-xs-12 col-sm-12 col-md-6 page2imgcssfinal1 col-lg-5 '>
        <img src={pic3} className="page2imgcssfinal0  img-fluid" alt="..."/>
     
        </div>
        <div className='col-xl-6 col-md-6 col-xs-12 col-sm-12  mt-5 '>
        
        <button type="button" className="btn w-100 buttonclasscss00 text-left btn-light mt-5 "><h5 style={{float:'left'}}>1. SOCIAL MEDIA MANAGEMENT </h5></button>
        <button type="button" className="btn w-100 buttonclasscss00 text-left btn-light mt-1"><h5 style={{float:'left'}}>2. SOCIAL MEDIA MARKETING </h5></button>
        <button type="button" className="btn w-100 buttonclasscss00 text-left btn-light mt-1"><h5 style={{float:'left'}}>3. ONLINE REPUTATION MANAGEMENT  </h5></button>
        <button type="button" className="btn w-100 buttonclasscss00 text-left btn-light mt-1"><h5 style={{float:'left'}}>4.PRODUCT PHOTOSHOOT & REELS  </h5></button>
        <button type="button" className="btn w-100 buttonclasscss00 text-left btn-light mt-1"><h5 style={{float:'left'}}>5. SOCIAL MEDIA ADUIT</h5></button>
        <button type="button" className="btn w-100 buttonclasscss00 text-left btn-light mt-1"><h5 style={{float:'left'}}>6. CONTENT & SEO  </h5></button>
        <button type="button" className="btn w-100 buttonclasscss00 text-left btn-light mt-1"><h5 style={{float:'left'}}>7. CAMPAIGN MANAGEMENT   </h5></button>
       
          
        

          <img src={pic4} className="w-25 page2imgcssfinal img-fluid"  alt="..."/>
     
        </div>
      <div className='col-xl-3 col-md-3 col-xs-12 col-sm-12  mt-5'></div>
     
     
     
      </div>
    </div>
    </div>
    </>
  )
}

export default Page2