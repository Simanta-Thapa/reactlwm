import './Footer.css'

import { FaPhoneAlt } from 'react-icons/fa'
import websitelogo from '../../Images/lwm_logo_white.svg'

function Footer(){
    return(
        <>
        <footer className='pt-6 pb-6'>
            <div className='container'>

             <div className='upperpart flex  sm:flex-col md:flex-row justify-between'>

              <div className='upperpartimage'>
                <img src={websitelogo}/>
              </div>

              <div className='upperparttext text-center text-white'>
                <div className='upperpartexticon flex sm:justify-center sm:items-center sm:mt-4 md:justify-between mb-3'>
    <FaPhoneAlt size={32} color='white'/>
                   <p>0203 326 2955</p>
                </div>

                <h3>22 Soho Square, London W1D 4NS</h3>
               
              </div>
             </div>

             <div className='lowerpart flex flex-col justify-center items-center gap-5 mt-7'>

                <div className='lowerpartfirst text-center text-white'>
                  <a className ='inline-block mx-4'href="#">Client Charter</a>
                  <a className ='inline-block mx-4'href="#">Client Charter</a>
                  <a className ='inline-block mx-4'href="#">Client Charter</a>
                </div>

            <div className='lowerpartsecond text-center text-white'>
               <p>London Wealth Management Ltd is Authorised and Regulated by the Financial Conduct Authority</p>
            </div>

                <div className='lowerpartthird text-center text-white'>
                  <p>Registered in England and Wales number 6462818 at c/o Mercer & Hole, Trinity Court, Church Street, Rickmansworth, WD3 1RT</p>
                </div>

             </div>

            </div>

        </footer>
        </>
    )
}

export default Footer;