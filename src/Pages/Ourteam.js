import Ourteamcard from "../component/ourteam/ourteam"
import image1 from '../Images/ourteampic1.webp'
import image2 from '../Images/ourteampic2.webp'
import image3 from '../Images/ourteampic3.webp'
import image4 from '../Images/ourteampic4.webp'

function Ourteam(){
    return(
        <>
         <section id="first" className="">
            <div className="container">
              <div className="firstsectioncontent">
              <h3 className="text-3xl mt-5 mb-9">Finanical Planning Team</h3>

              <div className="cardcontent flex flex-wrap justify-between">
               <Ourteamcard
               image={image1}
               name='Paul Hoban'
               post='Managing director'
               email='paul@londowm.co.uk'
               />
               <Ourteamcard
               image={image2}
               name='Ben Howland'
               post='Director'
               email='ben@londowm.co.uk'
               />
               <Ourteamcard
               image={image3}
               name='Jack Astell'
               post='Chartered FINANICAL PLANNER'
               email='@londowm.co.uk'
               />
                 <Ourteamcard
               image={image4}
               name='Jenny Grimostone'
               post='Chartered FINANICAL PLANNER'
               email='@londowm.co.uk'
               />
              </div>
              </div>
            </div>

         </section>

         <section id="second" className="pt-6">
      <div className="container">

      <div className="firstsectioncontent">
              <h3 className="text-3xl mb-9">Investment Management Team</h3>

              <div className="cardcontent flex flex-wrap justify-between">
               <Ourteamcard
               image={image1}
               name='Edward Tudor'
               post='Managing INVESTMENT DIRECTOR'
               email='edward@londowm.co.uk'
               />
               <Ourteamcard
               image={image2}
               name='Timonthy Norris'
               post='INVESTMENT DIRECTOR'
               email='tim@londowm.co.uk'
               />
               <Ourteamcard
               image={image3}
               name='Max Self'
               post='INVESTMENT OPERATIONS ASSOCIATE'
               email='@londowm.co.uk'
               />
          
              </div>
              </div>

      </div>
         </section>
        </>
    )
}

export default Ourteam