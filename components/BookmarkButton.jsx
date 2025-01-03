"use client"

import { FaBookmark } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import bookmarkProperty from "@/app/actions/bookmarkProperty";

const BookmarkButton = ({property}) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const handleClick = async () => {
    if(!userId) {
      alert("You need to be signed in to bookmark a listing");
      return;
    }

    const res = await bookmarkProperty(property._id);
    console.log(res)
    if(res.error) {
      alert(res.error);
    } else {
      alert(res.message)
    }
  }
    return (
        <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
        onClick={handleClick}
      >
        <FaBookmark className="mr-2" /> Bookmark Property
      </button>
    )
}

export default BookmarkButton;