import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white text-center p-6">
            <h1 className="text-8xl font-extrabold drop-shadow-lg text-red-500">404</h1>
            <p className="text-xl text-gray-500 mt-4">Oops! The page you're looking for doesn't exist.</p>
            <Link 
                href="/" 
                className="mt-6 px-6 py-3 bg-black text-white font-semibold shadow-lg"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
