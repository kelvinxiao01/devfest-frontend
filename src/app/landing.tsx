"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center max-w-2xl p-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Insurance Finder</h1>
        <p className="text-gray-600 text-lg mb-6">
          Our AI-powered system helps you find the best health insurance plans based on your unique needs.
          Get personalized recommendations in just a few steps!
        </p>
        <button
          onClick={() => router.push("/form")}
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
