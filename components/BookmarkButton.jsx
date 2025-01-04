"use client"

import {useState, useEffect} from 'react';
import { FaBookmark } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import bookmarkProperty from "@/app/actions/bookmarkProperty";
import checkBookmarkStatus from '@/app/actions/checkBookmarkStatus';

const BookmarkButton = ({property}) => {
  
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmakred, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(!userId) {
      setLoading(false);
      return;
    }

    checkBookmarkStatus(property._id).then((res) => {
      if(res.error) alert(res.error)
      if(res.isBookmarked) setIsBookmarked(res.isBookmarked);
      setLoading(true)
    });
  }, [property._id, userId, checkBookmarkStatus]);

  const handleClick = async () => {
    if(!userId) {
      alert("You need to be signed in to bookmark a listing");
      return;
    }

    const res = await bookmarkProperty(property._id);
    if(res.error) {
      alert(res.error);
    } else {
      setIsBookmarked(res.isBookmarked)
      alert(res.message)
    }
  }
    return isBookmakred ? (
        <button
        className="bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
        onClick={handleClick}
      >
        <FaBookmark className="mr-2" /> Removed Property
      </button>
    ): (
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
        onClick={handleClick}
      >
        <FaBookmark className="mr-2" /> Bookmark Property
      </button>
    )
}

export default BookmarkButton;