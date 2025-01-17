export default function Error() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 p-6">
            <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-6">
                Oops! The page you're looking for doesn't exist.
            </p>
            <a 
                href="/" 
                className="text-white bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
                Go Back Home
            </a>
        </div>
    );
}
