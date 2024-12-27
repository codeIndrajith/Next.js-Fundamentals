"use client"

import Image from "next/image";

const PropertyHeaderImage = ({image}) => {
    return (
        <div className="container-xl m-auto">
            <div className="grid grid-cols-1">
                <Image
                src={image}
                alt="main Image"
                className="object-cover h-[400px] w-full"
                width={0}
                height={0}
                sizes="100vw"
                 />
            </div>
        </div>
    )
}

export default PropertyHeaderImage;