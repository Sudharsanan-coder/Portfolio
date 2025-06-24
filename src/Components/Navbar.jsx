import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import logo from "../Components/images.png"

function Navbar(){
    return(
        <nav className="h-15 p-4 sm:p-6 mt-4 sm:mt-8 mx-4 sm:mx-10 items-center border rounded-lg">
  <div className="flex flex-shrink-0 items-center justify-between">
    <div className="flex items-center">
      <img className="h-7 w-7 sm:h-8 sm:w-8 rounded-full" src={logo} alt="Logo" />
      <div className="font-Inter font-bold text-lg sm:text-xl mx-2">Portfolio</div>
    </div>

    <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
      <a href="https://github.com/Sudharsanan-coder" target="_blank" rel="noreferrer">
        <FaGithub className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
      </a>
      <a href="https://www.linkedin.com/in/sudharsanan-t-v-58459b257/" target="_blank" rel="noreferrer">
        <IoLogoLinkedin className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
      </a>
      <a href="https://www.instagram.com/zudharzanan.xd/" target="_blank" rel="noreferrer">
        <FaInstagramSquare className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
      </a>
      <a href="https://leetcode.com/u/T_V_Sudharsanan/" target="_blank" rel="noreferrer">
        <TbBrandLeetcode className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
      </a>
    </div>
  </div>
</nav>

    )
}

export default Navbar
