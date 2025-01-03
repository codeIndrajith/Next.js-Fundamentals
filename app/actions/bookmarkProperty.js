'use server';

import connectDB from "@/config/database";
import User from "@/models/User";
import { getSesstionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function bookmarkProperty(propertyId) {
    await connectDB();

    const sessionUser = await getSesstionUser();

    if(!sessionUser || !sessionUser.userId) {
        throw new Error("user id is required")
    }

    const {userId} = sessionUser;

    const user = await User.findById(userId);

    const isBookmarked = user.bookmark.include(propertyId);

    let message;

    if(isBookmarked) {
        user.bookmark.pull(propertyId);
        message = "Bookmark Removed";
        isBookmarked = false;
    } else {
        user.bookmark.push(propertyId);
        message = "Bookmark Addedd";
        isBookmarked = true;
    }

    await user.save();
    revalidatePath("/properties/saved", "page");

    return {
        message,
        isBookmarked
    }
}

export default bookmarkProperty;