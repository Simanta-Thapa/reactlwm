import { Link } from "react-router-dom"
import websitelogo from '../../Images/lwm_logo_white.svg'

function Navbar(){
    return(
        <>
        <header className="">
        <nav className="laptopnavbar container bg-[#541975] p-4 ">
 
    <div className="laptopnavbarcontainer flex justify-between items-center  sticky top-0">
    <div className="logo">
        <Link to="/"><img src={websitelogo} alt="Logo"/></Link>

</div>

<div className="laptopnavlinks">
  <ol className="laptopnavlist flex">
     <li><Link to='/'>Home</Link></li>
     <li><Link to='ourteam'>ourteam</Link></li>
     <li><Link to='contactus'>contactus</Link></li>
  </ol>
</div>
    </div>
    

        </nav>
        </header>
        </>
    )
}


export default Navbar