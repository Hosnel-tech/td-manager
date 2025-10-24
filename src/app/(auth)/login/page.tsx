'use client';

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/register");
        // TODO: Add login logic here
    };
    return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c0-1.1.9-2 2-2s2 .9 2 2-2 4-2 4-2-2.9-2-4zm0 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Se connecter
        </h1>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Adresse email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="email"
              type="email"
              placeholder="Adresse email"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Mot de passe
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="password"
              type="password"
              placeholder="Mot de passe"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#004B70]/80 text-white py-2 rounded-lg hover:bg-[#004B70] transition duration-300"
          >
            Se connecter
          </button>
        </form>

        {/* Text avec redirection vers l'inscription */}
        <p className="text-center text-gray-600 mt-4">
          Vous n&apos;avez pas de compte ?{" "}
          <Link href="/register">
            <button className="text-[#004B70]/80 font-semibold hover:text-[#004B70] hover:underline">
              S&apos;inscrire
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
