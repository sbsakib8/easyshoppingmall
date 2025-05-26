import Menuber from "../header/Menuber"
import Topheader from "../header/Topheader"

function Navber() {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
         <Topheader />
         <Menuber />
    </div>
  )
}

export default Navber