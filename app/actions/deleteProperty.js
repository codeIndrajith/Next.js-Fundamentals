"use server"

import cloudinary from "@/config/cloudinary"
import connectDB from "@/config/database"
import Property from "@/models/Property"
import { getSesstionUser } from "@/utils/getSessionUser"
import { revalidatePath } from "next/cache"

async function deleteProperty(propertyId) {
    const sessionUser = await getSesstionUser();

    if(!sessionUser || !sessionUser.userId) {
        throw new Error("User id is required")
    }

    const { userId } = sessionUser;

    const property = await Property.findById(propertyId);

    if(!property) {
        throw new Error("Property Not Found")
    }

    // Verify ownership
    if(property.owner.toString() !== userId) {
        throw new Error("Unauthorized")
    }

    // Extract plblic id from image urls
    const publicIds = property.images.map((imageUrl) => {
        const parts = imageUrl.split('/');
        return parts.at(-1).split('.').at(0);
    })

    // Delete image from cloudniary
    if(publicIds.length > 0) {
        for(let pulblicId of publicIds) {
            await cloudinary.uploader.destroy('property-pulse/' + pulblicId)
        }
    }

    await property.deleteOne();

    revalidatePath('/', 'layout')
}

export default deleteProperty;