"use client"

import Image from "next/image";
import Link from "next/link";
import deleteProperty from "@/app/actions/deleteProperty";
import { useState } from "react";

const ProfileProperties = ({property: intialProperites}) => {
    const [properties, setProperties] = useState(intialProperites)

    const handleDeleteProperty = async (propertyId) => {
        const confirmed = window.confirm("Are you sure to delete property?")

        if(!confirmed) {
            return;
        }
        await deleteProperty(propertyId);

        const updatedProperties = properties.filter((property) => property._id !== propertyId)
        setProperties(updatedProperties)
    }
    return (
        <div className="mb-10" key={intialProperites._id}>
                    <Link href={`/properties/${intialProperites._id}`}>
                    <Image
                        className="h-32 w-full rounded-md object-cover"
                        src={intialProperites.images[0]}
                        width={1000}
                        height={200}
                        alt="Property 1"
                    />
                    </Link>
                    <div className="mt-2">
                    <p className="text-lg font-semibold">{intialProperites.name}</p>
                    <p className="text-gray-600">Location: {intialProperites.location.street} {intialProperites.location.city} {intialProperites.location.state}</p>
                    </div>
                    <div className="mt-2">
                    <Link
                        href={`/properties/${intialProperites._id}/edit`}
                        className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
                    >
                        Edit
                    </Link>
                    <button
                        className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                        type="button"
                        onClick={() => handleDeleteProperty(intialProperites._id)}
                    >
                        Delete
                    </button>
                    </div>
        </div>
    )
}

export default ProfileProperties;