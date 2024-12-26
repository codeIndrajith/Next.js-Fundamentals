import { getServerSession } from "next-auth/next";
import { authOptions } from "@utils/authOptions";

export const getSesstionUser = async () => {
    try {
        const session = await getServerSession(authOptions);

        if(!session || !session.user) {
            return null;
        }

        return {
            user: session.user,
            userId: session.user.id,
        }
    } catch (error) {
        console.error("Error: ", error);
        return null;
    }
}