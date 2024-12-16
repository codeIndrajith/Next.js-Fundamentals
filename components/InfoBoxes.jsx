import Link from "next/link"
import InfoBox from "./InfoBox"

const InfoBoxes= () => {
    return (
        
        <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          
         <InfoBox heading='For Renters' buttonInfo={{
          text: "Browse Properties",
          link: "/properties",
          backgroundColor: "bg-black"
         }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, quas possimus sint alias quo magnam nesciunt itaque modi error nostrum, quasi, laudantium in voluptas amet et odit iure ea fugit.</InfoBox>
         <InfoBox heading='For Property Owners' backgroundColor="bg-blue-100" buttonInfo={{
          text: "Add Properties",
          link: "/properties/add",
          backgroundColor: "bg-blue-500"
         }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dolorem!</InfoBox>
        </div>
      </div>
    </section>

    )
}

export default InfoBoxes