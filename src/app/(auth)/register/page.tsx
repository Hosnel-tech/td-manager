import React from "react";
import Link from "next/link";

export default function RegisterPage() {
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
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          S&apos;inscrire
        </h1>

        {/* Étapes */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-3 justify-center items-center">
            <span className="w-8 h-8 flex items-center justify-center bg-[#004B70] text-white rounded-full">
              1
            </span>
            <div className="w-12 h-1 bg-gray-300"></div>
            <span className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
              2
            </span>
            <div className="w-12 h-1 bg-gray-300"></div>
            <span className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
              3
            </span>
          </div>
        </div>

        {/* Informations personnelles */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Informations personnelles
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                Prénom
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                id="firstName"
                type="text"
                placeholder="Prénom"
              />
            </div>
            <div className="w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Nom
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                id="lastName"
                type="text"
                placeholder="Nom"
              />
            </div>
          </div>
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
              htmlFor="phone"
            >
              Numéro de téléphone
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="phone"
              type="tel"
              placeholder="Numéro de téléphone"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-1/2 bg-[#004B70]/80 text-white py-2 rounded-lg hover:bg-[#004B70] transition duration-300"
            >
              Suivant
            </button>
          </div>
        </form>

        {/* Text avec redirection vers l'inscription */}
        <p className="text-center text-gray-600 mt-4">
          Vous avez déjà un compte ?{" "}
          <Link href="/login">
            <button className="text-[#004B70]/80 font-semibold hover:text-[#004B70] hover:underline">
              Se connecter
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
