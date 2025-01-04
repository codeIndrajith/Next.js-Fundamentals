'use server';

import connectDB from "@/config/database";
import User from "@/models/User";
import { getSesstionUser } from "@/utils/getSessionUser";

async function checkBookmarkStatus(propertyId) {
    await connectDB();

    const sessionUser = await getSesstionUser();

    if(!sessionUser || !sessionUser.userId) {
        throw new Error("user id is required")
    }

    const {userId} = sessionUser;

    const user = await User.findById(userId);

    let isBookmarked = user.bookmarks.includes(propertyId);

    return {
        isBookmarked
    }

}

export default checkBookmarkStatus;