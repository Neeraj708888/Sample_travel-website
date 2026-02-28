export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-gray-600 mb-6">
                Sorry, this event does not exist.
            </p>
            <a
                href="/destinations"
                className="text-blue-600 hover:underline"
            >
                Back to Destinations
            </a>
        </div>
    );
}
