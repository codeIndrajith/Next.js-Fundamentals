"use client";

import Link from "next/link";

const ErrorPage = ({error}) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white text-center p-6">
            <h1 className="text-8xl font-extrabold drop-shadow-lg text-red-500">Error</h1>
            <p className="text-xl text-gray-500 mt-4">
                {error.toString()}
            </p>
            <Link 
                href="/" 
                className="mt-6 px-6 py-3 bg-black text-white font-semibold shadow-lg"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;
