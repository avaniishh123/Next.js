import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">
          Welcome to Feedback Hub
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Share your thoughts with us
        </p>

        <Link href="/feedback">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Open Feedback App
          </button>
        </Link>
      </div>
    </main>
  );
}