import Link from "next/link"

const InfoBox= ({children}) => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">For Renters</h2>
            <p className="mt-2 mb-4">
              {children}
            </p>
            <Link
              href="/properties"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Properties
            </Link>
          </div>
    )
}

export default InfoBox