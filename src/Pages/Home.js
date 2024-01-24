import Sectionone from "../component/Home/sectionone"

import homesecondimage from '../Images/homesectionthirdimage.webp'

function Home(){
    return(
        <>
       <Sectionone/>
<section className="second pt-10 pb-10">
        <div className="container">
        <div className="secondsectioncontent text-center text-2xl">
            <p>London Wealth Management is an alternative to the largest wealth management 
                companies, with a comparable level of expertise, custodian security and
                 stability but with a personal and high-quality service. 
                London Wealth Management is a genuine alternative for you.</p>
        </div>
        </div>

</section>

 <section className="third pt-10 pb-10">
      <div className="container">
        <div className="thirdcontent flex">
            <div className="thirdfirstcontent">
                <p>
                    Our goal is always to deliver exceptional service by 
                    experienced and highly qualified financial professionals.
                     Our aim is to help and support people like you, and your family, 
                     throughout the stages of your life. We provide planning-led investment
                      management which is tailored to your unique needs, 
                    for whichever time of life you find yourself today.
                    </p>

                    <p>Whatever the time, the best time to plan is now</p>

                    <p>
                        Our personal service is based on forging long-lasting relationships of mutual 
                        respect and trust. 
                        This is how we help to develop your financial security and goals
                        </p>

                        <p>Get in touch today to see how we can help you.</p>

                        <a href="#">GET IN TOUCH</a>

            </div>

            <div className="thirdsecondcontent">
             <div className="thirdsecondcontentimage">
       <img src={homesecondimage}/>
             </div>
            </div>

        </div>
        </div>

 </section>

 
        </>
    )
}

export default Home