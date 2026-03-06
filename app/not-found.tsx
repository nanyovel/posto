"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
          Página no encontrada
        </h2>
        <p className="text-gray-500 mb-8">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-700 transition"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
