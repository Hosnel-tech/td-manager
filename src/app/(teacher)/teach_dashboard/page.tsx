"use client"
import React from 'react';
import Sidebar from '@/components/teach_sidebar'; // Import the Sidebar component

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar component for navigation */}
      <Sidebar />
      
      {/* Main content area */}
      <div className="flex-1 bg-gray-100 p-6">
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center mr-2">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">EduTD Manager</h1>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Tableau de bord</h2>
          <p className="text-gray-600 mb-6">Bienvenue dans votre espace enseignant</p>
          
          {/* Stats section */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-500">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <span className="text-gray-600">Mes TD</span>
              </div>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-gray-600">Étudiants</span>
              </div>
              <p className="text-2xl font-bold">—</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-purple-500">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <span className="text-gray-600">Épreuves</span>
              </div>
              <p className="text-2xl font-bold">0</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gray-600">Moyenne</span>
              </div>
              <p className="text-2xl font-bold">—</p>
            </div>
          </div>
          
          {/* Upcoming TD section */}
          <div className="bg-white p-4 rounded-lg shadow mb-6">
            <h3 className="text-lg font-semibold mb-2">Prochains TD</h3>
            <p className="text-gray-600">Aucun TD.</p>
          </div>
          
          {/* Quick Actions section */}
          {/* <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Actions rapides</h3>
            <div className="space-y-2">
              <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                Voir / gérer mes TD
              </button>
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Ajouter une épreuve
              </button>
              <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
                Voir mes étudiants
              </button>
              <button className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600">
                Statistiques
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}